import { useState, useCallback } from "react";

export const useCreateAppointment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [packages, setPackage] = useState('Basico');
    const [date, setDate] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const createAppointment = async () => {

    }

    const handleDateChange = (event, selectedDate) =>{
        console.log(selectedDate)
        setShowModal(false)
    }

    return {
        setName,
        setAddress,
        setPhone,
        setPackage,
        packages,
        handleDateChange,
        date,
        setShowModal,
        showModal
    }
}