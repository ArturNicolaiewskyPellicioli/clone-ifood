import axios from "axios"
import React, { useEffect, useContext} from "react"
import Input from "../components/Input"
import useForm from "../hooks/useForm"
import { baseURL, headers } from "../parameters"
import IfutureContext from "../Context/IfutureContext"
import {Button} from './Login/styled'
import { Container } from "./Login/styled"

import { goTo } from "../routes/Coordinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const AddAdress = () =>{

    const history = useHistory()

    const {  setters } = useContext(IfutureContext)

    useEffect(() => {
        setters.setPage("address")
       
    }, [])

    const [form, onChange] = useForm({ street: "" ,number:"",neighbourhood:"",city:"",state:"",complement:""})

    const putAdress = async (event)=>{
        event.preventDefault()
        
        try {
            const response = await axios.put(`${baseURL}/address`, form , {headers:{auth:localStorage.getItem('token')}})
          
            localStorage.setItem("token",response.data.token)

            localStorage.setItem("carrinho",'[]')
            goTo(history, '/feed', '')

        } catch (error) {
            console.log(error.response)
        }
    }

    return(
        <Container>
        <form onSubmit={putAdress}>
            <Input label="Street" type="text"  name="street" {...form.street} onChange={onChange}/>
            <Input label="number" type="number" name="number" {...form.number} onChange={onChange}/>
            <Input label="neighbourhood" type="text"  name="neighbourhood" {...form.neighbourhood} onChange={onChange}/>
            <Input label="city" type="text"  name="city" {...form.city} onChange={onChange}/>
            <Input label="state" type="text"  name="state" {...form.state} onChange={onChange}/>
            <Input label="complement" type="text" name="complement" {...form.complement} onChange={onChange}/>
            <Button type='submit'>Salvar</Button>
        </form>
        </Container>
    )
}
export default AddAdress