import React from 'react'
import whiteLogo from '../../assets/main-icon-white.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">

      {/* Logo + Social Icons */}
      <div className="flex flex-col items-center pt-4 pb-5">

        {/* Logo */}
        <img
          src={whiteLogo}
          alt="HoldMySeat Logo"
          className="w-36 h-auto mb-3"
        />

        {/* Social Icons */}
        <div className="flex space-x-4">

          <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

          <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

          <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

          <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

          <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

          <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />

        </div>

      </div>


      {/* Copyright Section */}
      <div className="border-t border-gray-600">

        <p className="text-center text-xs px-4 pt-3 pb-2">
          Copyright 2025 © bookMyScreen Pvt Ltd. Ltd. All Rights Reserved.
        </p>

        <p className="text-center text-xs px-4 pb-3 max-w-5xl mx-auto">
          The content and images used on this site are copyright protected
          and copyrights vests with the respective owners. The usage of the
          content and images on this website is intended to promote the
          works and no endorsement of the artist shall be implied.
        </p>

      </div>

    </footer>
  )
}

export default Footer