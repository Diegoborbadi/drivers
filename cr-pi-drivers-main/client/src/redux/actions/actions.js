
export const GET_DRIVERS = "GET_DRIVERS"
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID"
export const GET_FILTERS_ASCEND_DRIVERS = "GET_FILTERS_ASCEND_DRIVERS"

import axios from "axios"

export function getDrivers(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/drivers")
    return dispatch({
        type:"GET_DRIVERS",
        payload:response.data
    })
    }
}

export function getDriversById(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers/${id}`)
    return dispatch({
        type:"GET_DRIVER_BY_ID",
        payload:response.data
    })
    }
}


export const orderAlfabeticamente = (order) => {
    return { type: GET_FILTERS_ASCEND_DRIVERS, payload: order };
  };



export function postDriver(state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/drivers",state)
            alert("Driver creado con exito.")
        } catch (error) {
            alert("Hubo un error al crear Driver.")
        }
    }
}