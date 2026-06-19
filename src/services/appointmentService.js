export const createAppointment = async(data) =>{
    const response = await fetch('',{
        method: 'PUT',
        headers:{
            "Content-Type":"applicaton/json"
        },
        body: JSON.stringify(data)
    })
    
    return(response.json())
}