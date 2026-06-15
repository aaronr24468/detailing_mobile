import { useState, useEffect, useCallback } from "react";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Stack } from "expo-router";

export const useListApointment = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [state, setState] = useState(true);

    const getListAppointments = useCallback(() =>{
        alert('hola')
    }, [])

    useEffect(() =>{
        if(state){
            getListAppointments();
        }
    }, [state])

    return{
        state,
        setState
    }
}