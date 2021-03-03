import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import { baseURL } from '../../parameters';
import { goTo } from '../../routes/Coordinator';
import IfutureContext from '../../Context/IfutureContext';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';
import Logo from '../../components/Logo'
import {Container, Button} from '../Login/styled'


const Signup = ()=>{
    
    // useUnProtectedPage()
    const history = useHistory()
    
    const { states, setters, requests } = useContext(IfutureContext)

    const [form, onChange] = useForm({ name: "" ,password:"",cpf:"",email:""})
    const [form2, onChange2] = useForm({confirmPassword:""})
    
    useEffect(() => {
        setters.setPage("signup")
    }, [])


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
        <Container>
            <Logo/>
            <form onSubmit={createUser}>
                <Input label="Nome" type="text" name="name" {...form.name} onChange={onChange}/>
                <Input label="E-mail" type="email" name="email" {...form.email} onChange={onChange}/>
                <Input label="CPF" type="text" name="cpf" {...form.cpf} onChange={onChange}/>
                <Input label="Senha" type="password" name="password" className='senha' {...form.password} onChange={onChange}/>
                <Input label="Confirmar" type="password" name="confirmPassword" className='senha' {...form2.confirmPassword} onChange={onChange2}/>
                <Button>Criar</Button>
            </form>
        </Container>
    
    )
}
export default Signup