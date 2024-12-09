import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';

export default function NavBar({ onMakeItReactClick }) {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-wrap gap-4 w-full max-w-xs justify-center">
        <div className="group w-full sm:w-auto">
          <button
            className="transition-transform transform hover:scale-105 text-green-500 border border-green-500 w-full sm:w-auto px-6 py-3 rounded-md hover:bg-green-500 hover:text-white"
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
