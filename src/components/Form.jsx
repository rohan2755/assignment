import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className=" bg-[oklch(0.19_0_0)] text-white">
      

      <div className='flex'>
      <div>
      <nav className="px-8 py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          <div className="flex space-x-12">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Events
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Gen AI
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Careers
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Case study
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              SME Talks
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-8 py-16 min-h-[50vh]">
        
        <div className="pr-0 lg:pr-16 mb-12 lg:mb-0">
          <div className="max-w-sm">
            <p className="text-xl lg:text-4xl text-gray-300 mb-8">
              For any collaborative projects or enquiries feel free to connect with us.
            </p>
            
            <div className="text-lg lg:text-xl text-white">
              vayuz.com
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="lg:w-1/2">
          <div className="max-w-sm ml-auto">
            <h1 className="text-6xl lg:text-6xl xl:text-6xl font-light mb-12 leading-tight">
              Connect
              <br />
              With Us
            </h1>

            <div className="space-y-4 text-sm">

              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                />
              </div>


              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                />
              </div>


              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                />
              </div>


              <div className="pt-8 flex justify-end">
                <button
                  className="bg-[#0d4e5d] border-1 text-sm border-[#09a7ce] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer className="px-8 py-8">
        <div className="flex flex-wrap gap-8 max-w-7xl mx-auto">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Insights
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Community
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            Privacy & Policies
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Form;