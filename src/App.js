import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SpanishModeProvider } from './Context/SpanishModeContext';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import CreatedBy from './Components/Created/Created';
import ReactHooks from './Components/ReactHooks/ReactHooks';

function App() {
  return (
    <div className="App">
      <SpanishModeProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="react-hooks" element={<ReactHooks />} />
          </Routes>
        </BrowserRouter>
        <CreatedBy />
      </SpanishModeProvider>
    </div>
  );
}

export default App;
