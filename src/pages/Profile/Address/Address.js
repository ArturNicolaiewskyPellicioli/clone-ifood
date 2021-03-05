import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import useProtectedPage from "../../../hooks/useProtectedPage"
import { goTo } from "../../../routes/Coordinator"
import { GrayText } from "../../RestaurantDetail/styled"
import { Button, Img, BoxAddress, AddressTitle, Info, MiniBlock } from './Address_styled'

const Address = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const history = useHistory()
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){

            requests.getFullAddress(token)
        }
    }, [])

    if (states.address) {
        return (
            <BoxAddress>
                <AddressTitle>Endereço Cadastrado</AddressTitle>
                <MiniBlock>
                    <Info>{`${states.address.street}, number: ${states.address.number} - ${states.address.city}, ${states.address.state}`}</Info>
                    <Button onClick={() => goTo(history, "profile/edit/address", "")}> <Img src={require('../../../Icons/PNG/editsymbol.png')} /></Button>
                </MiniBlock>
            </BoxAddress>
        )
    }
    else {
        return (
            <div>
                No Address
            </div>
        )
    }
}
export default Address