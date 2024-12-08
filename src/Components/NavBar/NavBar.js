import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';

export default function NavBar({ onMakeItReactClick }) {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="flex justify-center p-4">
      <div className="flex space-x-4">
        <a
          href="/"
          aria-label={spanishMode ? 'Re-React-ando' : 'Re-React-ing'}
          className="group"
        >
          <button className="transition-transform transform hover:scale-105 text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
            {spanishMode ? 'Re-React-ando' : 'Re-React-ing'}
          </button>
        </a>
        <a href="/react-hooks" aria-label="React Hooks" className="group">
          <button className="transition-transform transform hover:scale-105 text-purple-500 border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white">
            React Hooks
          </button>
        </a>
        <div className="group">
          <button
            className="transition-transform transform hover:scale-105 text-green-500 border border-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white"
            onClick={onMakeItReactClick}
            aria-label={spanishMode ? 'Hazlo React-ionar' : 'Make it React'}
          >
            {spanishMode ? 'Hazlo React-ionar' : 'Make it React'}
          </button>
        </div>
      </div>
    </div>
  );
}
