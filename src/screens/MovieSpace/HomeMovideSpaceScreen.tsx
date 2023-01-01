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
//?types
interface Props { }

const HomeMovideSpaceScreen: FunctionComponent<Props> = ({ }) => {
  return (
    <HomeMovideSpaceScreenContainer >
      <VideoPlayer
        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
        showDuration
        // rewind video
      />
    </HomeMovideSpaceScreenContainer>
  );
}

export default HomeMovideSpaceScreen;