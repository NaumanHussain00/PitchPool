import React from "react";

export default function PitcherForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      className="bg-[#141414] shadow-xl rounded-3xl p-8 space-y-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl text-[#aeddb6] font-bold text-center mb-4">
        Pitcher Profile 🚀
      </h2>

      <div>
        <label className="block mb-1 text-white font-medium">Startup Name</label>
        <input
          type="text"
          name="startupName"
          placeholder="Enter Startup Name"
          value={formData.startupName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        />
      </div>

      <div>
        <label className="block mb-1 text-white font-medium">Idea Description</label>
        <textarea
          name="ideaDescription"
          placeholder="Enter Idea Description"
          value={formData.ideaDescription}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 text-white font-medium">Startup Stage</label>
        <select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
        >
          <option value="">Select stage</option>
          <option value="idea">Idea</option>
          <option value="MVP">MVP</option>
          <option value="revenue">Revenue</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-white font-medium">Website (Optional)</label>
        <input
          type="url"
          placeholder="Enter Website Name"
          name="website"
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
