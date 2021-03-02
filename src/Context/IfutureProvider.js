import axios from "axios"
import React, { useState } from "react"
import IfutureContext from "./IfutureContext"
import { baseURL, headers } from '../parameters'


const IfutureProvider = (props) => {

    const [teste, setTeste] = useState("teste")
    const [profile, setProfile] = useState([])
    const [address, setAddress] = useState([])
    const [orderHistory, setOrderHistory] = useState([])

    const getProfile = async (event) => {       
        
        try {
            const response = await axios.get(`${baseURL}/profile`, {headers})
            setProfile(response.data.user)

        } catch (error) {
            console.log(error)
        }
    }

    const getFullAddress = async (event) => {
        try{
            const response = await axios.get(`${baseURL}/profile/address`, {headers})
            // console.log(response)
            setAddress(response.data.address)
        } catch (error) {
            console.log(error)
        }
    }
    
    const getOrdersHistory = async (event) => {
        try{
            const response = await axios.get(`${baseURL}/orders/history`, {headers})
            // console.log(response)
            setOrderHistory(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const states = { teste, profile, address, orderHistory }
    const setters = { setTeste, setProfile, setAddress, setOrderHistory }
    const requests = {getProfile, getFullAddress, getOrdersHistory}
    const data = { states, setters, requests }

    return (
        <IfutureContext.Provider value={data}>{props.children}</IfutureContext.Provider>
    )
}
export default IfutureProvider