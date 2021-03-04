import IfutureContext from '../../Context/IfutureContext'
import React, { useEffect, useContext  } from "react"
import useForm from '../../hooks/useForm'
import { goTo } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import {baseURL, headers} from '../../parameters'
import {Button, Input, FieldSet} from './EditProfile_styled.js'

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
            <FieldSet><legend>Name∗</legend>
            <Input placeholder="Text" type="text" name="name" value={form.name} onChange={onChange}/>
            </FieldSet>
            
            <FieldSet><legend>CPF∗</legend>
            <Input placeholder="Text" type="text" name="cpf" value={form.cpf} onChange={onChange}/>
            </FieldSet>
            
            <FieldSet><legend>E-mail∗</legend>
            <Input placeholder="Text" type="email" name="email" value={form.email} onChange={onChange}/>
            </FieldSet>

            <Button >Save</Button>
            </form>
        
    )
}
export default EditProfile