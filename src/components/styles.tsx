// Global Elements
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  min-width: 150px;
`;

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  min-width: 150px;
  text-align: center;
  &:hover {
    color: #fff;
  }
`;

export const SecondaryButton = styled.button`
padding: 8px 16px;
background-color: #ccc;
color: #333;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
min-width: 150px;
`;
