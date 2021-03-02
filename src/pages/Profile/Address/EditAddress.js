import React, { useEffect, useContext  } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import {baseURL, headers} from '../../../parameters'
import { goTo } from "../../../routes/Coordinator"
import useForm from "../../../hooks/useForm"


const EditAddress = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [form, onChange] = useForm({ street: "", number:"",neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory()

    
    const editAddress = async (event) => {
        event.preventDefault()
        try{
            console.log()
            const response = await axios.put(`${baseURL}/address`,form,{headers})
            console.log(response)
            alert("Success")
            goTo(history, "/home/profile", "")
        } catch(error) {
            console.log(error)
        }
    }

    
    return(
            <form onSubmit={editAddress}>
            <input placeholder="street" label="street" type="text" name="street" {...form.street} onChange={onChange}/>
            <input placeholder="Number" label="number" type="number" name="number" {...form.number} onChange={onChange}/>
            <input placeholder="neighbourhood" label="neighbourhood" type="text" name="neighbourhood" {...form.neighbourhood} onChange={onChange}/>
            <input placeholder="city" label="city" type="text" name="city" {...form.city} onChange={onChange}/>
            <input placeholder="state" label="state" type="text" name="state" {...form.state} onChange={onChange}/>
            <input placeholder="complement" label="complement" type="text" name="complement" {...form.complement} onChange={onChange}/>
           
            <button >Save</button>
            </form>
        
    )
}
export default EditAddress