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

export const VideoWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`

export const Iframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    grid-template-columns: auto;
  }
`