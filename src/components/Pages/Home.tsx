import React from 'react';
import Layout from '../Layout';
import Video from '../Video';
import { Row } from '../styles';

interface VideoType {
  url: string;
}

const Home: React.FC = () => {
  const videos:Array<VideoType> | null = JSON.parse(localStorage.getItem('video') || '[]');
  return (
    <Layout>
      {videos && videos.map((video, index) => {
        return (
          <Row>
            <Video key={video.url+index} url={video.url} />
            <div>
              <h2>Video Title</h2>
            </div>
          </Row>
        )
      })}
      
      {!videos?.length && <p>No videos shared yet</p>}
    </Layout>
  )
}

export default Home;