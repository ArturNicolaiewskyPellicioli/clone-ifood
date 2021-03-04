import React, { useContext, useState } from "react";
import IfutureContext from "../../Context/IfutureContext";
import "./Modal.css";

const Modal = props => {
    const { className, modalRef } = props;
    const { states, setters, requests } = useContext(IfutureContext)
    const [quantity, setQuantity] = useState(1);


    const onChangeQuantity = (event) => {

        setQuantity(event.target.value)
    }

    return (
        <div ref={modalRef} className={`${className} modal`}>
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
            <button onClick={() => requests.addProduto(props.product, quantity, props.id)} >Adicionar ao Carrinho</button>

        </div>
    )
}

export default Modal;