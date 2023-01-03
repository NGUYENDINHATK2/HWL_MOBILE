import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

// ?components
import VideoPlaySection from '../../components/VideoPlay/VideoPlaySection';
const HomeMovideSpaceScreenContainer = styled.View`
  flex:1;
  background-color:#000;
`;
const VideoContainer = styled.View`
  width:100%;
  height:30%;
  padding:10px 0;
`;
//?types
interface Props { }

const HomeMovideSpaceScreen: FunctionComponent<Props> = () => {
  return (
    <HomeMovideSpaceScreenContainer >
      <VideoContainer>
        <VideoPlaySection
          video={{
            uri: 'http://192.168.125.81:8000/videos/63a2c5b26c5f9.mp4'
          }}
        />
      </VideoContainer>
      <VideoContainer>
        <VideoPlaySection
          video={{
            uri: 'http://192.168.125.81:8000/videos/63a2ca04a7931.mp4'
          }}
        />
      </VideoContainer>
      <VideoPlayer
        video={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
        showDuration
      />
    </HomeMovideSpaceScreenContainer>
  );
}

export default HomeMovideSpaceScreen;