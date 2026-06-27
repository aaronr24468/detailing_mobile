import { useState, useCallback, useEffect } from "react";
import { createAppointment } from "../services/appointmentService";

export const useCreateAppointment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [packages, setPackage] = useState('Basico');
    const [size, setSize] = useState('Small');
    const [price, setPrice] = useState('')

    const [date, setDate] = useState(null);
    const [dateString, setDateString] = useState('YYYY/MM/DD');
    const [showDate, setShowDate] = useState(false)

    const [time, setTime] = useState(new Date());
    const [timeString, setTimeString] = useState('00:00');
    const [showTime, setShowTime] = useState(false)

    

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            // nos aseguramos que sea un objeto Date real de JavaScript
            const dataObject = new Date(selectedDate);

            // Extraemos el offset en minutos (ej: si estás en GMT-6, devolverá 360)
            const offset = selectedDate.getTimezoneOffset();

            // Modificamos el tiempo restando el desfase convertido a milisegundos
            const localDate = new Date(dataObject.getTime() - (offset * 60 * 1000))

            //Obtenemos el texto puro en formato YYYY-MM-DD sin alteraciones
            const currentDate = localDate.toISOString().split('T')[0];

            setDate(selectedDate)
            setDateString(currentDate)
            setShowDate(false)
        }
    }

    const handleTimeChange = (event, selectTime) => {
        if (selectTime) {
            const dataObject = new Date(selectTime);
            const offset = selectTime.getTimezoneOffset();
            const localTime = new Date(dataObject.getTime() - (offset * 60 * 1000))
            const currentTime = localTime.toISOString().split('T')[1].slice(0,5)
            setTimeString(currentTime)
            setShowTime(false);
        }
    }

    const createAppointmentAction = async() =>{
        try {
            setLoading(true)
            const data = {
                name: name,
                address: address,
                phone: phone,
                packages: packages,
                date: dateString,
                time: timeString,
                price: price,
                size: size
            }
            
            const res = await createAppointment(data)

            if(!res.ok) return setError(res.message);

            alert('Se agendo cita con exito')

            setName(''), setAddress(''), setPhone(''), setPackage('Basico'), setSize('Small'), setPrice(''),
            setDateString('YYYY/MM/DD'), setTimeString('00:00')

        } catch (error) {
            setError(error.message || 'Error de servidor')
        }finally{
            setLoading(false)
        }
    }

    


    return {
        setName,
        setAddress,
        setPhone,
        setPackage,
        packages,
        handleDateChange,
        date,
        setShowDate,
        showDate,
        dateString,
        handleTimeChange,
        setShowTime,
        showTime,
        timeString,
        time,
        setSize,
        size,
        setPrice,
        price,
        createAppointmentAction
    }
}