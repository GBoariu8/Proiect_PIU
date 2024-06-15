import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Group from './group';
import './App.css';
import { populateFirestore } from './populateFirestore';

const App = () => {
  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];

  useEffect(() => {
    populateFirestore().catch(console.error);
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="menu">
          <ul>
            {groups.map(group => (
              <li key={group}>
                <Link to={`/group/${group}`}>Group {group}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/group/:groupId" element={<Group />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
