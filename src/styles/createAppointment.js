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
    datePickerConatiner:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    dateTimePicker:{
        width: '50%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        // boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderWidth: 2,
        borderColor: 'rgb(0, 174, 255)',
        justifyContent: 'space-between',
        borderRadius: 10
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
        height: 50,
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderRadius: 5
    },
    calendarImg:{
        width: '100%',
        height: '100%'
    },

    btnAppointmentContainer:{
        width: '100%',
        height: 'auto',
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnCreateAppointment:{
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 174, 255)',
        borderRadius: 10
    }
})