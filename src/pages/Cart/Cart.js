import React, { useContext, useEffect, useState } from "react";
import IfutureContext from "../../Context/IfutureContext";
import { ButtonRemoveToCart, Container } from "../RestaurantDetail/styled";
import {CardProduct, CardRestaurant, ContainerInfoProduct, ImgProduct, RedText} from "../RestaurantDetail/styled"
import {Button} from "../Login/styled"
import {Address,
  CartContainer,
  CartWrapper,
  EmptyCart,
  PaymentContainer,
  PaymentLabel,
  PaymentTitle,
  Price,
  Shipping,
  Subtotal,
  GrayText,
  ButtonQuantity
} from "./styled";
import { BoxAddress, AddressTitle} from "../Profile/Address/Address_styled";

export const Cart = () => {
  const { states, setters, requests } = useContext(IfutureContext);
  const { getFullAddress, getRestaurantDetail, createOrder } = requests;
  const { address, cart, id, resDetail } = states;
  const [carrinho, setCarrinho] = useState("");
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    getFullAddress();
    setters.setPage('cart')
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    setCarrinho(JSON.parse(localStorage.getItem("carrinho")))
}, [states.cart])

  const getAddress = (address) => {
    return (
      <BoxAddress>
        <AddressTitle>Endereço de Entrega</AddressTitle>
        <Address>
          Rua {address.street}, {address.number}
        </Address>
      </BoxAddress>
    );
  };

  const restaurantInfo = () => {
    return (
      <CardRestaurant>
        <RedText>{resDetail.name}</RedText>
        <GrayText>{resDetail.address}</GrayText>
        <GrayText>{resDetail.deliveryTime} min</GrayText>
      </CardRestaurant>
    );
  };

  const removeCart = (product) => {
    const newcart = carrinho.filter((c) => { return c.id !== product.id })
    setters.setCart(newcart)

    localStorage.setItem("carrinho", JSON.stringify(newcart))
  }

  const getCart = (cart) => {
    const showOrder = cart.map((product) => {
      return (
        <CardProduct  duct key={product.id}>
            <ImgProduct src={product.image} />
          <ContainerInfoProduct>
            <RedText>{product.product}</RedText>
            <GrayText>{product.description}</GrayText>
            <GrayText>R$ {(product.price ?? 0).toFixed(2)}</GrayText>
          </ContainerInfoProduct>
          <ButtonRemoveToCart onClick={()=>removeCart(product)}>Remover</ButtonRemoveToCart>
          {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
          <ButtonQuantity>{product.quantity}</ButtonQuantity>
        </CardProduct>
      );
    });

    return (
      <>
        {restaurantInfo()}
        {showOrder}
        {orderPrice(resDetail.shipping, carrinho)}
      </>
    );
  };

  const orderPrice = () => {
    console.log(resDetail.shipping)
    const ship = resDetail.shipping;
    const showPrice =
      carrinho &&
      carrinho
        .map((price) => {
          return price.price * Number(price.quantity);
        })
        .reduce((total, value) => total + value);

    const totalOrder = ship + Number(showPrice);
    return (
      <CartWrapper>
        <Shipping>Frete: R$ {ship}</Shipping>
        <Subtotal>SUBTOTAL:</Subtotal>  <Price>R$ {totalOrder.toFixed(2)}</Price>
      </CartWrapper>
    );
  };

  const noCart = () => {
    return (
      <CartWrapper>
        <EmptyCart>Carrinho Vazio </EmptyCart>
        <Shipping>Frete : R$ 00,00</Shipping>
        <Subtotal>SUBTOTAL:</Subtotal> <Price> R$ 00,00</Price>
      
      </CartWrapper>
    );
  };

  const paymentMethod = () => {
    return (
      <PaymentContainer>
        <PaymentTitle>Formas de Pagamento</PaymentTitle>
        <PaymentLabel>
          <input
            type="radio"
            value="money"
            name="payment"
            onChange={({ target }) => setPayment(target.value)}
          />
          Dinheiro
        </PaymentLabel>
        <PaymentLabel>
          <input
            type="radio"
            value="creditcard"
            name="payment"
            onChange={({ target }) => setPayment(target.value)}
          />
          Cartão de Crédito
        </PaymentLabel>
      </PaymentContainer>
    );
  };

  

  return (
    <Container>
    <CartContainer>
      {address && getAddress(address)}
      {/* {resDetail && restaurantInfo(resDetail)} */}

      {carrinho.length === 0 ? noCart() : getCart(carrinho)}
      {/* {cart && orderPrice( cart)} */}

      {paymentMethod()}
      <Button  onClick={() => createOrder(payment)}>Confirmar</Button>
    </CartContainer>
    </Container>

  );
};
