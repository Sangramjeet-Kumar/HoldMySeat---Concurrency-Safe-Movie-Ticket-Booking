import mainLogo from "../../assets/main-icon.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full text-sm bg-white">

      {/* ================= TOP NAVBAR ================= */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">

          {/* Left Part */}
          <div className="flex items-center space-x-4">

            {/* Logo */}
            <img
              src={mainLogo}
              alt="HoldMySeat Logo"
              className="h-10 object-contain cursor-pointer"
            />

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none"
              />

              <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
            </div>

          </div>

          {/* Right Part */}
          <div className="flex items-center space-x-6">

            <button className="text-gray-700 hover:text-gray-900">
              Sign In
            </button>

            <button className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700">
              Sign Up
            </button>

          </div>

        </div>
      </div>


      {/* ================= BOTTOM NAVBAR ================= */}
      <div className="bg-[#f2f2f2] px-4 md:px-8">

        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2">

          {/* Left Navigation */}
          <div className="flex items-center space-x-6 font-medium text-gray-700">

            <span className="cursor-pointer hover:text-red-500">
              Movies
            </span>

            <span className="cursor-pointer hover:text-red-500">
              Stream
            </span>

            <span className="cursor-pointer hover:text-red-500">
              Events
            </span>

            <span className="cursor-pointer hover:text-red-500">
              Plays
            </span>

            <span className="cursor-pointer hover:text-red-500">
              Sports
            </span>

            <span className="cursor-pointer hover:text-red-500">
              Activities
            </span>

          </div>


          {/* Right Navigation */}
          <div className="flex items-center space-x-6 text-sm">

            <span className="cursor-pointer hover:underline">
              ListYourShow
            </span>

            <span className="cursor-pointer hover:underline">
              Corporates
            </span>

            <span className="cursor-pointer hover:underline">
              Offers
            </span>

            <span className="cursor-pointer hover:underline">
              Gift Cards
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Header;