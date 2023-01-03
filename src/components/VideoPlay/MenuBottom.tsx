import React, { FunctionComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles, { customStyles } from './style';
interface Props {
    durationVideo: any;
    currentTime: any;
    isMuted: boolean;
    setIsMuted: (value: boolean) => void;
}

import ZoomIn from './Icon/zoom-in.png'
import VolumeUp from './Icon/volume-up.png'
import VolumeMute from './Icon/mute.png'
const MenuBottom: FunctionComponent<Props> = (props) => {
    const { durationVideo, currentTime, isMuted, setIsMuted } = props;
    return (
        <View style={[styles.menubottomContainer]}>
            <View style={[styles.timeContainer]}>
                <Text style={[styles.timeText]}>{currentTime} / {
                    durationVideo
                }</Text>
            </View>
            <View style={[styles.menuBottomContainer]}>
                <TouchableOpacity onPress={() => {
                    setIsMuted(!isMuted)
                }}>
                    <Image
                        source={
                            isMuted ? VolumeMute : VolumeUp
                        }
                        style={[styles.iconZoomIn]}
                    />
                </TouchableOpacity>
                <Image
                    source={ZoomIn}
                    style={[styles.iconZoomIn]}
                />
            </View>
        </View>
    );
}

export default MenuBottom;