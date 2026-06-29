const URL_PATH = `http://192.168.1.82:8181`;

export const getListA = async() =>{
    const response = await fetch(`${URL_PATH}/appointment/getList/appointments`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json" 
        }
    })

    return(response.json())
}

export const getAppointment = async(id) =>{
    const response = await fetch(`${URL_PATH}/appointment/get/appointment/${id}`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(response.json())
}