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

  return (
    <div className="hooks-container">
      {hooks.map((hook) => (
        <div className="hook-container" key={hook}>
          <div className="hook-text">{hook}</div>
        </div>
      ))}
    </div>
  );
}
