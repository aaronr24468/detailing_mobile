import { Image } from 'expo-image';
import { Platform, Pressable, ScrollView, StyleSheet, View, Text, TextInput, RefreshControl } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styleAppointment } from '../styles/appointmentStyle';
import plus from '../../assets/images/plus.png';
import back from '../../assets/images/back.png'
import { useState } from 'react';
import { useListApointment } from '../hooks/useListAppointment';
import { ListAppointmet } from '../components/listAppointment';
import { InfoAppointment } from '../components/infoAppointment';


export default function TabTwoScreen() {
  const hook = useListApointment();

  return (
    <View style={styleAppointment.main}>
      <View style={styleAppointment.options}>
        {hook.screen === "list" ?
          (
            <TextInput placeholder='Filtrar por nombre' style={styleAppointment.searchAppointment} />
          ) 
          :
          (
            <Text style={styleAppointment.titleScreen}>Appointment Information</Text>
          )
        }

      </View>
      {hook.screen === "list" ?
        (<ListAppointmet hook={hook} />)
        :
        (<InfoAppointment hook={hook}/>)}

    </View>

  );
}