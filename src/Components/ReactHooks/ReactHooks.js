import '../../index.css';
export default function ReactHooks({ exampleBaseRoute, hooks }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {hooks.map((hook) => (
        <div className="w-full sm:w-auto" key={hook}>
          <a
            href={`${exampleBaseRoute}${hook}`}
            aria-label="React Hooks"
            className="block"
          >
            <button
              className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600
                rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-indigo-400 active:scale-95"
            >
              {hook} hook example
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
