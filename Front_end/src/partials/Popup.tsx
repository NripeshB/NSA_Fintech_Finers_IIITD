import React from "react";
import { useNavigate } from "react-router-dom";

interface Portfolio {
  funds: { name: string; allocationPercentage: number }[];
}

interface PopupProps {
  portfolio: Portfolio;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ portfolio, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Redirect to the homepage
    onClose(); // Optional, if you still want to trigger the onClose callback as well
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-black">Portfolio</h2>
        <ul>
          {portfolio.funds.map((fund, index) => (
            <li key={index} className="mb-2 text-black">
              <strong>{fund.name}</strong>: {fund.allocationPercentage}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
