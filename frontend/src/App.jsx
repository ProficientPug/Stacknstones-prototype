import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Your main CSS file with the mobile-first layout
import './App.css'; 

// Import your navigation components
import Navbar from './components/Navbar';


// Import your page components
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';

// --- IMPORTANT ---
// You must import the component that renders your sidebar logo.
// I am guessing it's this one based on your HomePage file:
import AnimatedLogo from './components/AnimatedLogo';

function App() {
  return (
    // 1. This is the main grid container
    <div className="appContainer">

      {/* 2. This is the new sidebar div (Column 1) */}
      <div className="sidebar">
        {/* This is where your logo goes.
          You can also add other sidebar links here if you want.
        */}
        <AnimatedLogo /> 
      </div>

      {/* 3. This is your main content area (Column 2) */}
      <main className="mainContent">
        
        {/* Your Navbar (Home, Projects...) goes INSIDE mainContent */}
        <Navbar /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        

      </main>

    </div>
  );
}

export default App;