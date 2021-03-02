import axios from "axios";
import React, { useState } from "react";
import IfutureContext from "./IfutureContext";
import { baseURL, headers } from "../parameters";

const IfutureProvider = (props) => {

  const [profile, setProfile] = useState([]);
  const [address, setAddress] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [activeOrder, setActiveOrder] = useState({});
  const [cart, setCart] = useState([]);
  const [resDetail, setResDetail] = useState([])
  const [page, setPage] = useState();

  const getProfile = async (event) => {
    try {
      const response = await axios.get(`${baseURL}/profile`, { headers });
      setProfile(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getFullAddress = async (event) => {
    try {
      const response = await axios.get(`${baseURL}/profile/address`, {
        headers,
      });
      // console.log(response)
      setAddress(response.data.address);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrdersHistory = async (event) => {
    try {
      const response = await axios.get(`${baseURL}/orders/history`, {
        headers,
      });
      // console.log(response)
      setOrderHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getActiveOrder = async () => {
    try {
      const response = await axios.get(`${baseURL}/active-order`, { headers });
      setActiveOrder(response.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  const getRestaurantDetail = async (id) => {

    try {
        // const response = await axios.get(`${baseURL}/restaurants/${pathParams}`, { headers })
        const response = await axios.get(`${baseURL}/restaurants/${id}`, { headers })
        setResDetail(response.data.restaurant)
        console.log(response.data.restaurant)

    } catch (error) {
        console.log(error)
    }
  }
  
  const states = {  
    profile, 
    address, 
    orderHistory, 
    activeOrder, 
    cart, 
    resDetail,
    page, };

  const setters = {
    setProfile,
    setAddress,
    setOrderHistory,
    setActiveOrder,
    setCart,
    setResDetail,
    setPage
    
  };
  const requests = {
    getProfile,
    getFullAddress,
    getOrdersHistory,
    getActiveOrder,
    getRestaurantDetail
  };
  const data = { states, setters, requests };

  return (
    <IfutureContext.Provider value={data}>
      {props.children}
    </IfutureContext.Provider>
  );
};
export default IfutureProvider;
