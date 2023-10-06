import React, { useState, useCallback } from "react";
import { FormContainer, Wrapper, Legend, Input, Label, RightCol, SuccessMessage } from './styles';
import { Button } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";

const ShareForm: React.FC = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [submitSuccess, setsubmitSuccess] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const video = useSelector((state: RootState) => state.video);
  const handelOnSubmit = useCallback((e: React.FormEvent) => { 
    e.preventDefault();

    dispatch.video.addVideo({url: youtubeUrl});
    window.localStorage.setItem("video", JSON.stringify([...JSON.parse(localStorage.getItem('video') || '[]'), {url: youtubeUrl}]));
    
    setsubmitSuccess(true);
  }, [dispatch, youtubeUrl, video])
  return (
    <Wrapper>
      <Legend>Share a youtube movie</Legend>
      <FormContainer onSubmit={handelOnSubmit}>
        <Label htmlFor="youtube-url">Youtube URL</Label>
        <RightCol>
        <Input 
          type="text"
          id="youtube-url"
          required
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        <Button style={{width: "100%"}}>Share</Button>
        </RightCol>
        {submitSuccess && <SuccessMessage>Video shared successfully</SuccessMessage>}
      </FormContainer>
    </Wrapper>
  )
}

export default ShareForm;