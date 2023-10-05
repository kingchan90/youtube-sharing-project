import React from "react";
import {StyledHeader, StyledLogo, ButtonContainer, StyledWrapper, CustomerName } from "./styles";
import { Button, SecondaryButton } from '../styles';
import Login from '../Login';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo />
        <Login />
        <ButtonContainer>
          <CustomerName>Welcome some@email.com</CustomerName>
          <Button>Share a movie</Button>
          <SecondaryButton>Logout</SecondaryButton>
        </ButtonContainer>
      </StyledWrapper>
    </StyledHeader>
    )
}

export default Header;