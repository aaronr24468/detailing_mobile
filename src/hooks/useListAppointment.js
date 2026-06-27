import { useState, useEffect, useCallback } from "react";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Stack } from "expo-router";
import { getListA } from "../services/listAppointments";

export const useListApointment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [state, setState] = useState(true);
    const [listAppointments, setListAppointments] = useState([])
    const [refresh, setRefresh] = useState(false)

    const getListAppointments = useCallback(async () => {
        try {
            const listDate = [];
            setRefresh(true)
            setLoading(true);
            const data = await getListA();
            if (!data.ok) return setError(list.message);
            setListAppointments(data.list);
        } catch (error) {
            setError(error.message || 'Error de servidor')
        } finally {
            setRefresh(false)
            setLoading(false)
        }
    }, [])

    const getDayWork = (date) => {

        const miDate = new Date(date)

        const today = new Date()

        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const pastTomorrow = new Date();
        pastTomorrow.setDate(today.getDate() + 2);

        const isToday =
            miDate.getUTCFullYear() === today.getFullYear() &&
            miDate.getUTCMonth() === today.getMonth() &&
            miDate.getUTCDate() === today.getDate()

        const isTomorrow =
            miDate.getUTCFullYear() === tomorrow.getFullYear() &&
            miDate.getUTCMonth() === tomorrow.getMonth() &&
            miDate.getUTCDate() === tomorrow.getDate()

        const isPastTomorrow =
            miDate.getUTCFullYear() === pastTomorrow.getFullYear() &&
            miDate.getUTCMonth() === pastTomorrow.getMonth() &&
            miDate.getUTCDate() === pastTomorrow.getDate()

        if (isToday) {
            return 'Hoy';
        } else if (isTomorrow) {
            return 'Mañana';
        } else if (isPastTomorrow) {
            return 'Pasado mañana';
        } else {
            return 'Próximamente'; 
        }
    }

    useEffect(() => {
        getListAppointments();
    }, [])

    return {
        state,
        setState,
        listAppointments,
        getDayWork,
        getListAppointments,
        setRefresh,
        refresh
    }
}