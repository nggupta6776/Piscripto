import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary px-6 md:px-10 lg:px-20 py-10 rounded-lg relative overflow-hidden">
      
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> with Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-light">
          <img src={assets.group_profiles} alt="Doctor Profiles" className="w-2" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center justify-between bg-white text-gray-600 px-8 py-3 rounded-full text-sm font-medium shadow-md hover:scale-105 transition "
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="ml-2 w-4" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          src={assets.header_img}
          alt="Doctors"
          className="w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
