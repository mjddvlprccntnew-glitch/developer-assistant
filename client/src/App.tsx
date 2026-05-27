import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <h1 className="navbar-item is-size-4">Developer Assistant</h1>
        </div>
      </nav>
      
      <section className="section">
        <div className="container">
          <div className="box">
            <h2 className="title is-2">Welcome to Developer Assistant</h2>
            <p className="subtitle is-5">A full-stack application built with React, TypeScript, Express.js, and SQL</p>
            
            <div className="content">
              <h3>Tech Stack:</h3>
              <ul>
                <li>Frontend: React with TypeScript</li>
                <li>UI Library: Loon Bulma React</li>
                <li>Backend: Express.js (Node.js)</li>
                <li>Database: SQL</li>
              </ul>
              
              <p>More details coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
