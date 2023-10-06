import React, { useCallback } from "react";
import {ButtonContainer, CustomerName } from "./styles";
import { ButtonLink, SecondaryButton } from '../styles';
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../store";
import { redirect } from "react-router-dom";

const Account: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const login = useSelector((state:RootState) => state.login);


 const onClickLogOut = useCallback(() => {
    dispatch.login.logoutUser();
  }, [dispatch]);

const onClickShareVideo = () => {
  redirect("/404")

}

  return (<ButtonContainer>
    <CustomerName>{login.user?.username}</CustomerName>
    <ButtonLink to="/share" onClick={onClickShareVideo}>{login.isLoading ? 'Loading...' : 'Share a movie'}</ButtonLink>
    <SecondaryButton disabled={login.isLoading} onClick={onClickLogOut}>{login.isLoading ? 'Loading...' : 'Logout'}</SecondaryButton>
  </ButtonContainer>)
}

export default Account;
