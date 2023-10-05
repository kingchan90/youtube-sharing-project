import React, { useState } from "react";
import { FormContainer, Input } from './styles';
import { Button } from '../styles';

const InlineForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login / Register</Button>
    </FormContainer>
  );
};

export default InlineForm;
