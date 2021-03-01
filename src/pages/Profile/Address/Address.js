import React, { useEffect, useContext } from "react"
import IfutureContext from '../../../Context/IfutureContext'



const Address = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    

    useEffect(() => {
        requests.getFullAddress()
        
    }, [])

    
    

    if (states.address) {
        return (
            <div>               
                {<div>{`${states.address.street}, number: ${states.address.number} - ${states.address.city}, ${states.address.state}`}</div>}
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