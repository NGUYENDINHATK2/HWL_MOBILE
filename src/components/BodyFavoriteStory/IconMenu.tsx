import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import {
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { GIFJSON } from '../../constrain';
interface Props { 
    play : boolean;
    source : any;
    width?: number;
    height?: number;
}
const IconMenu: FunctionComponent<Props> = (props) => {
    const { play,source,width,height } = props;
    return (
        <LottieView
            source={source}
            autoPlay={play}
            loop
            style={{
                width: width?width:30,
                height: height?height:30,
            }}
            speed={1}
        />
    );
}

export default IconMenu;