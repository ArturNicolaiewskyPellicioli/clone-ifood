import React, { useEffect, useContext  } from "react"
import IfutureContext from '../../../Context/IfutureContext'

//ATENCAO
//ARRUMAR DEPOIS DE FAZER OS PEDIDOS DE COMIDO DO COISO COISADO!
//ATENCAO


const OrderHistory = () => {
    const { states,  requests } = useContext(IfutureContext)

    useEffect(() => {
        requests.getOrdersHistory()

    }, [])

    if(!states.orderHistory){
        
        states.orderhistory.map((order) => {
            return(
                <div>
                    {order.name}
                </div>
            )
        })
        
    }
    return(
        <div>
            No Order History        
        </div>
    )
}
export default OrderHistory