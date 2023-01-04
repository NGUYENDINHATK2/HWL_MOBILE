import React, { FunctionComponent } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    backgroundVideo: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000090',
        flexDirection: 'row',
    },
    menubottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    unredoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuBottomContainer: {
        flexDirection: 'row',
    },
    iconZoomIn: {
        width: 25,
        height: 25,
        marginHorizontal: 5,
    },
    timeText: {
        color: '#fff',
        fontSize: 12,
    },
    backContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPlay: {
        width: 40,
        height: 40,
    },
    iconBackNext: {
        width: 20,
        height: 20,
    },
    seekBar: {
        alignItems: 'center',
        height: 30,
        flexGrow: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginLeft: -10,
        marginRight: -5,
        paddingVertical: 5,
    },
    seekBarFullWidth: {
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 0,
        marginTop: -3,
        height: 3,
    },
    seekBarBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 3,
    },
    seekBarProgress: {
        height: 3,
        backgroundColor: '#F00',
    },
    seekBarKnob: {
        width: 20,
        height: 20,
        marginHorizontal: -8,
        marginVertical: -10,
        borderRadius: 10,
        backgroundColor: '#F00',
        transform: [{ scale: 0.8 }],
        zIndex: 1,
    },
    thumbnailVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnailVideoPlay: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const customStyles = StyleSheet.create({});
export default styles;
export { customStyles };