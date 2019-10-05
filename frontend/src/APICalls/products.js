import Axios from "axios";

var url = "http://localhost:4000";
var token = "";

if (localStorage.getItem("domicilio"))
  token = JSON.parse(localStorage.getItem("domicilio"))[1];

export const addProduct = body => {
  const headers = {
    "Content-Type": "application/json",
    authorization: token
  };
  return Axios.post(`${url}/product/add`, JSON.stringify(body), { headers });
};

export const editProduct = (productId, body) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: token
  };
  return Axios.put(`${url}/product/${productId}`, JSON.stringify(body), {
    headers
  });
};

export const getOneProduct = productId => {
  const headers = {
    "Content-Type": "application/json",
    authorization: token
  };
  return Axios.get(`${url}/product/${productId}`, {
    headers
  });
};

export const deleteOneProduct = productId => {
  const headers = {
    "Content-Type": "application/json",
    authorization: token
  };
  return Axios.delete(`${url}/product/${productId}`, {
    headers
  });
};
