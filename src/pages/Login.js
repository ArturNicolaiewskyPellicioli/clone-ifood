import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import IfutureContext from '../Context/IfutureContext';
import useForm from '../hooks/useForm';
import { baseURL } from '../parameters';
import { goTo } from '../routes/Coordinator';
import Logo from '../components/Logo'

const Login = (props) => {
    const { states, setters, requests } = useContext(IfutureContext)
    const [form, onChange, clear] = useForm({email:"",password:""})

    const history=useHistory()

    useEffect(() => {
        setters.setPage("login")
    }, [])
    
    const login = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${baseURL}/login`, form)
            console.log(response)
            localStorage.setItem("token", response.data.token)
            goTo(history, "/home", "")
            clear()
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <>
        <Logo/>    
        <form onSubmit={login}>
            <p>login{states.teste}</p>
            <Input label="email" type="email" name="email" {...form.email} onChange={onChange}/>
            <Input label="password" type="password" name="password" {...form.password} onChange={onChange}/>
            <button>Login</button>
        </form>
    </>
    )
}
export default Login