import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SpanishModeProvider } from './Context/SpanishModeContext';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import CreatedBy from './Components/Created/Created';
import ReactHooks from './Components/ReactHooks/ReactHooks';
import MakeItReact from './Components/MakeItReact/MakeItReact';
import { useState } from 'react';

function App() {
  const [showLogo, setShowLogo] = useState(false);

  const handleButtonClick = () => {
    setShowLogo(true);
    setTimeout(() => setShowLogo(false), 3000);
  };

  return (
    <div className="App">
      <SpanishModeProvider>
        <BrowserRouter>
          <Header />
          <NavBar onMakeItReactClick={handleButtonClick} />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="react-hooks" element={<ReactHooks />} />
          </Routes>
        </BrowserRouter>
        <MakeItReact showLogo={showLogo} />
        <CreatedBy />
      </SpanishModeProvider>
    </div>
  );
}

export default App;
