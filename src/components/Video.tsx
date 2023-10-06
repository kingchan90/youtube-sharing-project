import React from 'react';
import { VideoWrapper, Iframe } from './styles';

interface Props {
  url:string;
}

const Video:React.FC<Props> = ({url}) => {
  return (
    <VideoWrapper>
      <Iframe src={url} />
    </VideoWrapper>
  )
}

export default Video;