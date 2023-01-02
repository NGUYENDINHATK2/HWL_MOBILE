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
  const [durationVideo, setDurationVideo] = React.useState<any>(0);
  const [progress, setProgress] = React.useState<any>(0);
  const [duration, setDuration] = React.useState<any>(0);
  const [currentTime, setCurrentTime] = React.useState<any>(0);
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
  const onEndVideo = () => {
    console.log('onEndVideo');
    setCurrentTime(durationVideo);
    setProgress(1);
    setIsPlaying(false);
    setIsPaused(true);
    setIsShowMenu(true);
  }
  const onProgress = (event: any) => {
    setCurrentTime(getDurationTime(event.currentTime));
    setProgress(event.currentTime / duration,);
  }
  const onSeekEvent = (event: any) => { }
  const renderMenu = () => {
    return isShowMenu && <MenuVideo
      durationVideo={durationVideo}
      currentTime={currentTime}
      isPaused={isPaused}
      setIsPaused={setIsPaused}
      isShowMenu={isShowMenu}
      setIsShowMenu={setIsShowMenu}
    />
  }
  const renderSeekBar = (fullWidth: boolean) => {
    return (
      <View
        style={[
          styles.seekBar,
          fullWidth ? styles.seekBarFullWidth : {},
        ]}
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
            // onStartShouldSetResponder={this.onSeekStartResponder}
            // onMoveShouldSetPanResponder={this.onSeekMoveResponder}
            // onResponderGrant={this.onSeekGrant}
            // onResponderMove={this.onSeek}
            // onResponderRelease={this.onSeekRelease}
            // onResponderTerminate={this.onSeekRelease}
          />
          ):null
        }
        <View style={[
          styles.seekBarBackground,
          { flexGrow: 1 - progress },
        ]} />
      </View>
    );
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