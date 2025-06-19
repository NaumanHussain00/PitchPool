import React, { useState } from "react";
import { useSelector } from "react-redux";
import PitcherForm from "../components/profile/PitcherForm";
import { useNavigate } from "react-router-dom";

export default function CreatePitcherProfile() {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupName: "",
    ideaDescription: "",
    stage: "",
    website: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/profile/pitcher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Profile created:", result);
      Navigate("/");
      alert("Pitcher profile submitted!");
    } catch (err) {
      console.error("Error:", err);
      alert("Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <PitcherForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
