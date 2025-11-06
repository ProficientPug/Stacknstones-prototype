import React from 'react';
// The BrowserRouter import is removed because it's in main.jsx
import { Routes, Route } from 'react-router-dom';

// Your main CSS file with the mobile-first layout
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    // 1. Changed className to "appContainer" to match your CSS
    <div className="appContainer">

      <Navbar className="sidebar" />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </main>
      
      {/* Footer removed from here */}
    </div>
  );
}

export default App;