import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';

export default function BackButton() {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-wrap gap-4 w-full max-w-xs justify-center mb-12">
        <a
          href="/"
          aria-label={
            spanishMode ? 'Vuelve a Re-React-ando' : 'Back to Re-React-ing'
          }
          className="group w-full sm:w-auto"
        >
          <button className="transition-transform transform hover:scale-105 text-blue-500 border border-blue-500 w-full sm:w-auto px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white">
            {spanishMode ? 'Vuelve a Re-React-ando' : 'Back to Re-React-ing'}
          </button>
        </a>
      </div>
    </div>
  );
}
