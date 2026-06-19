
import { View, Text, Pressable, TextInput, StatusBar, ScrollView } from "react-native"
import { style } from "../styles/createAppointment";
import { router } from "expo-router";
import { useCreateAppointment } from "../hooks/useCreateAppointment";


import { useState } from "react";
import { DatePickers } from "../components/dateTimePikers";
import { InputsAppointment } from "../components/inputsAppointmets";


export default function TabThirdScreen() {
    const hook = useCreateAppointment();

    return (
        <View style={style.main}>
            <StatusBar hidden />
            <View style={style.headerText}>
                <Text style={style.TextHeader}>Crea una cita</Text>
            </View>
            <View style={style.containerInputs}>
                <InputsAppointment hook={hook} />

                <View style={style.datePickerConatiner}>
                    <DatePickers hook={hook} />
                </View>

                <View style={style.btnAppointmentContainer}>
                    <Pressable style={style.btnCreateAppointment}>
                        <Text>Crear cita</Text>
                    </Pressable>
                </View>

            </View>

        </View >
    )
}