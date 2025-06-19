import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const SignUpPage = () => {
  const [role, setRole] = useState("pitcher");
  const [isSignInForm, setIsSignInForm] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

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
    });
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignInForm === false) {
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
        dispatch(
          addUser({
            _id: result._id,
            name: result.name,
            email: result.email,
            role: result.role,
            token: result.token,
          })
        );
        console.log("Signup success:", result);
        if (result.role === "pitcher") {
          Navigate("/create-pitcher-profile");
        } else if (result.role === "investor") {
          Navigate("/create-investor-profile");
        }
      } catch (err) {
        console.error("Signup failed:", err);
      }
    } else {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      try {
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await res.json();
        dispatch(
          addUser({
            _id: result._id,
            name: result.name,
            email: result.email,
            role: result.role,
            token: result.token,
          })
        );
        console.log("Signin success:", result);
        Navigate("/");
      } catch (err) {
        console.error("Signin failed:", err);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec] px-4">
      <div className="max-w-md w-full bg-[#141414] rounded-3xl shadow-xl p-8 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#aeddb6]">
          Join PitchPool 🚀
        </h2>
        <p className="text-center text-white text-sm">
          {isSignInForm ? "Sign In" : "Sign Up"} as a Pitcher or Investor
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
            🚀 Pitcher
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
          {!isSignInForm && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200"
            />
          )}
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
            {isSignInForm
              ? "Sign In as " + role.charAt(0).toUpperCase() + role.slice(1)
              : "Sign Up as " + role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <p
          className="text-sm text-center text-gray-500 hover:cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to PitchPool? Sign Up now"
            : "Already Registered? Sign In now"}
          {/* <a
            href="/login"
            className="text-[#aeddb6] font-medium hover:underline"
          >
            Login
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
