import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SpanishModeProvider } from './Context/SpanishModeContext';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import CreatedBy from './Components/Created/Created';
import ReactHooks from './Components/ReactHooks/ReactHooks';
import MakeItReact from './Components/MakeItReact/MakeItReact';
import UseStateExample from './Components/ReactHooks/UseStateExample';
import { useState } from 'react';
import UseEffectExample from './Components/ReactHooks/UseEffectExample';
import UseRefExample from './Components/ReactHooks/UseRefExample';

function App() {
  const [showLogo, setShowLogo] = useState(false);

  const handleButtonClick = () => {
    console.log('Make it React button clicked!');
    setShowLogo(true);
    setTimeout(() => setShowLogo(false), 3000);
  };

  const docsBaseUrl = 'https://react.dev/reference/react/';
  const exampleBaseRoute = '/react-hooks/';
  const hooks = [
    'useState',
    'useEffect',
    'useRef',
    'useContext',
    'useReducer',
    'useMemo',
    'useCallback',
    'useLayoutEffect',
    'useImperativeHandle',
    'useDebugValue',
  ];

  return (
    <div className="App">
      <SpanishModeProvider>
        <BrowserRouter>
          <Header />
          <NavBar onMakeItReactClick={handleButtonClick} />
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="react-hooks"
              element={
                <ReactHooks exampleBaseRoute={exampleBaseRoute} hooks={hooks} />
              }
            />
            <Route
              path={`${exampleBaseRoute}${hooks[0]}`}
              element={
                <UseStateExample docsBaseUrl={docsBaseUrl} hook={hooks[0]} />
              }
            />
            <Route
              path={`${exampleBaseRoute}${hooks[1]}`}
              element={
                <UseEffectExample docsBaseUrl={docsBaseUrl} hook={hooks[1]} />
              }
            />
            <Route
              path={`${exampleBaseRoute}${hooks[2]}`}
              element={
                <UseRefExample docsBaseUrl={docsBaseUrl} hook={hooks[2]} />
              }
            />
          </Routes>
        </BrowserRouter>
        <MakeItReact showLogo={showLogo} />
        <CreatedBy />
      </SpanishModeProvider>
    </div>
  );
}

export default App;
