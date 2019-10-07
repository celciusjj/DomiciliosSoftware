import Axios from 'axios';

export const getDeliveries = async() =>{
   const respuesta = await Axios.get("http://localhost:4000/delivers")
   return respuesta.data;
}