import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import BackComponent from './BackComponent';
import MenuBottom from './MenuBottom';
import NextComponent from './NextComponent';
import PlayComponent from './PlayComponent';

interface Props {
    durationVideo: any;
    currentTime: any;
    isShowMenu: boolean;
    setIsShowMenu: (value: boolean) => void;
    isPaused: boolean;
    setIsPaused: (value: boolean) => void;
    isMuted: boolean;
    setIsMuted: (value: boolean) => void;
    undoVideo: (timeUndo: any) => void;
    redoVideo: (timeRedo: any) => void;
    isEnded: boolean;
    setIsEnded: (value: boolean) => void;
    replayVideo: () => void;
}
import styles from './style';
const MenuVideo: FunctionComponent<Props> = (props) => {
    const { durationVideo,
        currentTime,
        isShowMenu,
        isMuted,
        setIsMuted,
        setIsShowMenu,
        isPaused,
        setIsPaused,
        undoVideo,
        redoVideo,
        isEnded,
        setIsEnded,
        replayVideo,
    } = props;
    return (
        <View style={[styles.menuContainer]}>
            <BackComponent
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
            />
            <PlayComponent
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                isEnded={isEnded}
                setIsEnded={setIsEnded}
                replayVideo={replayVideo}
            />
            <NextComponent
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
            />
            {/* menu bottom */}
            <MenuBottom
                durationVideo={durationVideo}
                currentTime={currentTime}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                undoVideo={undoVideo}
                redoVideo={redoVideo}
            />
        </View>
    );
}

export default MenuVideo;