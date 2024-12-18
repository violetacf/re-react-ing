import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';

export default function NavBar({ onMakeItReactClick }) {
  const { spanishMode } = useContext(SpanishModeContext);

  // Haptic feedback function
  const handleClick = () => {
    if (window.navigator && navigator.vibrate) {
      navigator.vibrate(50);
    }
    onMakeItReactClick();
  };

  return (
    <div data-testid="navbar" className="flex justify-center p-4">
      <div className="flex flex-wrap gap-4 w-full max-w-xs justify-center">
        <div className="group w-full sm:w-auto">
          <button
            className="transition-transform transform sm:hover:scale-105 text-green-500 border border-green-500 w-full sm:w-auto px-6 py-3 rounded-md sm:hover:bg-green-500 sm:hover:text-white focus:outline-none focus-visible:ring-0"
            onClick={handleClick}
            aria-label={spanishMode ? 'Hazlo React-ionar' : 'Make it React'}
            onMouseDown={(e) => e.preventDefault()}
          >
            {spanishMode ? 'Hazlo React-ionar' : 'Make it React'}
          </button>
        </div>
      </div>
    </div>
  );
}
