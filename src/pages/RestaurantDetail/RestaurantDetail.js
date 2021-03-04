import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import Modal from "../../components/Modal/Modal"
import IfutureContext from "../../Context/IfutureContext"
import { goTo } from "../../routes/Coordinator"
import {Container, CardRestaurant, ImgRestaurant, RedText, GrayText, Title, SpanPadding, CardProduct, ContainerInfoProduct, ImgProduct, ButtonAddCart, ButtonQuantity, TextItem } from "./styled"

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const { address, cart, id, resDetail } = states;
    const pathParams = useParams()
    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);
    const [selectedProduct,setSelectedProduct]=useState("")


    const history = useHistory()

    useEffect(() => {
        requests.getRestaurantDetail(pathParams.id)
        setters.setPage('/restaurant-detail')
    }, [])



    const toggleDropdown = (p) => {
        const findProduct = states.resDetail.products.findIndex(product=>product===p)
        setSelectedProduct(findProduct)

        console.log("show");
        //se clicar no botão, modal aparece
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        const contain = modalRef.current.contains(event.target);
        if (!contain) { //se clicar fora do modal, ele Desaparece
            console.log("hidden");
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };


    const showDetail = states.resDetail.products && states.resDetail.products.map((product) => {
        
        return (
            <CardProduct key={product.id}>
                <ImgProduct src={product.photoUrl} />
                <ContainerInfoProduct>
                    <RedText>{product.name}</RedText>
                    <GrayText>{product.description}</GrayText>
                    <SpanPadding>R${(product.price ?? 0).toFixed(2)}</SpanPadding>
                </ContainerInfoProduct>
                <ButtonAddCart onClick={()=>toggleDropdown(product)} value={product}>adicionar</ButtonAddCart>
                {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
                <ButtonQuantity >4</ButtonQuantity>
                <Modal className={dropdown} modalRef={modalRef} product={states.resDetail.products[selectedProduct] } id={pathParams.id}/>
            </CardProduct>
        )
    })
    const showRestaurant = () => {
        return (
            <CardRestaurant>
                <ImgRestaurant src={states.resDetail.logoUrl} />
                    <RedText>{states.resDetail.name}</RedText>
                    <GrayText>{states.resDetail.category}</GrayText>
                    <GrayText>{states.resDetail.deliveryTime} - {Number(states.resDetail.deliveryTime) + 10}min</GrayText>
                    <GrayText>Frete R$ {(states.resDetail.shipping ?? 0).toFixed(2)}</GrayText>
                    <GrayText>{states.resDetail.address}</GrayText>
            </CardRestaurant>
        )
    }
    return (
        <Container>
            {showRestaurant()}
            <Title><b>Produtos</b></Title>
            {showDetail}
        </Container>
    )
}
export default RestaurantDetail