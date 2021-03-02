import React, { useEffect, useContext  } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../Context/IfutureContext'
import { goTo } from "../../routes/Coordinator"
import Address from './Address/Address'
import OrderHistory from './OrderHistory/OrderHistory'



const Profile = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const history = useHistory()
    useEffect(() => {
        requests.getProfile()        
    }, [])

    return(
        <div>
            <div>{states.profile.name}</div>
            <div>{states.profile.email}</div>
            <div>{states.profile.cpf}</div>
            <button onClick={()=> goTo(history,"profile/edit", "")}>Editar primeiras informações</button>
            <label>Endereço Cadastrado</label>
            <Address/>
            
            <label>Histórico de Pedidos</label>
            <OrderHistory/>
            
        </div>
    )
}
export default Profile