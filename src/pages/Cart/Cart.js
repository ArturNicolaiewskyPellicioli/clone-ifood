import React, { useContext, useEffect } from "react";
import IfutureContext from "../../Context/IfutureContext";
import styles from './Cart.module.css'
export const Cart = () => {
  const { states, setters, requests } = useContext(IfutureContext);
  const { getFullAddress, getActiveOrder, getRestaurantDetail } = requests;
  const { address, activeOrder, cart, resDetail } = states;
  //Nome
  // Endereço
  //Delivery time

  useEffect(() => {
    getFullAddress();
    getCart(cart);
    getRestaurantDetail(resDetail);
    getPrice(resDetail,cart)
    setters.setPage('cart')
  }, [cart, resDetail]);

  // console.log(address)

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
    return cart.map((product) => {
      return (
        <div className={styles.teste} key={product.id}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.product}
          />
          <div className={styles.wrapper}>
            <p className={styles.name}>{product.product}</p>
            <p className={styles.description}> {product.description}</p>
            <p className={styles.price}>R$: {product.price}</p>
          </div>
        </div>
      );
    });
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

  const getPrice = (resDetail, cart) =>{
    console.log(cart)
    const shipping = resDetail.shipping
    // const productsPrice = cart.reduce((acc, price) => acc )

    const subtotal = shipping 
    return(
      <div>
        <p> Frete: {shipping}</p>
        <p>SubTotal: {subtotal}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Meu Carinho</h1>
      {address && getAddress(address)}
      {resDetail && restaurantInfo(resDetail)}
      {cart.length === 0 ? noCart() : getCart(cart)}
      {cart && resDetail && getPrice(resDetail, cart)}
      <button disabled>Confirmar</button>
      <p></p>
    </div>
  );
};
