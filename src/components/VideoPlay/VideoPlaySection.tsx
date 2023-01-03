import React, { FunctionComponent } from 'react';
import { View, Text, Pressable } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
// ?types
import { VideoPlayProps } from './types';
import styles, { customStyles } from './style';
import MenuVideo from './MenuVideo';
const getDurationTime = (duration: any) => {
  const padTimeValueString = (value: any) => value.toString().padStart(2, '0');

  if (!Number.isFinite(duration)) return '';
  let seconds = Math.floor(duration % 60), minutes = Math.floor((duration / 60) % 60), hours = Math.floor((duration / (60 * 60)) % 24);

  const isHrsZero = hours === 0;
  hours = isHrsZero ? 0 : padTimeValueString(hours);
  minutes = padTimeValueString(minutes);
  seconds = padTimeValueString(seconds);

  if (isHrsZero) {
    return minutes + ':' + seconds;
  }

  return hours + ':' + minutes + ':' + seconds;
};
const VideoPlaySection: FunctionComponent<VideoPlayProps> = (props) => {
  const player = React.useRef<Video>(null);
  const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [isSeeking, setIsSeeking] = React.useState<boolean>(false);
  const [durationVideo, setDurationVideo] = React.useState<any>(0);
  const [progress, setProgress] = React.useState<any>(0);
  const [duration, setDuration] = React.useState<any>(0);
  const [currentTime, setCurrentTime] = React.useState<any>(0);
  const [seekTouchStart, setSeekTouchStart] = React.useState<any>(0);
  const [seekBarWidth, setSeekBarWidth] = React.useState<any>(400);
  const [seekProgressStart, setSeekProgressStart] = React.useState<any>(0);
  const handlePressShowMenu = () => { setIsShowMenu(!isShowMenu) }
  // React.useEffect(() => {
  //   if (isShowMenu) {
  //     setTimeout(() => {
  //       setIsShowMenu(false);
  //     }, 2000);
  //   }
  // }, [isShowMenu]);
  // React.useEffect(() => {
  //   // set all state to default
  //   setIsPlaying(false);
  //   setIsPaused(true);
  //   setIsMuted(false);
  //   setDurationVideo(0);
  //   setProgress(0);
  //   setDuration(0);
  //   setCurrentTime(0);
  // },[])
  const onLoad = (event: any) => {
    console.log('onLoad');
    setDuration(event.duration)
    setDurationVideo(getDurationTime(event.duration));
    setIsPlaying(true);
    setIsPaused(false);
  }
  const onSeekBarLayout = ({ nativeEvent }: any) => {
    console.log('onSeekBarLayout');
    setSeekBarWidth(nativeEvent.layout.width);
  }
  const onEndVideo = () => {
    console.log('onEndVideo');
    setCurrentTime(durationVideo);
    setProgress(1);
    setIsPlaying(false);
    setIsPaused(true);
    setIsShowMenu(true);
    // player.current?.seek(0);
  }
  const onProgress = (event: any) => {
    setCurrentTime(getDurationTime(event.currentTime));
    setProgress(event.currentTime / duration);
  }
  const onSeekEvent = (event: any) => {
    setCurrentTime(getDurationTime(event.currentTime));
  }
  const onSeekStartResponder = () => {
    return true;
  }
  const onSeekGrant = (e: any) => {
    console.log('onSeekGrant');
    setSeekTouchStart(e.nativeEvent.pageX);
    setSeekProgressStart(progress);
    setIsSeeking(true);
    setIsPaused(true);
  }
  const onSeek = (e: any) => {
    console.log('onSeek');
    const diff = e.nativeEvent.pageX - seekTouchStart;
    const ratio = 120 / seekBarWidth;
    const seekProgress = seekProgressStart + ((diff * ratio) / 120);
    setProgress(seekProgress);
    player.current?.seek(progress * duration);
  }
  const onSeekRelease = () => {
    console.log('onSeekRelease');
    // setIsSeeking(false);
    // setIsPaused(false);
  }
  const undoVideo = (timeUndo: any) => {
    console.log('undoVideo');
  }
  const redoVideo = (timeRedo: any) => {
    console.log('redoVideo');
  }
  const renderSeekBar = (fullWidth: boolean) => {
    return (
      <View
        style={[
          styles.seekBar,
          fullWidth ? styles.seekBarFullWidth : {},
        ]}
        onLayout={onSeekBarLayout}
      >
        <View
          style={[
            { flexGrow: progress },
            styles.seekBarProgress,
          ]}
        />
        {
          isShowMenu ? (
            <View
              style={[
                styles.seekBarKnob,
              ]}
              hitSlop={{ top: 20, bottom: 20, left: 10, right: 20 }}
              onStartShouldSetResponder={onSeekStartResponder}
              onResponderGrant={onSeekGrant}
              onResponderMove={onSeek}
              onResponderRelease={onSeekRelease}
              onResponderTerminate={onSeekRelease}
            />
          ) : null
        }
        <View style={[
          styles.seekBarBackground,
          { flexGrow: 1 - progress },
        ]} />
      </View>
    );
  }
  const renderMenu = () => {
    return isShowMenu && <MenuVideo
      durationVideo={durationVideo}
      currentTime={currentTime}
      isPaused={isPaused}
      setIsPaused={setIsPaused}
      isShowMenu={isShowMenu}
      setIsShowMenu={setIsShowMenu}
      isMuted={isMuted}
      setIsMuted={setIsMuted}
      undoVideo={undoVideo}
      redoVideo={redoVideo}
    />
  }

  return (
    <Pressable
      style={[styles.container]}
      onPress={handlePressShowMenu}
    >
      <Video
        style={styles.backgroundVideo}
        ref={player}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        muted={isMuted}
        resizeMode="cover"
        paused={isPaused
          ? isPaused || isPlaying
          : !isPlaying}
        onLoad={onLoad}
        onEnd={onEndVideo}
        onProgress={onProgress}
        onSeek={onSeekEvent}
      />
      {isShowMenu ? renderMenu() : null}
      {renderSeekBar(true)}
    </Pressable>
  );
}


export default VideoPlaySection;