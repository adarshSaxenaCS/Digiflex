import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from '../../../../Layout/Paragraph';
import Heading from '../../../../Layout/Heading';

function Aws_intro() {
    const useCases = [
        { 
            title: "Big Data & Analytics", 
            description: "Real-time data processing with Digiflex-powered AWS solutions.", 
            extra: "Digiflex leverages AWS services like Redshift, Athena, and EMR to offer scalable storage, data lakes, and advanced analytics."
        },
        { 
            title: "AI & Machine Learning", 
            description: "Training and deploying ML models with Digiflex expertise.", 
            extra: "With AWS SageMaker, Rekognition, Polly, and Lex, Digiflex enables businesses to integrate AI-driven automation seamlessly."
        },
        { 
            title: "IoT (Internet of Things)", 
            description: "Managing and analyzing IoT devices with Digiflex solutions.", 
            extra: "Digiflex utilizes AWS IoT Core to provide secure connections and efficient management for billions of IoT devices."
        },
        { 
            title: "Web Hosting", 
            description: "Hosting websites and applications with Digiflex-managed AWS infrastructure.", 
            extra: "Digiflex ensures reliable hosting with AWS EC2, S3, CloudFront, and Route 53 for seamless global delivery."
        },
        { 
            title: "Enterprise Applications", 
            description: "Running SAP, Microsoft, and other enterprise workloads with Digiflex solutions.", 
            extra: "Digiflex optimizes business-critical applications using AWS for high performance, scalability, and security."
        },
        { 
            title: "Gaming", 
            description: "Scalable backend infrastructure for multiplayer games powered by Digiflex.", 
            extra: "Using AWS GameLift and other services, Digiflex delivers high-speed, low-latency game server hosting."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <WrapperContainer>
                {/* AWS Introduction Section */}
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <Heading>
                        <h1>About AWS Cloud Services by Digiflex</h1>
                    </Heading>
                    <div>
                        <Paragraph>
                            Digiflex, a leading provider of cloud solutions, harnesses the power of AWS Cloud to offer computing, storage, databases, networking, security, AI, and analytics services. 
                            Our solutions enable businesses, developers, and enterprises to build, deploy, and manage applications globally with unmatched reliability, security, and cost efficiency.
                        </Paragraph>
                    </div>
                </div>

                {/* AWS Use Cases Section */}
                <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {useCases.map((useCase, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col h-full border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                                >
                                    {/* Header */}
                                    <div className="bg-blue-900 text-white font-bold p-3 sm:p-4 text-center text-sm sm:text-base">
                                        {useCase.title}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-3 sm:p-4 flex-grow">
                                        <p className="text-gray-700 font-semibold text-sm sm:text-base">
                                            {useCase.description}
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm mt-2">
                                            {useCase.extra}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
}

export default Aws_intro;