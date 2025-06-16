import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-6">
      <div className="bg-[#141414] rounded-full shadow-md px-6 py-3 flex items-center space-x-8">
        {/* Logo */}
        <div className="text-lg font-semibold text-[#aeddb6] pl-2 pr-6">
          Pitchpool
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-[#ffffff] transition">
            How it works
          </a>
          <a href="#" className="hover:text-[#ffffff] transition">
            Services
          </a>
          <a href="#" className="hover:text-[#ffffff] transition">
            About
          </a>
          <a href="#" className="hover:text-[#ffffff] transition">
            Pricing
          </a>
          <a href="#" className="hover:text-[#ffffff] transition">
            FAQs
          </a>
        </nav>

        <Link to={"/signup"}>
          <button className="ml-6 bg-[#aeddb6] text-[#141414] px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            SignUp →
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
