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
  const [resDetail, setResDetail] = useState([]);
  const [page, setPage] = useState();
  const [id, setId] = useState("");
  const [searchPage, setSearchPage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState(false);


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
      const response = await axios.get(`${baseURL}/orders/history`, {headers});
      console.log("OrdersHistory",response)
      console.log(typeof(response.data))
      setOrderHistory(response.data.orders);
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
      setLoading(true);
      // const response = await axios.get(`${baseURL}/restaurants/${pathParams}`, { headers })
      const response = await axios.get(`${baseURL}/restaurants/${id}`, {
        headers,
      });
      setResDetail(response.data.restaurant);
      console.log(response.data.restaurant);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const feedPage = () => {
    setSearchPage(false);
  };

  const addProduto = (product, quantity, id) => {
    console.log("p", product);
    console.log("q", quantity);
    const produtos = {
      id: product.id,
      product: product.name,
      price: product.price,
      image: product.photoUrl,
      description: product.description,
      quantity: Number(quantity),
      visible:true
    };
    const novaLista = [...states.cart];
    novaLista.push(produtos);
    console.log("c", novaLista);
    setId(id);
    localStorage.setItem("carrinho",JSON.stringify(novaLista));
    setCart(novaLista);

  };

  const createOrder = async (payment) => {
    const products =
      cart &&
      cart.map((order) => {
        return {
          id: order.id,
          quantity: Number(order.quantity),
        };
      });

    const body = {
      products,
      paymentMethod: payment,
    };
    console.log(body);

    try {
      await axios.post(`${baseURL}/restaurants/${resDetail.id}/order`, body, {
        headers,
      });

      setOrder(true);
    } catch (error) {
      console.log(error);
    }
  };
  
  const states = {
    profile,
    address,
    orderHistory,
    activeOrder,
    cart,
    resDetail,
    page,
    searchPage,
    id,
    isLoading,

  };

  const setters = {
    setProfile,
    setAddress,
    setOrderHistory,
    setActiveOrder,
    setCart,
    setResDetail,
    setPage,
    setSearchPage,
    setLoading,
  };
  const requests = {
    getProfile,
    getFullAddress,
    getOrdersHistory,
    getActiveOrder,
    getRestaurantDetail,
    addProduto,
    feedPage,
    createOrder,
  };
  const data = { states, setters, requests };

  return (
    <IfutureContext.Provider value={data}>
      {props.children}
    </IfutureContext.Provider>
  );
};
export default IfutureProvider;
