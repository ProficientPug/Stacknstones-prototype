import React from 'react';
// The BrowserRouter import is removed because it's in main.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    // The <Router> wrapper has been removed
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;