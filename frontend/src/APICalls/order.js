import Axios from 'axios';

export const removeOrder = async(id) => {
    let response = await Axios.delete(`http://localhost:4000/order/${id}`);
    return response
};