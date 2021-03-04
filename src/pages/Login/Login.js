import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import IfutureContext from '../../Context/IfutureContext';
import useForm from '../../hooks/useForm';
import { baseURL } from '../../parameters';
import { goTo } from '../../routes/Coordinator';
import Logo from '../../components/Logo'
import {Container, BoxTitle, Title, Button, Subscribe} from './styled'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'


const Login = (props) => {

    const {  setters } = useContext(IfutureContext)

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

            if ("token" === ''){
            goTo(history, "/home", "")
            clear()
            }
            else {
                localStorage.setItem("carrinho", "[]")
                
                goTo(history, "/feed","")
            }
        } catch (error) {
            console.log(error)
            alert('Primeira vez aqui? Faça seu cadastro!')
        }
    }
    return (
    <Container>
        <Logo/>
        <BoxTitle>
            <Title>Entrar</Title>
            </BoxTitle>    
        <form onSubmit={login}>
            <Input label="E-mail" type="email" name="email" {...form.email} onChange={onChange}/>
            <Input 
                label="Senha" 
                type="password" 
                name="password" 
                {...form.password} 
                onChange={onChange}
                className = 'senha'
            />
            <Button type='submit'>Login</Button>
        </form>
        <Subscribe onClick={()=>{goTo(history, "/signup", "")}} type='submit'>Não possui cadastro? Clique aqui.</Subscribe>
    </Container>
    )
}
export default Login