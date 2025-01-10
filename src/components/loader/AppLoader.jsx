import React from 'react';
import { appleImg } from "../../utils";

const AppLoader = ({ fadeOut }) => {
    return (
      <div className={`flex items-center justify-center h-screen bg-black flex-col ${fadeOut ? 'fade-out' : ''}`}>
        {/* Logo */}
        <img
          src={appleImg}
          alt="Apple Logo"
          width={32}
          height={26}
        />
  
        {/* Loader container */}
        <div className="loader-container mt-8">
          <div className="line-loader">
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  };

export default AppLoader;
