import React, { useEffect, useContext } from "react"
import IfutureContext from '../../../Context/IfutureContext'
import { BoxCard, SubTotal, OrderDate, RestaurantName } from './OrderHistory_Styled'



const OrderHistory = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {

        const token = localStorage.getItem('token')

        if(token){
            requests.getOrdersHistory(token)
            
        }


    }, [])

    if (states.orderHistory) {



        return (
            states.orderHistory && states.orderHistory.map((order) => {
         
                let time = requests.timeInHumanDate(order.createdAt)
                return (
                  
                        <BoxCard>
                            <RestaurantName>{order.restaurantName}</RestaurantName>
                            <OrderDate>{time}</OrderDate>
                            <SubTotal>{`Subtotal R$${order.totalPrice}`}</SubTotal>
                        </BoxCard>
                   
                )

            })
        )


    }
    return (
        <div>
            No Order History
        </div>
    )
}
export default OrderHistory