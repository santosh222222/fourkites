// import React from "react";
'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Logic to check the scroll position and toggle visibility
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      // Clean up the event listener
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <div>
        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-to-top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  };

  export default ScrollToTopButton