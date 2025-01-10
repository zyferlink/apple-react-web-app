import { Html } from '@react-three/drei';
import React from 'react';
import './Loader.css'; 

const Loader = () => {
    return (
        <Html
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="loader-container">
                <div className="line-loader">
                    <div className="line"></div>
                </div>
                <span className="loading-text">Loading...</span>
            </div>
        </Html>
    );
};

export default Loader;
