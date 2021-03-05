import React, {useEffect, useContext} from "react"
import AddAddress from "./AddAddress"
import IfutureContext from "../Context/IfutureContext"
import {Container} from '../pages/RestaurantDetail/styled'
import {Title} from '../components/Header/styled'

const Home =()=>{

    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {
        setters.setPage("subscribe")
    }, [])


    return(
        <Container>
            <Title>Meu endereço</Title>
            <AddAddress/>
        </Container>
    )
}
export default Home