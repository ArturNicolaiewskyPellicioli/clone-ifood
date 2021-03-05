import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import { baseURL } from '../../parameters';
import { goTo } from '../../routes/Coordinator';
import IfutureContext from '../../Context/IfutureContext';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';
import Logo from '../../components/Logo'
import {Container, Button} from '../Login/styled'
import closedEye from '../../Icons/SVG/senha.svg'
import openedEye from '../../Icons/SVG/senha-2.svg'


const Signup = ()=>{
    
   
    const history = useHistory()
    
    const {  setters } = useContext(IfutureContext)

    const [form, onChange] = useForm({ name: "" ,password:"",cpf:"",email:""})
    const [form2, onChange2] = useForm({confirmPassword:""})
    const [passType, setPassType] = useState('password')
    const [passImage, setPassImage] = useState(closedEye)
    const [passTypeB, setPassTypeB] = useState('password')
    const [passImageB, setPassImageB] = useState(closedEye)
    
    useEffect(() => {
        setters.setPage("signup")
    }, [])


    const createUser = async (event)=>{
        event.preventDefault()
        if(form.password === form2.confirmPassword){
            try {
                const response = await axios.post(`${baseURL}/signup`,form)
                localStorage.setItem('token',response.data.token)
                goTo(history, "/address", "")
            } catch (error) {
                console.log(error)
                alert("Este email ou este CPF ja estão cadastrados")
            }
        } else {
            alert('as senhas estão diferentes')
        }
    }

    const passVisible = () => {
       setPassImage(openedEye)
       setPassType('text')

       if(passType === 'text') {
        setPassImage(closedEye)
        setPassType('password')
       }
    }

    const passVisibleB = () => {
        setPassImageB(openedEye)
        setPassTypeB('text')
 
        if(passTypeB === 'text') {
         setPassImageB(closedEye)
         setPassTypeB('password')
        }
     }

    return (
        <Container>
            <Logo/>
            <form onSubmit={createUser}>
                <Input label="Nome" type="text" name="name" {...form.name} onChange={onChange}/>
                <Input label="E-mail" type="email" name="email" {...form.email} onChange={onChange}/>
                <Input label="CPF" type="text" name="cpf" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" {...form.cpf} onChange={onChange}/>
                <div className='divInputPass'>
                    <Input label="Senha" type={passType} name="password" className='senha' {...form.password} onChange={onChange}/>
                    <img className='imgPass' src={passImage} onClick={passVisible}/>
                </div>
                <div className='divInputPass'>
                    <Input label="Confirmar" type={passTypeB} name="confirmPassword" className='senha' {...form2.confirmPassword} onChange={onChange2}/>
                    <img className='imgPass' src={passImageB} onClick={passVisibleB}/>
                </div>
                <Button>Criar</Button>
            </form>
        </Container>
    
    )
}
export default Signup