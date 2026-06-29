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
        marginBottom: 15,
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
    },



    appointmentView:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        position: "relative",
        paddingTop: 60,
        paddingBottom: 70
    },
    titleScreen:{
        fontSize: 25,
        fontWeight: 600
    },
    imageTruck:{
        width: 150,
        height: 100,
        objectFit: 'cover',
        position: 'absolute',
        top: '8%',
        left: '50%',
        transform: [{translateX: '-50%'}, {translateY: '-50%'}],
        zIndex: 100
    },
    InfoAppointContainer:{
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'rgb(233, 233, 233)',
        boxShadow: 'inset 0px 0px 5px 0px rgb(0,0,0)',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        gap: 5
    },
    InfoContainer:{
        width: '100%',
        height: '85%'
    },
    nameContainer:{
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        gap: 10,
        borderBottomWidth: 3,
        borderBottomColor: 'rgb(179, 179, 179)'
    },
    allInfo:{
        width: '100%',
        height: '85%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    infoBox:{
        width: '49%',
        height: '40%',
        borderBottomWidth: 3,
        borderBottomColor: 'rgb(179, 179, 179)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    infoSize:{
        width: '49%',
        height: '40%',
        borderBottomWidth: 3,
        borderBottomColor: 'rgb(179, 179, 179)',
        display: 'flex',
        flexDirection: 'row',
    },
    containSize:{
        width: '50%',
        height: '100%',
        display: 'flex',
        alignItems:"center",
        justifyContent: 'center'
    },
    infoPrice:{
        width: '100%',
        height: '20%',
        borderBottomWidth: 3,
        borderColor: 'rgb(179, 179, 179)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    btnAction:{
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 4
    }
    
})