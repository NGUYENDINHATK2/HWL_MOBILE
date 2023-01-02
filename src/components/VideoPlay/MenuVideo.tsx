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

}
import styles from './style';
const MenuVideo: FunctionComponent<Props> = (props) => {
    const { durationVideo,currentTime,isShowMenu, setIsShowMenu, isPaused, setIsPaused } = props;
    return (
        <View style={[styles.menuContainer]}>
            <BackComponent
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
            />
            <PlayComponent
                isPaused={isPaused}
                setIsPaused={setIsPaused}
            />
            <NextComponent
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
            />
            {/* menu bottom */}
            <MenuBottom
                durationVideo = {durationVideo}
                currentTime = {currentTime}
            />
        </View>
    );
}

export default MenuVideo;