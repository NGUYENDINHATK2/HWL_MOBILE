import React, { FunctionComponent } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
// ?components
//?types
interface Props {
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
}
import styles from './style';
import IconPlay from './Icon/play.png';
import IconPause from './Icon/pause-button.png';
const PlayComponent: FunctionComponent<Props> = (props) => {
  
  const { isPaused, setIsPaused } = props;
  const renderIcon = () => {
    return (
      <TouchableOpacity onPress={() => {
        setIsPaused(!isPaused);
      }}>
        <Image
          source={isPaused ? IconPlay : IconPause}
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