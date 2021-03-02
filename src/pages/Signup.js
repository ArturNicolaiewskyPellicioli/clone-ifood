import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
import { baseURL } from '../parameters';
import { goTo } from '../routes/Coordinator';

const Signup = ()=>{
    const [form, onChange] = useForm({ name: "" ,password:"",cpf:"",email:""})
    const [form2, onChange2] = useForm({confirmPassword:""})
    
    const history = useHistory()


    const createUser = async (event)=>{
        event.preventDefault()
        try {
            const response = await axios.post(`${baseURL}/signup`,form)
            goTo(history, "/login", "")
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <form onSubmit={createUser}>
            <Input label="name" type="text" name="name" {...form.name} onChange={onChange}/>
            <Input label="CPF" type="text" name="cpf" {...form.cpf} onChange={onChange}/>
            <Input label="email" type="email" name="email" {...form.email} onChange={onChange}/>
            <Input label="password" type="password" name="password" {...form.password} onChange={onChange}/>
            <Input label="confirm password" type="password" name="confirmPassword" {...form2.confirmPassword} onChange={onChange2}/>
            <button>Login</button>
        </form>
    )
}
export default Signup