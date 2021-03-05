import IfutureContext from '../../Context/IfutureContext'
import React, { useEffect, useContext  } from "react"
import useForm from '../../hooks/useForm'
import { goTo } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import {baseURL, headers} from '../../parameters'
import Input from '../../components/Input'
import { Container, Button } from '../Login/styled'

const EditProfile = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [form, onChange] = useForm({ name: "", cpf:"",email:""})
    const history = useHistory(

    )
    const editProfile = async (event, token) => {
        event.preventDefault()
        try {
            
            const response = await axios.put(`${baseURL}/profile`,form,{headers: {auth: token} })
            
            alert("Success")
            goTo(history, "/profile/edit", "")
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setters.setPage('profile/edit')
    }, [])

    return(
        <Container>
            {states.profile.name &&
            <form onSubmit={editProfile}>
            <Input placeholder={states.profile.name} label="Nome" type="text" name="name" {...form.name} onChange={onChange}/>
            <Input placeholder={states.profile.cpf} label="CPF" type="text" name="cpf" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" {...form.cpf} onChange={onChange}/>
            <Input placeholder={states.profile.email} label="E-mail" type="email" name="email" {...form.email} onChange={onChange}/>
            <Button type='submit'>Save</Button>
            </form>
            }
        </Container>
    )
}
export default EditProfile