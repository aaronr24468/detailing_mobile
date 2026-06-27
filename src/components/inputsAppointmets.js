import { style } from "../styles/createAppointment";
import { View, Text, Pressable, TextInput, StatusBar, ScrollView } from "react-native"
import { Picker } from "@react-native-picker/picker";

export const InputsAppointment = ({ hook }) => {

    return (
        <>
            <View style={style.inputsDataContainer}>
                <Text style={style.textTitleInput}>Fullname</Text>
                <TextInput onChangeText={(value) => hook.setName(value)} style={style.textInputs} />
            </View>
            <View style={style.inputsDataContainer}>
                <Text style={style.textTitleInput}>Address</Text>
                <TextInput onChangeText={(value) => hook.setAddress(value)} style={style.textInputs} />
            </View>
            <View style={style.inputsDataContainer}>
                <Text style={style.textTitleInput}>Phone</Text>
                <TextInput keyboardType="number-pad" onChangeText={(value) => hook.setPhone(value)} style={style.textInputs} placeholder="317-000-0000" />
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
            <View style={style.inputsDataContainer}>
                <Text style={style.textTitleInput}>Car Size</Text>
                <Picker
                    selectedValue={hook.size}
                    onValueChange={(value, index) => { hook.setSize(value) }}
                >
                    <Picker.Item label="Small" value="Small" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="Large" value="Large" />
                </Picker>
            </View>
            <View style={style.inputsDataContainer}>
                <Text style={style.textTitleInput}>Price</Text>
                <TextInput keyboardType="number-pad" onChangeText={(value) => hook.setPrice(value)} style={style.textInputs} placeholder="$0" />
            </View>
        </>
    )
}
