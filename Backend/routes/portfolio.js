const express = require("express");
const yahooFinance = require("yahoo-finance2");

const router = express.Router();

// Define portfolio allocation percentages
const RISK_ALLOCATION = {
  low: { stocks: 0.3, bonds: 0.7 },
  mid: { stocks: 0.6, bonds: 0.4 },
  high: { stocks: 0.9, bonds: 0.1 },
};

// Portfolio Recommendation Route
router.post("/recommend", async (req, res) => {
  try {
    const { totalSavings, riskAppetite } = req.body;
    
    if (!totalSavings || !riskAppetite) {
      return res.status(400).json({ error: "Missing required inputs" });
    }
    
    // Get stock allocation based on risk
    const stockBudget = totalSavings * RISK_ALLOCATION[riskAppetite].stocks;
    const bondBudget = totalSavings * RISK_ALLOCATION[riskAppetite].bonds;
    
    // Fetch all available stocks and funds from Yahoo Finance
    const allStocks = await yahooFinance.search("India Stocks");
    const stockTickers = allStocks.quotes.map(stock => stock.symbol);
    
    // Fetch stock data from Yahoo Finance
    const stockData = await Promise.all(
      stockTickers.map(async (ticker) => {
        const data = await yahooFinance.quoteSummary(ticker, { modules: ["price", "summaryDetail"] });
        return {
          ticker,
          name: data.price.shortName,
          price: data.price.regularMarketPrice,
          peRatio: data.summaryDetail.trailingPE,
          marketCap: data.price.marketCap,
          dividendYield: data.summaryDetail.dividendYield || 0,
        };
      })
    );
    
    // Select top 5 stocks based on P/E ratio and market cap
    const selectedStocks = stockData
      .filter((s) => s.peRatio && s.marketCap)
      .sort((a, b) => a.peRatio - b.peRatio)
      .slice(0, 5);
    
    // Allocate budget evenly among selected stocks
    const perStockInvestment = stockBudget / selectedStocks.length;
    const recommendedPortfolio = selectedStocks.map((stock) => ({
      name: stock.name,
      ticker: stock.ticker,
      investAmount: perStockInvestment.toFixed(2),
    }));
    
    res.json({
      totalSavings,
      stockBudget,
      bondBudget,
      recommendedPortfolio,
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
