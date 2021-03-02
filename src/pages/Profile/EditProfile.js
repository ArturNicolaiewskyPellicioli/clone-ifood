import IfutureContext from '../../Context/IfutureContext'
import React, { useEffect, useContext  } from "react"
import useForm from '../../hooks/useForm'
import { goTo } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import {baseURL, headers} from '../../parameters'

const EditProfile = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [form, onChange] = useForm({ name: "", cpf:"",email:""})
    const history = useHistory(

    )
    const editProfile = async (event) => {
        event.preventDefault()
        try{
            console.log()
            const response = await axios.put(`${baseURL}/profile`,form,{headers})
            console.log(response)
            alert("Success")
            goTo(history, "/home/profile", "")
        } catch(error) {
            console.log(error)
        }
    }

    
    return(
            <form onSubmit={editProfile}>
            <input placeholder="Name" label="name" type="text" name="name" {...form.name} onChange={onChange}/>
            <input placeholder="CPF" label="cpf" type="text" name="cpf" {...form.cpf} onChange={onChange}/>
            <input placeholder="E-mail" label="email" type="email" name="email" {...form.email} onChange={onChange}/>
            <button >Save</button>
            </form>
        
    )
}
export default EditProfile