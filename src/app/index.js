import * as Device from 'expo-device';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { indexStyle } from '../styles/indexStyle';

export default function HomeScreen() {
  return (
    <View style={indexStyle.main}>
      <Text>Hola</Text>
    </View>
  );
}

