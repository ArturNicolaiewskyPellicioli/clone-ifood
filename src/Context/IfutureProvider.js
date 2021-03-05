import axios from "axios";
import React, { useState } from "react";
import IfutureContext from "./IfutureContext";
import { baseURL, headers } from "../parameters";
import { goTo } from "../routes/Coordinator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

  const history = useHistory();

  const getProfile = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/profile`, {
        headers: { auth: token },
      });
      setProfile(response.data.user);

      if (response.data.user.hasAddress === false) {
        goTo(history, "/address", "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFullAddress = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/profile/address`, {
        headers: { auth: token },
      });
    
      setAddress(response.data.address);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrdersHistory = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/orders/history`, {
        headers: { auth: token },
      });
    
    
      setOrderHistory(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const getActiveOrder = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/active-order`, {
        headers: { auth: token },
      });
    
      setActiveOrder(response.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  const getRestaurantDetail = async (token, id) => {
    try {
      setLoading(true);
    
      const response = await axios.get(`${baseURL}/restaurants/${id}`, {
        headers: { auth: token },
      });
      setResDetail(response.data.restaurant);
     
      localStorage.setItem(
        "restaurantDetails",
        JSON.stringify(response.data.restaurant)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const feedPage = () => {
    setSearchPage(false);
  };

  const addProduto = (product, quantity, id) => {

    const produtos = {
      id: product.id,
      product: product.name,
      price: product.price,
      image: product.photoUrl,
      description: product.description,
      quantity: Number(quantity),
      visible: true,
    };
    const novaLista = [...JSON.parse(localStorage.getItem("carrinho"))];
    novaLista.push(produtos);
   
    setId(id);
    localStorage.setItem("carrinho", JSON.stringify(novaLista));
    setCart(novaLista);
  };

  const createOrder = async (payment, token) => {
    const products =
      JSON.parse(localStorage.getItem("carrinho")) &&
      JSON.parse(localStorage.getItem("carrinho")).map((order) => {
        return {
          id: order.id,
          quantity: Number(order.quantity),
        };
      });

    const body = {
      products: products,
      paymentMethod: payment,
    };

   

    try {
      await axios.post(`${baseURL}/restaurants/${resDetail.id}/order`, body, {
        headers: { auth: token },
      });

      setOrder(true);
    } catch (error) {
      console.log(error);
    }
  };

  const timeInHumanDate = (time) => {
    let dateObj = new Date(time * 1000);
    let utcString = dateObj.toUTCString();
    let data = utcString.slice(0, 11) + " " + utcString.slice(18, 23) + " GMT";
  

    return data;
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
    timeInHumanDate,
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
