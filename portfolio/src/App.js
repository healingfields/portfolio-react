import logo from './assets/logo.svg';
import './App.css';

import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route
            path='/'
            element={<Profile username='healingfields' />} />
          <Route
            path='/projects'
            element={<Projects username='healingfields' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
