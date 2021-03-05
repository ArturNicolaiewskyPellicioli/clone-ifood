import React, { useEffect, useContext  } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import {baseURL, headers} from '../../../parameters'
import { goTo } from "../../../routes/Coordinator"
import useForm from "../../../hooks/useForm"
import {Container, Button, Box} from '../../Login/styled'
import Input from '../../../components/Input';
import useProtectedPage from "../../../hooks/useProtectedPage"



const EditAddress = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [form, onChange] = useForm({ street: "", number:"",neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory()
    useProtectedPage()

    
    const editAddress = async (event) => {
        event.preventDefault()
        try{
            
            const response = await axios.put(`${baseURL}/address`,form,{headers})
          
            alert("Success")
            goTo(history, "/home/profile", "")
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setters.setPage('profile/edit/address')
    }, [])

    
    return(
        <Container>
            <form onSubmit={editAddress}>
            <Input label="Street" type="text"  name="street" {...form.street} onChange={onChange}/>
            <Input label="number" type="number" name="number" {...form.number} onChange={onChange}/>
            <Input label="neighbourhood" type="text"  name="neighbourhood" {...form.neighbourhood} onChange={onChange}/>
            <Input label="city" type="text"  name="city" {...form.city} onChange={onChange}/>
            <Input label="state" type="text"  name="state" {...form.state} onChange={onChange}/>
            <Input label="complement" type="text" name="complement" {...form.complement} onChange={onChange}/>                <Button>Criar</Button>
            </form>
        </Container>
        
    )
}
export default EditAddress