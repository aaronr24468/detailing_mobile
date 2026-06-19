import { Image } from "expo-image";
import { View, Pressable, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import { style } from "../styles/createAppointment";
import calendar from '../../assets/images/calendar.png'
import clock from '../../assets/images/clock.png'

export const DatePickers = ({ hook }) => {

    return (
        <>
            <View style={style.dateTimePicker}>
                <Text>{hook.dateString}</Text>
                <Pressable style={style.btnCalendar} onPress={() => hook.setShowDate(true)}>
                    <Image source={calendar} style={style.calendarImg} />
                </Pressable>

                {hook.showDate && (<DateTimePicker
                    mode={'date'}
                    value={hook.date || new Date()}
                    onValueChange={hook.handleDateChange}
                    onDismiss={() => hook.setShowDate(false)}
                />)}
            </View>

            <View style={style.dateTimePicker}>
                <Text>{hook.timeString}</Text>
                <Pressable style={style.btnCalendar} onPress={() => hook.setShowTime(true)}>
                    <Image source={clock} style={style.calendarImg} />
                </Pressable>

                {hook.showTime && (<DateTimePicker
                    mode={'time'}
                    value={hook.time || new Date()}
                    onValueChange={hook.handleTimeChange}
                    onDismiss={() => hook.setShowTime(false)}
                />)}
            </View>
        </>
    )
}