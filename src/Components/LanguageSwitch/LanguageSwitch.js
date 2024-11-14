import React, { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import SpanishImg from '../../Images/spanish-flag.png';
import EnglishImg from '../../Images/united-kingdom.png';

function LanguageSwitch() {
  const { spanishMode, toggleSpanishMode } = useContext(SpanishModeContext);
  return (
    <div className="language-switch">
      {!spanishMode ? (
        <img
          src={SpanishImg}
          alt="Bandera española. Dale click para leer texto en español"
          onClick={toggleSpanishMode}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          src={EnglishImg}
          alt="English flag. Click to read text in English"
          onClick={toggleSpanishMode}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}

export default LanguageSwitch;
