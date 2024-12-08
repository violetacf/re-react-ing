import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import '../../index.css';

export default function ReactHooks({ exampleBaseRoute, hooks }) {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div className="overflow-x-auto py-8 mb-24">
      <div className="flex gap-8 px-4">
        {hooks.map((hook, index) => (
          <div
            key={hook}
            className="flex-shrink-0 w-[320px] h-[180px] bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
          >
            <a
              href={`${exampleBaseRoute}${hook}`}
              aria-label={
                spanishMode ? `${hook} ejemplo de hook` : `${hook} hook example`
              }
              className="block h-full w-full"
            >
              <button className="w-full h-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {spanishMode
                  ? `ejemplo de ${hook} hook`
                  : `${hook} hook example`}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
