import React, { useState, useEffect } from 'react';
import logo from './../../Images/react_logo.png';

const MakeItReact = ({ showLogo }) => {
  const [logos, setLogos] = useState([]);
  const timerRef = React.useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotateLogo {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    console.log('showLogo changed:', showLogo);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (showLogo) {
      const newLogos = [];
      for (let i = 0; i < 42; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        newLogos.push({ x: randomX, y: randomY });
      }
      setLogos(newLogos);

      timerRef.current = setTimeout(() => {
        console.log('Clearing logos after 1 second');
        setLogos([]);
        timerRef.current = null;
      }, 1000);
    } else {
      setLogos([]);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
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
            backgroundColor: 'transparent',
          }}
        >
          <div
            style={{
              width: '150px',
              height: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
          >
            <img
              data-testid="logo"
              src={logo}
              alt="React Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none',
                backgroundColor: 'transparent',
                animation: 'rotateLogo 4s linear infinite',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MakeItReact;
