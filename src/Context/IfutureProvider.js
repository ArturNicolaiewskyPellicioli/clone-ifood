import React, { useState } from "react"
import IfutureContext from "./IfutureContext"

const IfutureProvider = (props) => {
    const [restaurantList,setRestaurantList]=useState([])
    const [teste,setTeste]=useState("teste")

    const states = {teste,restaurantList}
    const setters = {setTeste,setRestaurantList}
    const requests = {}
    const data = {states,setters,requests}

    return(
        <IfutureContext.Provider value={data}>{props.children}</IfutureContext.Provider>
    )
}
export default IfutureProvider