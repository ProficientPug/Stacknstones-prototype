import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // <-- Imports your main CSS

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="appContainer">
      {/* The sidebar div is gone, matching your CSS */}

      <main className="mainContent">
        {/* Your Navbar is at the top of the page */}
        <Navbar /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;