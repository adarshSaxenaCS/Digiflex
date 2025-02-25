import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Native_Advantage from "../../../../assets/Nativ_advantage.avif";

function NativeAdvantage() {
  return (
    <WrapperContainer>
      <Heading>Advantages of Digiflex Cloud-Native Solutions</Heading>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-50 rounded-xl shadow-lg">
        {/* Advantages List - Left */}
        <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">Seamless Scalability</p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">High Resilience & Fault Tolerance</p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">Rapid Development & Deployment</p>
        </div>

        {/* Image Center */}
        <div className="flex justify-center">
          <img src={Native_Advantage} alt="Digiflex Advantage" className="w-64 md:w-80 rounded-xl shadow-md" />
        </div>

        {/* Advantages List - Right */}
        <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">Optimized Cost Efficiency</p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">Enhanced Portability & Flexibility</p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">Robust Security & Compliance</p>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default NativeAdvantage;