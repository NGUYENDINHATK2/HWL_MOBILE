import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// ?components
//?types
interface Props {
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  isEnded: boolean;
  setIsEnded: (value: boolean) => void;
  replayVideo: () => void;
}
import styles from './style';
import IconPlay from './Icon/play.png';
import IconPause from './Icon/pause-button.png';
import IconReplay from './Icon/replay.png';
const PlayComponent: FunctionComponent<Props> = (props) => {

  const { isPaused,
    setIsPaused,
    isEnded,
    setIsEnded,
    replayVideo,
  } = props;

  const handlePress = () => {
    if (isEnded) {
      replayVideo();
      setIsEnded(false);
    } else {
      setIsPaused(!isPaused);
    }
  }

  const renderIcon = () => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={isPaused ?
            isEnded ? IconReplay : IconPlay
            : IconPause
          }
          style={[styles.iconPlay]}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={[styles.playContainer]}>
      {renderIcon()}
    </View>
  );
}

export default PlayComponent;