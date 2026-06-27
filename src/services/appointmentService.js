const URL_PATH = `http://192.168.1.82:8181`

export const createAppointment = async(data) =>{
    const response = await fetch(`${URL_PATH}/appointment/generate/appointment`,{
        method: 'PUT',
        headers:{
            "Content-Type":"application/json" 
        },
        body: JSON.stringify(data)
    })
    
    return(response.json())
}