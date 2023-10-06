// src/components/Login/styles.tsx
import styled from 'styled-components';

// Styled components for form elements
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Error = styled.span`
  position: absolute;
  color: #f14b4b;
  top: 100%;
  margin: 0;
  font-size: 0.8rem;
`

