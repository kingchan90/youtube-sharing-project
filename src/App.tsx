// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountContainer } from './components/Count';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<CountContainer />}>
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
