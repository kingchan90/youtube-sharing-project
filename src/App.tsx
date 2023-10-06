// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux'
import { Dispatch } from './store'
import ShareForm from './components/ShareForm';

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    dispatch.login.getUser();
  }, [dispatch]);
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<ShareForm />}>
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
