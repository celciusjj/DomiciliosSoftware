import Axios from "axios";

const url = "http://localhost:4000"; //https://backend-sendpa.herokuapp.com

export const getDeliveries = async () => {
  const respuesta = await Axios.get(`${url}/delivers`);
  return respuesta.data;
};
