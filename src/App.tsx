// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Dispatch } from './store'
import Share from './components/Pages/Share';
import Home from './components/Pages/Home';

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    dispatch.login.getUser();
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
