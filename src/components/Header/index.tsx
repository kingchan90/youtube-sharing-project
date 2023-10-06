import React from "react";
import {StyledHeader, StyledLogo, StyledWrapper } from "./styles";
import Login from '../Login';
import Account from './Account';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SkeletonElement from "../Skeleton";

const HeaderContainer: React.FC = () => {
  const login = useSelector((state:RootState) => state.login);
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo />
        {login.isLoading === undefined ? <SkeletonElement /> : (login.isLoading) ? (<SkeletonElement />) : (login.user ? (<Account />) : (<Login />))}
      </StyledWrapper>
    </StyledHeader>
    )
}

export default HeaderContainer;