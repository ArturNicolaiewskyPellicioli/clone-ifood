import React, { useEffect, useContext  } from "react"
import IfutureContext from '../../../Context/IfutureContext'
import {BoxCard, SubTotal, OrderDate, RestaurantName} from './OrderHistory_Styled'

//ATENCAO
//ARRUMAR DEPOIS DE FAZER OS PEDIDOS DE COMIDO DO COISO COISADO!
//ATENCAO


const OrderHistory = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {

        requests.getOrdersHistory()
        
    }, [])

    if(states.orderHistory){

        return(
            <div>
                oi
            </div>
        )
        // let orderHistory = states.orderHistory

        // return(
        //     <BoxCard>
        //         <RestaurantName>Burguer Vila Madalena</RestaurantName>
        //         <OrderDate>23 de Outubro 2019</OrderDate>
        //         <SubTotal>Subtotal R$89,00</SubTotal>
        //     </BoxCard>
        // )
        // orderHistory && orderHistory.map((order) => {
        //     return(
        //         <div>
        //             {order.name}
        //         </div>
        //     )
        // })
        
    }
    return(
        <div>
            No Order History        
        </div>
    )
}
export default OrderHistory