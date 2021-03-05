import React, { useContext } from "react";
import IfutureContext from "../Context/IfutureContext";
import { OrderActive, OrderContainer, OrderRestaurant } from "./OrderModalStyles";
import { ReactComponent as Clock } from "../Icons/SVG/clock.svg";

function OrderModal() {
  const { states, setters, requests } = useContext(IfutureContext);
  const { activeOrder } = states;
  
  if (activeOrder !== null) {
    return (
      <OrderContainer>
        <Clock  />
        <div >
          <OrderActive>Pedido em Andamento</OrderActive>
          <OrderRestaurant>{activeOrder && activeOrder.restaurantName}</OrderRestaurant>
          <strong>SubTotal: R${activeOrder && activeOrder.totalPrice}</strong>
        </div>
      </OrderContainer>
    );
  } else {
    return <></>;
  }
}

export default OrderModal;
