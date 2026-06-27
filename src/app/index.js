import * as Device from 'expo-device';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { indexStyle } from '../styles/indexStyle';
import { VideoPlayer, VideoView, useVideoPlayer } from 'expo-video';

export default function HomeScreen() {

  // const player = useVideoPlayer("url del video", () =>{
  //   player.loop = true;
  //   player.muted = true;
  //   player.play();
  // })

  return (
    <View style={indexStyle.main}>
      {/* <VideoView 
        player={player}
        style={}
      /> */}
    </View>
  );
}

