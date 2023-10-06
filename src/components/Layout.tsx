// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
const AppLayout = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 16px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppLayout>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <p>&copy; 2023 My App</p>
      </Footer>
    </AppLayout>
  );
};

export default Layout;
