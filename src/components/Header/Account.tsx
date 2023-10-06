import React, { useCallback } from "react";
import {ButtonContainer, CustomerName } from "./styles";
import { Button, SecondaryButton } from '../styles';
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../store";

const Account: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const login = useSelector((state:RootState) => state.login);

 const onClickLogOut = useCallback(() => {
    dispatch.login.logoutUser();
  }, [dispatch]);

const onClickShareVideo = useCallback(() => {
  dispatch.login.shareVideo();
}, [dispatch])

  return (<ButtonContainer>
    <CustomerName>{login.user?.username}</CustomerName>
    <Button disabled={login.isLoading} onClick={onClickShareVideo}>{login.isLoading ? 'Loading...' : 'Share a movie'}</Button>
    <SecondaryButton disabled={login.isLoading} onClick={onClickLogOut}>{login.isLoading ? 'Loading...' : 'Logout'}</SecondaryButton>
  </ButtonContainer>)
}

export default Account;