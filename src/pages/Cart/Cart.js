import React, { useContext, useEffect } from "react";
import IfutureContext from "../../Context/IfutureContext";
import {Container, CardRestaurant, ImgRestaurant, RedText, GrayText, Title, SpanPadding, CardProduct, ContainerInfoProduct, ImgProduct, ButtonAddCart, ButtonQuantity, TextItem } from '../RestaurantDetail/styled'


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
    setters.setPage('/cart')
    // getPrice(resDetail,cart)
  }, []);

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
      <CardRestaurant>
        <RedText>{resDetail.name}</RedText>
        <GrayText>{resDetail.address}</GrayText>
        <GrayText>{resDetail.deliveryTime} min</GrayText>
      </CardRestaurant>
    );
  };

  const getCart = (cart) => {
    const showOrder = cart.map((product) => {
      return (
        <CardProduct key={product.id}>
            <ImgProduct src={product.image} />
          <ContainerInfoProduct>
            <RedText>{product.product}</RedText>
            <GrayText>{product.description}</GrayText>
            <GrayText>R$ {(product.price ?? 0).toFixed(2)}</GrayText>
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
    <Container>
      <p>Meu Carinho</p>
      {address && getAddress(address)}
      {resDetail && restaurantInfo(resDetail)}
      {cart.length === 0 ? noCart() : getCart(cart)}
      {/* {cart && orderPrice( cart)} */}
      <button disabled>Confirmar</button>
      <p></p>
    </Container>
  );
};
