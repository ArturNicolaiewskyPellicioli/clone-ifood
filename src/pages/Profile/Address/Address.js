import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import IfutureContext from '../../../Context/IfutureContext'
import { goTo } from "../../../routes/Coordinator"



const Address = () => {
    const { states, requests } = useContext(IfutureContext)
    const history = useHistory()
    

    useEffect(() => {
        requests.getFullAddress()
        
    }, [])

    
    

    if (states.address) {
        return (
            <div>               
                {<div>{`${states.address.street}, number: ${states.address.number} - ${states.address.city}, ${states.address.state}`}</div>}
                <button onClick={() => goTo(history,"profile/edit/address","")}>Edit Address</button>
            </div>
        )
    }
    else{
        return(
            <div>
                No Address
            </div>
        )
    }
}
export default Address