import React, { useState } from 'react';
import pic4 from '../assets/pic4.jpeg'

const BottomSection = () => {
  const [expandedService, setExpandedService] = useState('flutter');

  const services = [
    {
      id: 'flutter',
      title: 'Flutter App Development',
      description: 'Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience?',
      cta: "Let's get started today!",
      details: 'Cross-platform mobile development with a single codebase. Build native apps for iOS and Android simultaneously with Flutter\'s powerful framework.'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and exceptional user experiences that captivate your audience and drive engagement.',
      details: 'User-centered design approach with modern aesthetics, intuitive navigation, and seamless user journeys across all devices.'
    },
    {
      id: 'customization',
      title: 'Customization & Integration',
      description: 'Tailor solutions to your specific needs with seamless third-party integrations and custom feature development.',
      details: 'API integrations, custom plugins, database connectivity, and enterprise-level customizations for your unique requirements.'
    },
    {
      id: 'testing',
      title: 'Testing & Quality Assurance',
      description: 'Ensure your applications are bug-free, performant, and reliable with comprehensive testing methodologies.',
      details: 'Automated testing, manual QA, performance testing, security audits, and continuous integration pipelines.'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Keep your applications running smoothly with ongoing maintenance, updates, and technical support.',
      details: '24/7 monitoring, regular updates, bug fixes, performance optimization, and dedicated support channels.'
    },
    {
      id: 'consulting',
      title: 'Consulting & Training',
      description: 'Get expert guidance and training to maximize your team\'s potential and project success.',
      details: 'Technical consulting, team training, code reviews, architecture planning, and best practices implementation.'
    },
    {
      id: 'migration',
      title: 'Migration & Upgrades',
      description: 'Seamlessly migrate your existing applications to modern platforms and upgrade to latest technologies.',
      details: 'Legacy system migration, platform upgrades, data migration, and modernization of existing applications.'
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-[oklch(0.19_0_0)] text-white">

      <div className="text-center py-16 px-8">
        <h1 className="text-5xl lg:text-4xl font-semibold mb-3">
          Our Dynamic Services Suite!
        </h1>
        <p className="text-xl lg:text-xl text-gray-300 mb-4">
          Embrace Innovation: Let's Create Together!
        </p>
        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Step into innovation! Explore our range of services and let's create something extraordinary together.
          <br />
          Your vision, our expertise. Let's begin!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-8 pb-16">

        <div className="lg:w-1/2 space-y-2">
          {services.map((service) => (
            <div key={service.id} className=" border-gray-700">
              <button
                onClick={() => toggleService(service.id)}
                className="w-full text-left py-4 flex justify-between items-center transition-colors duration-200 px-4 rounded-lg"
              >
                <h3 className="text-2xl ml-4 lg:text-2xl font-light text-gray-200">
                  {service.title}
                </h3>
                <div className="ml-4">
                  {expandedService === service.id ? (
                    <svg className="w-8 h-8 text-gray-400 transform rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </button>
              

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 pb-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description} {service.cta && (
                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                      {service.cta}
                    </span>
                  )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="lg:w-1/2 lg:pl-16 mt-12 lg:mt-0">
          <div className="relative">
            <img
              src={pic4}
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default BottomSection;