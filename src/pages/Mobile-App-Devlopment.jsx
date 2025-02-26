import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import videoBg from '../assets/blockchain_video.mp4';
import Amp2 from '../container/Services/Custom App/Mobile App Devlopment/Amp2';
import Amp3 from '../container/Services/Custom App/Mobile App Devlopment/Amp3';
import Amp5 from '../container/Services/Custom App/Mobile App Devlopment/Amp5';
import Com from '../assets/Logo2.jpg';
import Com2 from '../assets/Logo3.jpg';
import Com3 from '../assets/Logo4.jpg';
import Com4 from '../assets/Logo5.jpg';
import Heading from '../Layout/Heading';
import WrapperContainer from '../Layout/WrapperContainer';
import FrequentlyAskedQuestions from '../container/Services/Custom App/Mobile App Devlopment/FrequentlyAskedQuestions';



const Amp = () => {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay Div */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-30 text-white max-w-4xl p-8">
          <h1 className="text-[50px] uppercase font-bold">
            Web and Mobile App Development Company
          </h1>
          <p className="text-lg mt-4">
          Empowering businesses by transforming ideas into innovative, high-performing web and mobile applications with seamless functionality, scalability, and user-friendly experiences.          </p>
          
          <div className="flex justify-center py-5">
          <div className="flex flex-wrap justify-center space-x-4">
          <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
          </div>

          {/* Clients Section */}
         
        </div>
      </div>

      
      <WrapperContainer>
      <Amp2 />
      <Amp3 />
      <Amp5 />
      <FrequentlyAskedQuestions/>
      
      </WrapperContainer>
     
  
     
 
      
    </>
  );
};

export default Amp;
