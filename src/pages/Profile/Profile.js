import React, { useEffect, useContext  } from "react"
import IfutureContext from '../../Context/IfutureContext'
import Address from './Address/Address'
import OrderHistory from './OrderHistory/OrderHistory'



const Profile = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {
        requests.getProfile()
        
        
    }, [])

    return(
        <div>
            <div>{states.profile.name}</div>
            <div>{states.profile.email}</div>
            <div>{states.profile.cpf}</div>
            <button>Editar primeiras informações</button>
            <label>Endereço Cadastrado</label>
            <Address/>
            
            <label>Histórico de Pedidos</label>
            <OrderHistory/>
            
        </div>
    )
}
export default Profile