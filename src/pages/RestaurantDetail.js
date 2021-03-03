import axios from "axios"

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import IfutureContext from "../Context/IfutureContext"
import { baseURL, headers } from "../parameters"
import { goTo } from "../routes/Coordinator"

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [resDetail, setResDetail] = useState([])
    const pathParams = useParams()

    const history = useHistory()
    

    useEffect(() => {

        requests.getRestaurantDetail(pathParams.id)
    }, [])

    // const addProduto = (product) =>{
    //     const produtos = { 
    //             id: product.id,
    //             product: product.name,
    //             price: product.price,
    //             image: product.photoUrl,
    //             description: product.description
          

    //     }
    //     const novaLista = [...states.cart]
    //     novaLista.push(produtos)
    //     setters.setCart(novaLista)
    // }
    

    const showDetail = states.resDetail.products && states.resDetail.products.map((product) => {
        return (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>R$ {(product.price?? 0).toFixed(2)}</p>
                <img src={product.photoUrl} style={{width:"100px"}}></img>
                <button onClick={() =>requests.addProduto(product)}>adicionar</button>
            </div>
        )
    })
    const showRestaurant = () => {
        return (
            <div>
                <p>{states.resDetail.name}</p>
                <p>{states.resDetail.category}</p>
                <p>{states.resDetail.deliveryTime}</p>
                <p>{states.resDetail.address}</p>
                <img src={states.resDetail.logoURL}></img>
            </div>
        )
    }

    const goToCart = () =>{
        try{
            goTo(history, "/cart", "")
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            {showRestaurant()}
            {showDetail}
            <button onClick={goToCart}>Ver Carrinho</button>
        </div>
    )
}
export default RestaurantDetail