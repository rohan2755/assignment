import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import BottomSection from './BottomSection';
import Form from './Form'

const FlutterLandingPage = () => {
  return (
    <div className="min-h-screen bg-[oklch(0.19_0_0)] text-white flex">
      <Navbar />
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1">
          <MainContent />
        </div>
        
        <BottomSection />
        <Form/>
      </div>
    </div>
  );
};

export default FlutterLandingPage;