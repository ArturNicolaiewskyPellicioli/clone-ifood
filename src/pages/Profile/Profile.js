import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../Context/IfutureContext'
import { goTo } from "../../routes/Coordinator"
import Address from './Address/Address'
import OrderHistory from './OrderHistory/OrderHistory'
import {Button, Img} from './Profile_Styled'
import {Container} from '../RestaurantDetail/styled'
import {LabelsProfile, UserBox, LabelOrder, MiniGrid } from './Profile_Styled'

const Profile = () => {
    
    const { states, setters, requests } = useContext(IfutureContext)
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){

            requests.getProfile(token)
        }
    }, [states.profile])

    return (
        <Container>
            <UserBox>
                <LabelsProfile>{states.profile.name}</LabelsProfile>
                <LabelsProfile>{states.profile.email}</LabelsProfile>
                <LabelsProfile>{states.profile.cpf}</LabelsProfile>

                <Button onClick={() => goTo(history, "profile/edit", "")}>
                <Img src={require('../../Icons/PNG/editsymbol.png')}/></Button>

            </UserBox>
            <Address />
            <MiniGrid>
            <LabelOrder>Histórico de Pedidos</LabelOrder>
            </MiniGrid>
            <OrderHistory />
        </Container>
    )
}
export default Profile