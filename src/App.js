import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SpanishModeProvider } from './Context/SpanishModeContext';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <SpanishModeProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </BrowserRouter>
      </SpanishModeProvider>
    </div>
  );
}

export default App;
