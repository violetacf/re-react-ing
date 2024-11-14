import React, { useState, useEffect } from 'react';
import logo from './../../Images/react_logo.png';

const MakeItReact = ({ showLogo }) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    if (showLogo) {
      const newLogos = [];
      for (let i = 0; i < 10; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        newLogos.push({ x: randomX, y: randomY });
      }
      setLogos(newLogos);

      setTimeout(() => {
        setLogos([]);
      }, 600);
    }
  }, [showLogo]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      {logos.map((logoPosition, index) => (
        <img
          key={index}
          src={logo}
          alt="React Logo"
          style={{
            position: 'absolute',
            top: logoPosition.y,
            left: logoPosition.x,
            width: '100px',
            height: '100px',
            pointerEvents: 'none',
            backgroundColor: 'transparent',
          }}
        />
      ))}
    </div>
  );
};

export default MakeItReact;
