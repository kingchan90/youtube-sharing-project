import React, { useState } from "react";
import { FormContainer, Wrapper, Legend, Input, Label, RightCol } from './styles';
import { Button } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";

const ShareForm: React.FC = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const dispatch = useDispatch<Dispatch>();
  const video = useSelector((state: RootState) => state.video);
  const handelOnSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    dispatch.video.addVideo({url: youtubeUrl});

  }
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
      </FormContainer>
      {video.videos.map((video) => <div key={video.url + ""}>{video.url}</div>)}
    </Wrapper>
  )
}

export default ShareForm;