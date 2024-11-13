import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
