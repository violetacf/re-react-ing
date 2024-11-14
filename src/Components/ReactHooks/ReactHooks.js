import './ReactHooks.css';

export default function ReactHooks() {
  const hooks = [
    'useState',
    'useEffect',
    'useContext',
    'useReducer',
    'useRef',
    'useMemo',
    'useCallback',
    'useLayoutEffect',
    'useImperativeHandle',
    'useDebugValue',
  ];

  const baseUrl = 'https://react.dev/reference/react/';

  return (
    <div className="hooks-container">
      {hooks.map((hook) => (
        <div className="hook-container" key={hook}>
          <a
            href={`${baseUrl}${hook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hook-text">{hook}</div>
          </a>
        </div>
      ))}
    </div>
  );
}
