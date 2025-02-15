import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import Popup from "../partials/Popup"; // Import the Popup component

const Questionnaire: React.FC = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    monthlySavings: "",
    totalSavings: "",
    age: "",
    riskAppetite: "mid", // Default value
    investmentDuration: "",
    dependents: "",
  });

  // Popup visibility state
  const [showPopup, setShowPopup] = useState(false);

  // Portfolio data (Loaded from JSON file)
  const [portfolios, setPortfolios] = useState<any[]>([]);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // After submitting form, show the popup with random portfolio
    setShowPopup(true);
  };

  // Delete temporary data when page reloads
  useEffect(() => {
    fetch("http://localhost:5000/delete-data", { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error deleting data:", error));

    // Load portfolio data from JSON file
    const loadPortfolios = async () => {
      try {
        const response = await fetch("/portfoliosdb.json");
        const data = await response.json();
        setPortfolios(data); // Set portfolios state with data from JSON file
      } catch (error) {
        console.error("Error loading portfolios:", error);
      }
    };

    loadPortfolios();
  }, []);

  // Function to close the popup and reload the page
  const closePopup = () => {
    setShowPopup(false); // Close the popup
    window.location.reload(); // Reload the page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Site Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <section className="relative bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl p-10 w-full max-w-md border border-white/20">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Investment Questionnaire
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              Answer a few questions to get your personalized investment portfolio.
            </p>
          </div>

          {/* Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Monthly Savings */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Monthly Savings (₹)</label>
                <input
                  type="number"
                  name="monthlySavings"
                  value={formData.monthlySavings}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              {/* Total Savings */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Total Savings (₹)</label>
                <input
                  type="number"
                  name="totalSavings"
                  value={formData.totalSavings}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              {/* Risk Appetite */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Risk Appetite</label>
                <select
                  name="riskAppetite"
                  value={formData.riskAppetite}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                >
                  <option value="low">Low</option>
                  <option value="mid">Mid</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Investment Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Investment Duration (years)</label>
                <input
                  type="number"
                  name="investmentDuration"
                  value={formData.investmentDuration}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              {/* Number of Dependents */}
              <div>
                <label className="block text-sm font-medium text-gray-200">Number of Dependents</label>
                <input
                  type="number"
                  name="dependents"
                  value={formData.dependents}
                  onChange={handleChange}
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
              >
                Get Portfolio
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Banner */}
      <Banner />

      {/* Show Popup if state is true */}
      {showPopup && (
        <Popup
          portfolio={portfolios[Math.floor(Math.random() * portfolios.length)]} // Randomly select portfolio
          onClose={closePopup} // Pass close function to Popup
        />
      )}
    </div>
  );
};

export default Questionnaire;
