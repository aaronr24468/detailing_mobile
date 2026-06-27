import { Image } from 'expo-image';
import { Platform, Pressable, ScrollView, StyleSheet, View, Text, TextInput, RefreshControl } from 'react-native';
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

      <ScrollView style={styleAppointment.scrollList}
        refreshControl={
          <RefreshControl
            refreshing={hook.refresh}  //valor booleano para decirle cuando este refresh
            onRefresh={hook.getListAppointments}
          />
        }
      >
        {hook.listAppointments.map((element, index) => {
          return (
            <View key={index}>
              {element.service_Status === "Appointment"? (<Pressable  style={styleAppointment.itemContainer}>

                <View style={styleAppointment.dateTimeContainer}>
                  <View style={styleAppointment.dateStyle}>
                    <Text>{hook.getDayWork(element.date_Selection)}</Text>
                  </View>
                  <View style={styleAppointment.timeStyle}>
                    <Text>{element.hour}</Text>
                  </View>
                </View>

                <View style={styleAppointment.descriptionDetailsContainer}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>{element.full_name}</Text>
                  <View>
                    <Text>Phone: {element.phone}</Text>
                    <Text>Car size: {element.carSize}</Text>
                    <Text>Package: {element.package}</Text>
                    <Text>Address: {element.address}</Text>
                    <Text>Price: ${element.pricePackage}</Text>
                  </View>
                </View>
              </Pressable>): null}
            </View>
          )
        })}
      </ScrollView>
    </View>

  );
}