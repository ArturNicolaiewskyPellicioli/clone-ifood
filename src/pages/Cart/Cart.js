import React, { useContext, useEffect, useState } from "react";
import IfutureContext from "../../Context/IfutureContext";
import { ButtonRemoveToCart, Container } from "../RestaurantDetail/styled";
import {
  CardProduct,
  CardRestaurant,
  ContainerInfoProduct,
  ImgProduct,
  RedText,
} from "../RestaurantDetail/styled";
import { Button } from "../Login/styled";
import {
  Address,
 
  CartWrapper,
  EmptyCart,
  PaymentContainer,
  PaymentLabel,
  PaymentTitle,
  Price,
  Shipping,
  Subtotal,
  GrayText,
  ButtonQuantity,
} from "./styled";
import { BoxAddress, AddressTitle } from "../Profile/Address/Address_styled";
import { goTo } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

export const Cart = () => {
  useProtectedPage()

  const { states, setters, requests } = useContext(IfutureContext);
  const { getFullAddress, getRestaurantDetail, createOrder } = requests;
  const { profile, address, cart, id, resDetail } = states;
  const [carrinho, setCarrinho] = useState("");
  const [payment, setPayment] = useState(null);
  const [confirmButtonStats, setConfirmButtonStats] = useState("disabled");
  let restaurantDetails = JSON.parse(localStorage.getItem("restaurantDetails"));
  let carrinhoToVerification = JSON.parse(localStorage.getItem("carrinho"));
  let newCart = [];

  const history = useHistory()
  const token = localStorage.getItem('token')
  useEffect(() => {
    setters.setPage("cart");
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token");
    if (token) {
      requests.getActiveOrder(token);
      requests.getFullAddress(token);
    }
  
  }, []);

  useEffect(() => {
    cartRestaurantVerification();
    if(states.activeOrder){
     
      setConfirmButtonStats('disabled')
    }
  }, [restaurantDetails]);

  useEffect(() => {
    setCarrinho(JSON.parse(localStorage.getItem("carrinho")));
  }, [states.cart]);

  const getAddress = (profile) => {
    // console.log(profile)
    return (
      <BoxAddress>
        <AddressTitle>Endereço de Entrega</AddressTitle>
        <Address>
          Rua {profile.street}, {profile.number}
        </Address>
      </BoxAddress>
    );
  };

  const cartRestaurantVerification = () => {
  
  
    restaurantDetails &&
      restaurantDetails.products.map((prod) => {
        
        carrinhoToVerification &&
          carrinhoToVerification.map((item) => {
            if (item.id === prod.id) {
       
              newCart.push(item);
            

              localStorage.setItem("carrinho", JSON.stringify(newCart));
            }
          });
      });

  };



  const restaurantInfo = () => {
    return (
      <CardRestaurant>
        <RedText>{restaurantDetails.name}</RedText>
        <GrayText>{restaurantDetails.address}</GrayText>
        <GrayText>{restaurantDetails.deliveryTime} min</GrayText>
      </CardRestaurant>
    );
  };

  const removeCart = (product) => {
    const newcart = carrinho.filter((c) => {
      return c.id !== product.id;
    });
    setters.setCart(newcart);

    localStorage.setItem("carrinho", JSON.stringify(newcart));
  };

  useEffect(() => {
    payment && setConfirmButtonStats("");
  }, [payment]);

  const getCart = (cart) => {
    const showOrder = cart.map((product) => {
      return (
        <CardProduct duct key={product.id}>
          <ImgProduct src={product.image} />
          <ContainerInfoProduct>
            <RedText>{product.product}</RedText>
            <GrayText>{product.description}</GrayText>
            <GrayText>R$ {(product.price ?? 0).toFixed(2)}</GrayText>
          </ContainerInfoProduct>
          <ButtonRemoveToCart onClick={() => removeCart(product)}>
            Remover
          </ButtonRemoveToCart>
          {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
          <ButtonQuantity>{product.quantity}</ButtonQuantity>
        </CardProduct>
      );
    });

    return (
      <>
        {restaurantInfo()}
        {showOrder}
        {orderPrice(restaurantDetails.shipping, carrinho)}
      </>
    );
  };

  const orderPrice = () => {

    const ship = restaurantDetails.shipping;
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
        <Subtotal>SUBTOTAL:</Subtotal> <Price>R$ {totalOrder.toFixed(2)}</Price>
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
    <>
      <Container>
        <>
          {address && getAddress(address)}
          {/* {restaurantDetails && restaurantInfo(resDetail)} */}

          {carrinho.length === 0 ? noCart() : getCart(carrinho)}
          {/* {cart && orderPrice( cart)} */}

          {paymentMethod()}

          <Button
            disabled={confirmButtonStats}
            onClick={() => {createOrder(payment, token)
             && goTo( history,'/feed' ,'')}}
          >
            Confirmar
          </Button>
        </>
      {/* <OrderModal /> */}
      </Container>
    </>
  );
};
