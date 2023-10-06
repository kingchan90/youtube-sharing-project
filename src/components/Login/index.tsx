import React, { useState } from "react";
import { FormContainer, Input, Error } from './styles';
import { Button } from '../styles';
import { connect } from "react-redux";
import { RootState, Dispatch } from "../../store";

const mapState = (state: RootState) => ({
  login: state.login
});

const mapDispatch = (dispatch: Dispatch) => ({
  loginUser: (payload:{ username: string; password: string }) => dispatch.login.loginUser(payload),
});


type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const LoginForm: React.FC<Props> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    props.loginUser({username, password});
  };

  return (
    <FormContainer onSubmit={(handleSubmit)}>
      <Input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">{ props.login.isLoading ? "Loading..." : "Login / Register"}</Button>
      {!!props.login.error && <Error>{props.login.error}</Error>}
    </FormContainer>
  );
};

const LoginFormContainer = connect(mapState, mapDispatch)(LoginForm);

export default LoginFormContainer;

