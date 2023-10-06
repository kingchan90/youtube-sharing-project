import React, { useEffect } from 'react';
import Layout from '../Layout';
import ShareForm from '../ShareForm';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const login = useSelector((state: RootState) => state.login);
  let navigate = useNavigate();
  useEffect(() => {
    if (!login?.isLoggedIn) {
      return navigate("/");
    }
    return;
  }, [login])
  return (
    <Layout>
      <ShareForm />
    </Layout>
  )
}

export default Home;