import React, { FunctionComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles, { customStyles } from './style';
interface Props {
    durationVideo: any;
    currentTime: any;
    isMuted: boolean;
    setIsMuted: (value: boolean) => void;
    undoVideo: (timeUndo: any) => void;
    redoVideo: (timeRedo: any) => void;
    
}
import ZoomIn from './Icon/zoom-in.png'
import VolumeUp from './Icon/volume-up.png'
import VolumeMute from './Icon/mute.png'
import Undo from './Icon/undoleft.png'
import Redo from './Icon/undoright.png'
const MenuBottom: FunctionComponent<Props> = (props) => {
    const {
        durationVideo,
        currentTime,
        isMuted,
        setIsMuted,
        undoVideo,
        redoVideo,
    } = props;
    const _undoVideo=()=>{
        undoVideo(10);
    }
    const _redoVideo=()=>{
        redoVideo(10);
    }
    return (
        <View style={[styles.menubottomContainer]}>
            <View style={[styles.timeContainer]}>
                <Text style={[styles.timeText]}>{currentTime} / {
                    durationVideo
                }</Text>
                {/* undo and ... */}
                <View style={[styles.unredoContainer]}>
                    <TouchableOpacity onPress={_undoVideo}>
                        <Image
                            source={Undo}
                            style={[styles.iconZoomIn]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_redoVideo}>
                        <Image
                            source={Redo}
                            style={[styles.iconZoomIn]}
                        />
                    </TouchableOpacity>
                </View>
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