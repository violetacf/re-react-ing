import React, { createContext, useState } from 'react';

export const SpanishModeContext = createContext();

export const SpanishModeProvider = ({ children }) => {
  const [spanishMode, setSpanishMode] = useState(false);

  const toggleSpanishMode = () => {
    setSpanishMode((prev) => !prev);
  };

  return (
    <SpanishModeContext.Provider value={{ spanishMode, toggleSpanishMode }}>
      {children}
    </SpanishModeContext.Provider>
  );
};
