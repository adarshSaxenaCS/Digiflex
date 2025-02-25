import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import Optimization from '../../../../assets/Optimization.webp';

function OptimizationOverview() {
  return (
    <WrapperContainer>
      <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
        <Heading>
          Cloud Optimization Strategies by Digiflex
        </Heading>
      </h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        <img 
          src={Optimization} 
          alt="Cloud Optimization" 
          className="w-full md:w-80 h-auto max-w-full"
        />
        <Paragraph className="leading-9 text-justify">
          At Digiflex, we help businesses optimize their cloud infrastructure to enhance efficiency,
          reduce costs, and maximize performance. As organizations migrate data, applications, and services
          to the cloud, strategic resource management becomes critical.

          Cloud optimization ensures the right allocation of resources, preventing wasted capacity and
          unnecessary expenses. Without proper planning, businesses may experience "cloud sprawl,"
          leading to inefficiencies and increased costs. By leveraging smart optimization techniques,
          companies can fully utilize their cloud investments.

          This guide explores the fundamentals of cloud optimization, key benefits, and best practices
          to achieve a cost-efficient, high-performing cloud ecosystem. Digiflex specializes in strategic
          planning, monitoring, and resource adjustments to maintain optimal cloud performance and availability.
        </Paragraph>
      </div>
    </WrapperContainer>
  );
}

export default OptimizationOverview;