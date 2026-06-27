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
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        
    },
    itemContainer:{
        width: '100%',
        height: 130,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderRadius: 10,
        gap: 10,
        marginTop: 5,
        marginBottom: 15
    },
    dateTimeContainer:{
        width: '30%',
        height: '100%'
    },
    descriptionDetailsContainer:{
        width: '70%',
        height: '100%'
    },
    dateStyle:{
        width: '100%',
        height: "30%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(127, 170, 248)',
        borderTopLeftRadius: 10
    },
    timeStyle:{
        width: '100%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(218, 233, 240)',
        borderBottomLeftRadius: 10
    }
    
})