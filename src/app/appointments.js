import { Image } from 'expo-image';
import { Platform, Pressable, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styleAppointment } from '../styles/appointmentStyle';
import plus from '../../assets/images/plus.png';
import back from '../../assets/images/back.png'
import { useState } from 'react';
import { useListApointment } from '../hooks/useListAppointment';

export default function TabTwoScreen() {
  const hook = useListApointment();

  return (
    <View style={styleAppointment.main}>
      <View style={styleAppointment.options}>
        <TextInput placeholder='Filtrar por nombre' style={styleAppointment.searchAppointment} />
      </View>

      <ScrollView style={styleAppointment.scrollList}>

      </ScrollView>
    </View>

  );
}