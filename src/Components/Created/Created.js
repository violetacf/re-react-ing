import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import './Created.css';
import ReactImg from '../../Images/react_logo.png';

export default function CreatedBy() {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="created-container">
      <img className="react-logo" src={ReactImg} alt="React logo"></img>
      <p>
        {spanishMode
          ? 'Diseñado y Desarrollado por'
          : 'Designed & Developed by'}
        {''}
        <a href="https://violeta.cique.es/">Violeta Cique</a> - 2024
      </p>
      <img className="react-logo" src={ReactImg} alt="React logo"></img>
      <p>
        {spanishMode ? 'Iconos de' : 'Icons from'}
        {''}
        <a href="https://www.flaticon.com/">Flaticon</a>
      </p>
      <img className="react-logo" src={ReactImg} alt="React logo"></img>
    </div>
  );
}
