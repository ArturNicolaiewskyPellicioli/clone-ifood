import axios from "axios"

import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IfutureContext from "../Context/IfutureContext"
import { baseURL, headers } from "../parameters"

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [resDetail, setResDetail] = useState([])
    const pathParams = useParams()

    useEffect(() => {
        getRestaurantDetail()
        setters.setPage("details")
    }, [])


    const getRestaurantDetail = async () => {

        try {
            const response = await axios.get(`${baseURL}/restaurants/${pathParams.id}`, { headers })
            // const response = await axios.get(`${baseURL}/restaurants/1`, { headers })
            setResDetail(response.data.restaurant)
            console.log(response.data.restaurant)

        } catch (error) {
            console.log(error)
        }
    }

    const showDetail = resDetail.products && resDetail.products.map((product) => {
        return (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>R$ {(product.price?? 0).toFixed(2)}</p>
                <img src={product.photoUrl} style={{width:"100px"}}></img>
                <button>adicionar</button>
            </div>
        )
    })
    const showRestaurant = () => {
        return (
            <div>
                <p>{resDetail.name}</p>
                <p>{resDetail.category}</p>
                <p>{resDetail.deliveryTime}</p>
                <p>{resDetail.deliveryTime} - {Number(resDetail.deliveryTime) + 10}min</p>
                <p>{resDetail.address}</p>
                <img src={resDetail.logoURL}></img>
            </div>
        )
    }

    return (
        <div>
            {showRestaurant()}
            {showDetail}
        </div>
    )
}
export default RestaurantDetail