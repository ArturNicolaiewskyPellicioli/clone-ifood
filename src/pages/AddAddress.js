import axios from "axios"
import React, { useEffect, useContext} from "react"
import Input from "../components/Input"
import useForm from "../hooks/useForm"
import { baseURL, headers } from "../parameters"
import IfutureContext from "../Context/IfutureContext"

const AddAdress = () =>{

    const {  setters } = useContext(IfutureContext)

    useEffect(() => {
        setters.setPage("address")
    }, [])

    const [form, onChange] = useForm({ street: "" ,number:"",neighbourhood:"",city:"",state:"",complement:""})

    const putAdress = async (event)=>{
        event.preventDefault()
        console.log(form)
        try {
            const response = await axios.put(`${baseURL}/address`, form , {headers})
            console.log(response)
            localStorage.setItem("token",response.data.token)
        } catch (error) {
            console.log(error.response)
        }
    }

    return(
        <form onSubmit={putAdress}>
            <Input label="Street" type="text" name="street" {...form.street} onChange={onChange}/>
            <Input label="number" type="text" name="number" {...form.number} onChange={onChange}/>
            <Input label="neighbourhood" type="text" name="neighbourhood" {...form.neighbourhood} onChange={onChange}/>
            <Input label="city" type="text" name="city" {...form.city} onChange={onChange}/>
            <Input label="state" type="text" name="state" {...form.state} onChange={onChange}/>
            <Input label="complement" type="text" name="complement" {...form.complement} onChange={onChange}/>
            <button type="submit">enter</button>
        </form>
    )
}
export default AddAdress