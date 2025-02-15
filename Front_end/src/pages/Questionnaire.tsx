import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partials/Header";
import Banner from "../partials/Banner";

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

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/result"); // Redirect to result page after submission
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
    </div>
  );
};

export default Questionnaire;
