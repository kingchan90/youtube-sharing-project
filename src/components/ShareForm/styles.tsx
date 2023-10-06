import styled from 'styled-components';

export const Wrapper = styled.div`
border: solid 1px #dedede;
width: 400px;
margin-left: auto;
margin-right: auto;
position: relative;
padding: 20px;
border-radius: 4px;
`
export const Legend = styled.div`
  background: #242424;
  position: absolute;
  z-index: 1;
  top: 0;
  transform: translate(0, -50%);
  padding: 5px;
`

export const FormContainer = styled.form`
  display: flex;
  position: relative;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  max-width: 100%;
  display: block;
`;

export const Label = styled.label`
  padding-left: 5px;
  margin-top: 5px;
`

export const RightCol = styled.div`
flex: 1 1 auto;
display: flex;
flex-direction: column;
gap: 16px;
`