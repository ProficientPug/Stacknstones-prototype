import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Corrected import paths
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/Stacknstones-prototype">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;