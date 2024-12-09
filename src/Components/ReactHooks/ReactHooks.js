import { useContext, useRef } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import '../../index.css';

export default function ReactHooks({ exampleBaseRoute, hooks }) {
  const { spanishMode } = useContext(SpanishModeContext);
  const carouselRef = useRef(null);

  // Function to scroll the carousel to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320, // Adjust the number to scroll by the width of one item
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the carousel to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320, // Adjust the number to scroll by the width of one item
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative py-8 mb-24">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 hover:bg-gray-200 focus:outline-none"
        aria-label="Scroll Left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        className="overflow-x-auto flex gap-8 px-4 scrollbar-hidden"
        ref={carouselRef}
      >
        {hooks.map((hook, index) => (
          <div
            key={hook}
            className="flex-shrink-0 w-[320px] h-[180px] bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
          >
            <a
              href={`${exampleBaseRoute}${hook}`}
              aria-label={
                spanishMode ? `${hook} ejemplo de hook` : `${hook} hook example`
              }
              className="block h-full w-full"
            >
              <button className="w-full h-full px-6 py-4 text-lg font-semibold text-white rounded-xl transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {spanishMode
                  ? `ejemplo de ${hook} hook`
                  : `${hook} hook example`}
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 hover:bg-gray-200 focus:outline-none"
        aria-label="Scroll Right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
