import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';
import styles, { customStyles } from './style';
interface Props { 
    durationVideo: any;
    currentTime : any;
}

import ZoomIn from './Icon/zoom-in.png'
const MenuBottom: FunctionComponent<Props> = (props) => {
    const { durationVideo,currentTime } = props;
    return (
        <View style={[styles.menubottomContainer]}>
            <View style={[styles.timeContainer]}>
                <Text style={[styles.timeText]}>{currentTime} / {
                    durationVideo
                }</Text>
            </View>
            <View>
                <Image
                    source={ZoomIn}
                    style={[styles.iconZoomIn]}
                />
            </View>
        </View>
    );
}

export default MenuBottom;