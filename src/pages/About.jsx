import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:W-2/4 text-sm text-gray-600'>
          <p>Welcome To prescripto.your Trustedpattner in Mapping your Healthcare Needs Conveniently And Efficiently.At Prescripto.We Understand The Challenges Individulas Foce When it Comes To schedule Doctor Appointment And Managing Their Health Records.Using our platform is easy and intuitive. Patients simply create an account, browse doctors by specialization or location, check their availability, and book an appointment in just a few clicks. Doctors can manage their profiles, set schedules, and confirm or reject appointments through their own dashboards. Our backend handles secure data management, notifications, and appointment tracking, ensuring a smooth and transparent experience for both parties.</p>
          <p>With hundreds of appointments booked and positive feedback from patients and doctors alike, we’re improving access to quality healthcare every day.We are an innovative healthcare technology platform built to bridge the gap between patients and medical professionals. Our system allows users to easily browse, search, and book appointments with certified doctors based on specialty, availability, and user reviews. We understand the importance of timely healthcare, and that's why we created a simple, fast, and reliable solution to manage appointments and consultations online. Our team consists of developers, healthcare consultants, and user experience designers working together to make healthcare more accessible for everyone</p>
          <p className='text-gray-800'>our Vision</p>
          <p>We offer a user-friendly interface, real-time appointment scheduling, and access to top-rated healthcare professionals — all at your fingertips.With hundreds of appointments booked and positive feedback from patients and doctors alike, we’re improving access to quality healthcare every day.Whether you’re a patient seeking care or a doctor expanding your reach, our platform is built to support your needs and help you grow with us.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your.</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendation and remainders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About

