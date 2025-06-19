import React from "react";

export default function InvestorForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="bg-[#141414] shadow-xl rounded-3xl p-8 space-y-6" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-center text-[#aeddb6] mb-4">Investor Profile 🦈</h2>

      <div>
        <label className="block mb-1 text-white font-medium">Firm/Investor Name</label>
        <input
          type="text"
          placeholder="Enter Firm Name"
          name="firmName"
          value={formData.firmName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        />
      </div>

      {/* <div>
        <label className="block mb-1 font-medium">Investment Stage</label>
        <select
          name="investmentStage"
          value={formData.investmentStage}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300"
        >
          <option value="">Select Stage</option>
          <option value="Pre-seed">Pre-seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B+">Series B+</option>
        </select>
      </div> */}

      <div>
        <label className="block mb-1 text-white font-medium">Sectors Interested In</label>
        <input
          type="text"
          name="sectorInterest"
          value={formData.sectorInterest}
          onChange={handleChange}
          required
          placeholder="e.g. Fintech, EdTech, AI"
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        />
      </div>

      <div>
        <label className="block mb-1 text-white font-medium">Website (Optional)</label>
        <input
          type="url"
          name="website"
          placeholder="Enter Website Name"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#aeddb6] text-lg text-black py-3 rounded-xl hover:scale-105 transition"
      >
        Submit Profile
      </button>
    </form>
  );
}
