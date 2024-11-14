import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import './NavBar.css';

export default function NavBar({ onMakeItReactClick }) {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="navbar-container">
      <div className="navbar-buttons-container">
        <a href="/">
          <button className="navbar-button">
            {' '}
            {spanishMode ? 'Re-React-ando' : 'Re-React-ing'}{' '}
          </button>
        </a>
        <a href="/react-hooks">
          {' '}
          <button className="navbar-button"> React Hooks </button>
        </a>
        <div>
          <button className="navbar-button" onClick={onMakeItReactClick}>
            {spanishMode ? 'Hazlo React-ionar' : 'Make it React'}
          </button>
        </div>
      </div>
    </div>
  );
}
