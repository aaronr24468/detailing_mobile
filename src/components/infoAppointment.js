import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { styleAppointment } from '../styles/appointmentStyle';
import truck from '../../assets/images/normal.webp'
import user from '../../assets/images/user.png'
import date from '../../assets/images/date.png'
import price from '../../assets/images/price.png'
import packageS from '../../assets/images/package.png'
import carSize from '../../assets/images/carSize.png'
import phone from '../../assets/images/phone.png'
import address from '../../assets/images/address.png'

export const InfoAppointment = ({ hook }) => {

    return (
        <View style={styleAppointment.appointmentView}>
            <Image source={truck} style={styleAppointment.imageTruck} />
            <View style={styleAppointment.InfoAppointContainer}>


                <View style={styleAppointment.InfoContainer}>
                    <View style={styleAppointment.nameContainer}>
                        <Image source={user} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>{hook.appointmentInfo.full_name}</Text>
                    </View>
                    <View style={styleAppointment.allInfo}>
                        <View style={styleAppointment.infoBox}>
                            <Image source={date} style={{ width: 40, height: 40 }} />
                            <Text>{hook.getDayWork(hook.appointmentInfo.date_Selection)}</Text>
                            <Text>{hook.localTime(hook.appointmentInfo.hour)}</Text>
                        </View>
                        <View style={styleAppointment.infoBox}>
                            <Image source={phone} style={{ width: 40, height: 40 }} />
                            <Text>{hook.appointmentInfo.phone}</Text>
                        </View>
                        <View style={styleAppointment.infoSize}>
                            <View style={styleAppointment.containSize}>
                                <Image source={carSize} style={{ width: 40, height: 40 }} />
                                <Text>{hook.appointmentInfo.carSize}</Text>
                            </View>
                            <View style={styleAppointment.containSize}>
                                <Image source={packageS} style={{ width: 40, height: 40 }} />
                                <Text>{hook.appointmentInfo.package}</Text>
                            </View>
                        </View>
                        <View style={styleAppointment.infoBox}>
                            <Image source={address} style={{ width: 40, height: 40 }} />
                            <Text>{hook.appointmentInfo.address}</Text>
                        </View>
                        <View style={styleAppointment.infoPrice}>
                            <Image source={price} style={{ width: 40, height: 40 }} />
                            <Text style={{fontSize: 20, fontWeight: '600'}}>${hook.appointmentInfo.pricePackage}</Text>
                        </View>
                    </View>
                </View>



                <View style={styleAppointment.btnAction}>

                    <Pressable onPress={() => hook.setScreen('list')} style={
                        {
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgb(255, 14, 14)',
                            borderRadius: 10
                        }
                    }>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>Back</Text>
                    </Pressable>

                    <Pressable style={
                        {
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgb(130, 255, 14)',
                            borderRadius: 10
                        }
                    }>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>Done</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}