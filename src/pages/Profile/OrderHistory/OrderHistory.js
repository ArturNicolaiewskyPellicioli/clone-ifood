import React, { useEffect, useContext } from "react"
import IfutureContext from '../../../Context/IfutureContext'
import { BoxCard, SubTotal, OrderDate, RestaurantName } from './OrderHistory_Styled'

//ATENCAO
//ARRUMAR DEPOIS DE FAZER OS PEDIDOS DE COMIDO DO COISO COISADO!
//ATENCAO


const OrderHistory = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {

        requests.getOrdersHistory()

    }, [])

    if (states.orderHistory) {



        return (
            states.orderHistory && states.orderHistory.map((order) => {
                // const unixTimestamp =  
                // let dateObj = new Date(unixTimestamp * 1000);
                // let utcString = dateObj.toUTCString();
                // console.log()
                //order.createdAt
                let time = requests.timeInHumanDate(order.createdAt)
                return (
                    <div>
                        <BoxCard>
                            <RestaurantName>{order.restaurantName}</RestaurantName>
                            <OrderDate>{time}</OrderDate>
                            <SubTotal>{`Subtotal R$${order.totalPrice}`}</SubTotal>
                        </BoxCard>
                    </div>
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