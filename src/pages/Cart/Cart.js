import React, { useContext, useEffect } from "react";
import IfutureContext from "../../Context/IfutureContext";
import styled from "styled-components";
export const Cart = () => {
  const { states, setters, requests } = useContext(IfutureContext);
  const { getFullAddress, getRestaurantDetail } = requests;
  const { address, cart, id, resDetail } = states;
  // const {shipping} = resDetail
  //Nome
  // Endereço
  //Delivery time

  useEffect(() => {
    getFullAddress();
    getRestaurantDetail(id);
    getCart(cart);
    // getPrice(resDetail,cart)
    // setters.setPage('cart')
  }, []);

  const CardProduct = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    border-radius: 15px;
    border: 1px solid;
    position: relative;
  `;
  const ContainerImg = styled.div`
    width: 20%;
    min-width: 130px;
  `;

  const ImgProduct = styled.img`
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100%;
  `;
  const ContainerInfoProduct = styled.div`
    padding: 10px;
    width: 80%;
  `;
  const PRed = styled.p`
    margin-top: 10px;
    color: red;
  `;
  const ButtonAddCart = styled.button`
    height: 40px;
    padding: 10px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 1px solid black;
    background-color: #fff;
    list-style: none;
    text-decoration: none;
  `;
  const ButtonQuantity = styled.button`
    height: 40px;
    padding: 10px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    right: 0;
    bottom: 0;
    color: red;
    border: 1px solid red;
    background-color: #fff;
  `;
  const getAddress = (address) => {
    return (
      <div>
        <p>Endereço de Entrega</p>
        <p>
          {address.street}, {address.number}
        </p>
      </div>
    );
  };

  const restaurantInfo = (resDetail) => {
    return (
      <div>
        <p>{resDetail.name}</p>
        <p>{resDetail.address}</p>
        <p>{resDetail.deliveryTime} min</p>
      </div>
    );
  };

  const getCart = (cart) => {
    const showOrder = cart.map((product) => {
      return (
        <CardProduct key={product.id}>
          <ContainerImg>
            <ImgProduct src={product.image} />
          </ContainerImg>
          <ContainerInfoProduct>
            <h4>
              <PRed>{product.product}</PRed>
            </h4>
            <p>{product.description}</p>
            <p>R$ {(product.price ?? 0).toFixed(2)}</p>
          </ContainerInfoProduct>
          <ButtonAddCart>Remover</ButtonAddCart>
          {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
          <ButtonQuantity>{product.quantity}</ButtonQuantity>
        </CardProduct>
      );
    });

    return (
      <>
        {restaurantInfo}
        {showOrder}
        {orderPrice(resDetail.shipping, cart)}
      </>
    );
  };

  const orderPrice = (shipping, cart) => {
    const ship = shipping;
    console.log(ship);
    const showPrice = cart
      .map((price) => {
        return price.price * Number(price.quantity);
      })
      .reduce((total, value) => total + value)


    console.log(showPrice);

    const totalOrder = ship + Number(showPrice)
    return (
      <>
        <p>Frete: R$ {ship}</p>
        <p>SUBTOTAL: R$ {totalOrder.toFixed(2)}</p>
      </>
    );
  };

  const noCart = () => {
    return (
      <div>
        <p>Carrinho Vazio</p>
        <p>Frete</p>
        <p>SUBTOTAL:</p>
        <span>R$00.00</span>
      </div>
    );
  };

  return (
    <div>
      <p>Meu Carinho</p>
      {address && getAddress(address)}
      {resDetail && restaurantInfo(resDetail)}
      {cart.length === 0 ? noCart() : getCart(cart)}
      {/* {cart && orderPrice( cart)} */}
      <button disabled>Confirmar</button>
      <p></p>
    </div>
  );
};
