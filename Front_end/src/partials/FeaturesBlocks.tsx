import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative bg-gray-950 text-white py-20">
      {/* Background design elements */}
      <div
        className="absolute inset-0 top-1/2 bg-gradient-to-b from-gray-900 to-gray-950 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-700 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto pb-16">
          <h2 className="text-4xl font-extrabold text-white">
            Your Money, Your Rules
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Get personalized investment recommendations tailored to your risk
            appetite.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800 transition hover:scale-105"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "No Jargon, Just Clarity",
    description: "Understand stocks and portfolios in plain, simple terms.",
    icon: "📊",
  },
  {
    title: "AI That Works for You",
    description:
      "Smarter insights, better decisions—without the guesswork.",
    icon: "🤖",
  },
  {
    title: "Instant Portfolio",
    description:
      "Answer a few questions, and we’ll build a strategy that fits.",
    icon: "⚡",
  },
  {
    title: "See Beyond the Numbers",
    description:
      "We don’t just show stock data—we translate it into actionable insights.",
    icon: "🔍",
  },
  {
    title: "Built for Everyone",
    description:
      "Whether you’re a beginner or a pro, we make investing effortless.",
    icon: "🚀",
  },
  {
    title: "Confusion to Confidence",
    description: "Navigate the stock market with AI-powered clarity.",
    icon: "✅",
  },
];

export default FeaturesBlocks;
