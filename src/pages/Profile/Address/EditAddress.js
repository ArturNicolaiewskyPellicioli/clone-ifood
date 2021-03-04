import React, { useEffect, useContext  } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import {baseURL, headers} from '../../../parameters'
import { goTo } from "../../../routes/Coordinator"
import useForm from "../../../hooks/useForm"

import {FieldSet, Button, Input} from './EditAddress_styled.js'



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
             <FieldSet><legend>Street∗</legend>
            <Input placeholder="Text" type="text" name="street" value={form.street} onChange={onChange}/>
            </FieldSet>

            <FieldSet><legend>Number∗</legend>
            <Input placeholder="Text" type="number" name="number" value={form.number} onChange={onChange}/>
            </FieldSet>

            <FieldSet><legend>Neighbourhood∗</legend>
            <Input placeholder="Text" type="text" name="neighbourhood" value={form.neighbourhood} onChange={onChange}/>
            </FieldSet>

            <FieldSet><legend>City∗</legend>
            <Input placeholder="Text" type="text" name="city" value={form.city} onChange={onChange}/>
            </FieldSet>
            
            <FieldSet><legend>State∗</legend>
            <Input placeholder="Text" type="text" name="state" value={form.state} onChange={onChange}/>
            </FieldSet>

            <FieldSet><legend>Complement∗</legend>
            <Input placeholder="Text" type="text" name="complement" value={form.complement} onChange={onChange}/>
            </FieldSet>

            <Button colorScheme="red">Save</Button>
            </form>
        
    )
}
export default EditAddress