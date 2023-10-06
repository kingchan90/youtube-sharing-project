import React from "react";
import { FormContainer, Wrapper, Legend, Input, Label, RightCol } from './styles';
import { Button } from "../styles";

const ShareForm: React.FC = () => {
  return (
    <Wrapper>
      <Legend>Share a youtube movie</Legend>
      <FormContainer>
        <Label htmlFor="youtube-url">Youtube URL</Label>
        <RightCol>
        <Input 
          type="text"
          id="youtube-url"
        />
        <Button style={{width: "100%"}}>Share</Button>
        </RightCol>
      </FormContainer>
    </Wrapper>
  )
}

export default ShareForm;