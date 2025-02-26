import React from "react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const KnowledgeSection = () => {
  return (
    <div className="flex flex-wrap items-start gap-8 p-8 bg-white font-sans">
      {/* Knowledge Left Section */}
      <div className="flex-1">
        <Heading>
          Empower Customer Support with AI-Driven Knowledge Management
        </Heading>
        <Subheading className="text-xl text-gray-600 mb-4">
          Deliver Instant, Intelligent Answers to Enhance Customer Experience
        </Subheading>
        <div className="mb-6">
          <Subheading className="text-lg font-semibold text-blue-600 mb-2">
            AI-Powered Knowledge Base
          </Subheading>
          <p className="text-base text-gray-600 mb-4">
            Provide instant access to relevant knowledge articles, FAQs, and troubleshooting 
            guides, enabling both customers and support agents to resolve issues efficiently. 
            Reduce service request volumes by offering self-service solutions through an 
            intelligent AI-driven knowledge management system.
          </p>
        </div>
        <ul className="list-none space-y-2">
          <li className="text-base text-blue-600">Real-Time AI Article Recommendations</li>
          <li className="text-base text-blue-600">Generative AI-Powered Search Insights</li>
          <li className="text-base text-blue-600">Seamless Integration with Chatbots & Support Portals</li>
          <li className="text-base text-blue-600">Automated Content Curation & Updates</li>
        </ul>
      </div>

      {/* Knowledge Right Section */}
      <div className="flex-1 flex flex-col items-end">
        <img
          src="https://blog.darwinbox.com/hubfs/HR%20Tech%20Implementation.jpg"
          alt="AI-Driven Knowledge Management"
          className="w-full max-w-md rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
};

export default KnowledgeSection;
