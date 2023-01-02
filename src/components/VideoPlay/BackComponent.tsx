import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
interface Props {
  isShowMenu: boolean;
  setIsShowMenu: (value: boolean) => void;
}
import styles from './style';
import IconBack from './Icon/play-and-pause-button-left.png';
const BackComponent: FunctionComponent<Props> = (props) => {
  const doubleTapRef = React.useRef();
  const { isShowMenu, setIsShowMenu } = props;

  const singleTap = () => {
    console.log('singleTap');
    setIsShowMenu(!isShowMenu);
  };
  const doubleTap = () => {
    console.log('doubleTap');
  };

  return (
    <Pressable
      onPress={null}
      style={[styles.backContainer]}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={singleTap}
      >
        <TapGestureHandler
          maxDelayMs={300}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={doubleTap}
        >
          <View style={[styles.backContent]}>
            <Image
              source={IconBack}
              style={[styles.iconBackNext]}
            />
          </View>
        </TapGestureHandler>
      </TapGestureHandler>
    </Pressable>
  );
}

export default BackComponent;