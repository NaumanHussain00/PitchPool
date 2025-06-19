import React, { useState } from "react";
import { useSelector } from "react-redux";
import InvestorForm from "../components/profile/InvestorForm";
import { useNavigate } from "react-router-dom";

export default function CreateInvestorProfile() {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    firmName: "",
    investmentStage: "",
    sectorInterest: "",
    website: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/profile/investor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Investor profile created:", result);
      alert("Investor profile submitted!");
      Navigate("/");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to submit profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <InvestorForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
