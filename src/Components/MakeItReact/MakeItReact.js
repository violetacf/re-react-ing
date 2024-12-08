import React, { useState, useEffect } from 'react';
import logo from './../../Images/react_logo.png';

const MakeItReact = ({ showLogo }) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    if (showLogo) {
      // Generate new logo positions
      const newLogos = [];
      for (let i = 0; i < 10; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        newLogos.push({ x: randomX, y: randomY });
      }
      setLogos(newLogos);

      // Clear logos after 3 seconds
      const timer = setTimeout(() => {
        setLogos([]);
      }, 3000);

      // Cleanup timeout on component unmount or showLogo change
      return () => clearTimeout(timer);
    }
  }, [showLogo]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      {logos.map((logoPosition, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: logoPosition.y,
            left: logoPosition.x,
            backgroundColor: 'transparent', // Make sure background is transparent
          }}
        >
          <div
            style={{
              width: '150px', // Set width of container
              height: '150px', // Set height of container
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // Prevent image overflow
              backgroundColor: 'transparent', // Make sure background is transparent
            }}
          >
            <img
              src={logo}
              alt="React Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Maintain aspect ratio without distortion
                pointerEvents: 'none', // Prevent interaction with the image
                backgroundColor: 'transparent', // Make sure background is transparent
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MakeItReact;
