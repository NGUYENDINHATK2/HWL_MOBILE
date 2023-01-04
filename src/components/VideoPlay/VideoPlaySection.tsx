import React, { FunctionComponent } from 'react';
import { View, Text, Pressable, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
// ?types
import { VideoPlayProps } from './types';
import styles, { customStyles } from './style';
import MenuVideo from './MenuVideo';
import IconPlay from './Icon/play.png';
import IconReplay from './Icon/replay.png';
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
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [isEnded, setIsEnded] = React.useState<boolean>(false);
  const [isRepeat, setIsRepeat] = React.useState<boolean>(false);
  const [isSeeking, setIsSeeking] = React.useState<boolean>(false);
  const [durationVideo, setDurationVideo] = React.useState<any>(0);
  const [progress, setProgress] = React.useState<any>(0);
  const [duration, setDuration] = React.useState<any>(0);
  const [currentTime, setCurrentTime] = React.useState<any>(0);
  const [seekTouchStart, setSeekTouchStart] = React.useState<any>(0);
  const [seekBarWidth, setSeekBarWidth] = React.useState<any>(400);
  const [seekProgressStart, setSeekProgressStart] = React.useState<any>(0);
  const [widthVideo, setWidthVideo] = React.useState<any>(0);
  const [heightVideo, setHeightVideo] = React.useState<any>(0);
  const [resizeModeVideo, setResizeModeVideo] = React.useState<any>('contain');
  const handlePressShowMenu = () => { setIsShowMenu(!isShowMenu) }
  React.useEffect(() => {
    if (isShowMenu) {
      setTimeout(() => {
        setIsShowMenu(false);
      }, 4000);
    }
  }, [isShowMenu]);
  const onLoad = (event: any) => {
    setWidthVideo(event.naturalSize.width);
    setHeightVideo(event.naturalSize.height);
    setDuration(event.duration)
    setDurationVideo(getDurationTime(event.duration));
    setIsPlaying(props.autoplay|| false);
    setIsPaused(false);
    setIsEnded(false);
  }
  const onSeekBarLayout = ({ nativeEvent }: any) => {
    setSeekBarWidth(nativeEvent.layout.width);
  }
  const onEndVideo = () => {
    setCurrentTime(durationVideo);
    setIsPaused(true);
    setIsEnded(true);
    setIsShowMenu(true);
    setProgress(1);
    props.onEnd && props.onEnd();
    // player.current?.seek(0);
  }
  const replayVideo = () => {
    setIsEnded(false);
    setIsPaused(false);
    setIsPlaying(true);
    setProgress(0);
    player.current?.seek(0);

  }
  const onProgress = (event: any) => {
    if (isSeeking) {
      return;
    }
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
    setSeekTouchStart(e.nativeEvent.pageX);
    setSeekProgressStart(progress);
    setIsSeeking(true);
    setIsPaused(true);
  }
  const onSeek = (e: any) => {
    const diff = e.nativeEvent.pageX - seekTouchStart;
    const ratio = 100 / seekBarWidth;
    const seekProgress = seekProgressStart + ((diff * ratio) / 100);
    setProgress(seekProgress);
    player.current?.seek(progress * duration);
  }
  const onSeekRelease = () => {
    setIsSeeking(false);
    setIsPaused(false);
    setIsEnded(false);
  }
  const undoVideo = (timeUndo: any) => {
    setIsEnded(false);
    const progressUndo = progress - (timeUndo / duration);
    setProgress(progressUndo);
    progressUndo > 0 ? player.current?.seek(progressUndo * duration) : player.current?.seek(0);
  }
  const redoVideo = (timeRedo: any) => {
    const progressRedo = progress + (timeRedo / duration);
    setProgress(progressRedo);
    progressRedo < 1 ? player.current?.seek(progressRedo * duration) : player.current?.seek(duration);
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
                isSeeking ? { transform: [{ scale: 1 }], backgroundColor: 'yellow' } : {},
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
      isEnded={isEnded}
      setIsEnded={setIsEnded}
      replayVideo={replayVideo}
    />
  }
  const thumbnailVideo = () => {
    return (
      <View style={styles.thumbnailVideo}>
        <Image
          style={styles.thumbnailVideo}
          source={props.thumbnail}
        />
        <TouchableOpacity
          onPress={() => setIsPlaying(true)}
          style={styles.thumbnailVideoPlay}>
          <Image
            source={IconPlay}
            style={[styles.iconPlay]}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const thumbnailVideoEnded = () => {
    return (
      <View style={styles.thumbnailVideo}>
        <Image
          style={styles.thumbnailVideo}
          source={props.endThumbnail}
        />
        <TouchableOpacity
          onPress={replayVideo}
          style={styles.thumbnailVideoPlay}>
          <Image
            source={IconReplay}
            style={[styles.iconPlay]}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <Pressable
      style={[styles.container]}
      onPress={handlePressShowMenu}
    >
      <Video
        style={styles.backgroundVideo}
        ref={player}
        source={props.video}
        muted={isMuted}
        resizeMode={props.resizeMode || resizeModeVideo}
        paused={isPaused
          ? isPaused || isPlaying
          : !isPlaying}
        onLoad={onLoad}
        onEnd={onEndVideo}
        onProgress={onProgress}
        onSeek={onSeekEvent}
        repeat={props.repeat || false}
      />
      {isShowMenu ? renderMenu() : null}
      {renderSeekBar(true)}
      {
        isPlaying ? null : thumbnailVideo()
      }
      {
        isEnded ? thumbnailVideoEnded() : null
      }
    </Pressable>
  );
}


export default VideoPlaySection;