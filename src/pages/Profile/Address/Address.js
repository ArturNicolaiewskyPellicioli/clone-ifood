import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import { goTo } from "../../../routes/Coordinator"
import { Button, Img, BoxAddress, Label, Info, MiniBlock } from './Address_styled'


const Address = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const history = useHistory()


    useEffect(() => {
        requests.getFullAddress()

    }, [])




    if (states.address) {
        return (
            
            <BoxAddress>
                <Label>Endereço Cadastrado</Label>
                <MiniBlock>
                    <Info>{`${states.address.street}, number: ${states.address.number} - ${states.address.city}, ${states.address.state}`}</Info>
                    <Button onClick={() => goTo(history, "profile/edit/address", "")}> <Img src={require('../../../Images/editsymbol.png')} /></Button>
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