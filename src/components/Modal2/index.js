import React, { useContext, useState } from 'react';
import { render } from 'react-dom';
import useModal from 'react-hooks-use-modal';
import IfutureContext from '../../Context/IfutureContext';
import { ButtonAddCart, ButtonRemoveToCart } from '../../pages/RestaurantDetail/styled';

const modalStyle = {
  backgroundColor: '#fff',
  padding: '60px 100px',
  borderRadius: '10px'
};

const ModalBox = (props) => {
  const { className, modalRef } = props;
  const { states, setters, requests } = useContext(IfutureContext)
  const [quantity, setQuantity] = useState(1);
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true
  });

  const onChangeQuantity = (event) => {

    setQuantity(event.target.value)
  }

  const switchOpen = () => {
    open()
  }
  const switchClose = () => {
    close()
  }

  const removeCart = () => {
    const newcart = states.cart.filter((c) => { return c.id !== props.product.id })
    setters.setCart(newcart)

    localStorage.setItem("carrinho", JSON.stringify(newcart))
  }

  return (
    <div>


      {props.carrinho&&props.carrinho.length>0 ? props.carrinho.map(c =>
        c.id === props.product.id ?
          <ButtonRemoveToCart onClick={removeCart}>deletar</ButtonRemoveToCart>

          :
          <>
            {/* {console.log(c)}
        {console.log(props.product)} */}
            <ButtonAddCart onClick={() => {
              props.toggleDropdown(props.product)
              switchOpen()
            }} value={props.product}>adicionar</ButtonAddCart>
          </>
      )
        :
        <ButtonAddCart onClick={() => {
          props.toggleDropdown(props.product)
          switchOpen()
        }} value={props.product}>adicionar</ButtonAddCart>
      }

      <Modal>
        <div style={modalStyle}>
          <p>Selecione a quantidade desejada</p>

          <select name="quantity" onChange={onChangeQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button onClick={() => {
            requests.addProduto(props.product, quantity, props.id)
            switchClose()
          }} >Adicionar ao Carrinho</button>
        </div>
      </Modal>
    </div>
  );
};
export default ModalBox
