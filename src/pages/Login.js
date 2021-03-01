import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import IfutureContext from '../Context/IfutureContext';
import useForm from '../hooks/useForm';
import { baseURL } from '../parameters';
import { goTo } from '../routes/Coordinator';

const Login = (props) => {
    const { states } = useContext(IfutureContext)
    const [form, onChange, clear] = useForm({email:"",password:""})

    // console.log(states.teste)
    const history=useHistory()
    
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
        <form onSubmit={login}>
            <p>login{states.teste}</p>
            <Input label="email" type="email" name="email" {...form.email} onChange={onChange}/>
            <Input label="password" type="password" name="password" {...form.password} onChange={onChange}/>
            <button>Login</button>
        </form>
    )
}
export default Login