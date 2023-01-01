import React,{FunctionComponent} from 'react';
import {View,Text} from 'react-native';

// ?types
import { VideoPlayProps } from './types';

const VideoPlaySection:FunctionComponent<VideoPlayProps> = (props) => {
  return (
    <View>
      <Text>VideoPlaySection</Text>
    </View>
  );
}

export default VideoPlaySection;