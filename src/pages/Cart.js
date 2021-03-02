import React, { useContext, useEffect } from "react";
import IfutureContext from "../Context/IfutureContext";
import styles from './Cart.module.css'
export const Cart = () => {
  const { states, setters, requests } = useContext(IfutureContext);
  const { getFullAddress, getActiveOrder, getRestaurantDetail } = requests;
  const { address, activeOrder, cart, resDetail } = states;
 

  useEffect(() => {
    getFullAddress();
    getCart(cart);
  }, []);

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
  console.log(resDetail)

  const getCart = (cart) => {
      console.log(cart)
    return cart.map((product) =>{
        return(
            <div className={styles.teste} key={product.product.product}>
                <img className={styles.image} src={product.product.image} alt={product.product.product}/>
                <div className={styles.wrapper}>
                <p className={styles.name}>{product.product.product}</p>
                <p className={styles.description}> {product.product.description}</p>
                <p className={styles.price}>R$: {product.product.price}</p>

                </div>
            </div>
        )
    })
    

  };

  //Nome do resturante
  //Endereço do Restaurante
  //Delivery

  //produto
  //foto
  //Nome
  //Descrição
  //Preço

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

  //Endereço de Entrega
  //Rua, número

  return (
    <div>
      <h1>Meu Carinho</h1>
      {address && getAddress(address)}
      {cart.length === 0 ? noCart() : getCart(cart)}
      <button disabled>Confirmar</button>
      <p></p>
    </div>
  );
};
