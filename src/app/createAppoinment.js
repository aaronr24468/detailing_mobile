import { Image } from "expo-image";
import { View, Text, Pressable, TextInput, StatusBar, ScrollView } from "react-native"
import { style } from "../styles/createAppointment";
import { router } from "expo-router";
import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";

import calendar from '../../assets/images/calendar.png'

export default function TabThirdScreen() {
    const hook = useCreateAppointment();
    
    

    return (
        <View style={style.main}>
            <StatusBar hidden/>
            <View style={style.headerText}>
                <Text style={style.TextHeader}>Crea una cita</Text>
            </View>
            <View style={style.containerInputs}>
                <View style={style.inputsDataContainer}>
                    <Text style={style.textTitleInput}>Fullname</Text>
                    <TextInput onChange={(value) => hook.setName(value)} style={style.textInputs} />
                </View>
                <View style={style.inputsDataContainer}>
                    <Text style={style.textTitleInput}>Address</Text>
                    <TextInput onChange={(value) => hook.setName(value)} style={style.textInputs} />
                </View>
                <View style={style.inputsDataContainer}>
                    <Text style={style.textTitleInput}>Phone</Text>
                    <TextInput onChange={(value) => hook.setName(value)} style={style.textInputs} placeholder="317-000-0000" />
                </View>
                <View style={style.inputsDataContainer}>
                    <Text style={style.textTitleInput}>Package</Text>
                    <Picker
                        selectedValue={hook.packages}
                        onValueChange={(value, index) => { hook.setPackage(value) }}
                    >
                        <Picker.Item label="Basico" value="Basico" />
                        <Picker.Item label="Intermedio" value="Intermedio" />
                        <Picker.Item label="Premium" value="Premium" />
                    </Picker>
                </View>
                <View style={style.dateTimePicker}>
                    <Pressable style={style.btnCalendar} onPress={() => hook.setShowModal(true)}>
                        <Image source={calendar} style={style.calendarImg}/>
                    </Pressable>
                    {hook.showModal && (<DateTimePicker
                        mode={'datetime'}
                        value={hook.date || new Date()}
                        onValueChange={hook.handleDateChange}
                    />)}
                </View>
            </View>
        </View >
    )
}