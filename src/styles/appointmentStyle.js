import { StyleSheet } from "react-native";

export const styleAppointment = StyleSheet.create({
    main:{
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'rgb(0, 174, 255)'
    },

    options:{
        width: '100%',
        height: 70,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    searchAppointment:{
        height: "100%",
        width: '100%',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 2.5,
        fontSize: 18,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
   

    scrollList:{
        width: "100%",
        height: '100%',
        backgroundColor: 'white'
    },
    
})