import  { useState } from "react";

const SignUpPage = () => {
  const [role, setRole] = useState("pitcher");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({
      name: "",
      email: "",
      password: "",
      extra: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: role,
    };

    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Signup success:", result);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec] px-4">
      <div className="max-w-md w-full bg-[#141414] rounded-3xl shadow-xl p-8 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#aeddb6]">
          Join Pitchpool 🚀
        </h2>
        <p className="text-center text-white text-sm">
          Sign up as a pitcher or Investor
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleRoleChange("pitcher")}
            className={`px-6 py-2 rounded-full border text-sm font-medium ${
              role === "pitcher"
                ? "bg-[#aeddb6] text-black"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            🚀 pitcher
          </button>
          <button
            onClick={() => handleRoleChange("investor")}
            className={`px-6 py-2 rounded-full border text-sm font-medium ${
              role === "investor"
                ? "bg-[#aeddb6] text-black"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            🦈 Investor
          </button>
        </div>

        <form className="space-y-5 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
          />
          <button
            type="submit"
            className="w-full bg-[#aeddb6] text-lg font-semibold text-black py-3 rounded-xl hover:scale-105 transition"
          >
            Sign Up as {role}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#aeddb6] font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
