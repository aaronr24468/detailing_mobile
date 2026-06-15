import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 174, 255)',
        paddingTop: 30
    },
    headerText:{
        width: '100%',
        height: 60,
        backgroundColor: 'rgb(0, 174, 255)',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    TextHeader:{
        fontSize: 28,
        fontWeight: 500
    },

    containerInputs:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    inputsDataContainer:{
        width: '100%',
        height: 40,
        position: 'relative',
        borderWidth: 2,
        borderColor: 'rgb(0, 174, 255)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 5
    },
    dateTimePicker:{
        width: '100%',
        height: 'auto'
    },
    textTitleInput:{
        position: 'absolute',
        width: 'auto',
        height: 17,
        top: -16,
        left: 10,
        backgroundColor: 'white',
    },
    textInputs:{
        fontSize: 17, 
        width: '100%', 
        height: "40",
        paddingLeft: 10
    },

    btnCalendar:{
        width: 50,
        height: 50
    },
    calendarImg:{
        width: '100%',
        height: '100%'
    }
})