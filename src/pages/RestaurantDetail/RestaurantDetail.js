import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import Modal from "../../components/Modal/Modal"
import IfutureContext from "../../Context/IfutureContext"
import { goTo } from "../../routes/Coordinator"
import { Container, CardRestaurant, ImgRestaurant, RedText, GrayText, Title, SpanPadding, CardProduct, ContainerInfoProduct, ImgProduct, ButtonAddCart, ButtonQuantity, TextItem } from "./styled"
import Loader from '../../components/Loader'
import useModal from "../../components/Modal2/index2"
import ModalBox from "../../components/Modal2"
import OrderModal from "../../components/OrderModal"
import useProtectedPage from "../../hooks/useProtectedPage"

const modalStyle = {
    backgroundColor: '#fff',
    padding: '60px 100px',
    borderRadius: '10px'
};

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const { address, cart, id, resDetail } = states;
    const pathParams = useParams()
    const [dropdown, setDropdown] = useState("");
    const [carrinho, setCarrinho] = useState("");
    
    const modalRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState("")

    const history = useHistory()

    useProtectedPage()

    useEffect(() => {
        setters.setPage('/restaurant-detail')
        window.scrollTo(0, 0)
        const token = localStorage.getItem("token");
        if (token) {
            
            requests.getRestaurantDetail(token, pathParams.id)
            
            requests.getActiveOrder(token);
          }
    }, [])

    useEffect(() => {
        setCarrinho(JSON.parse(localStorage.getItem("carrinho")))
    }, [states.cart])



    const toggleDropdown = (p) => {
        const findProduct = states.resDetail.products.findIndex(product => product === p)
        setSelectedProduct(findProduct)
    }

    const closeDropdown = event => {
        const contain = modalRef.current.contains(event.target);
        if (!contain) { 
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

                {carrinho&&carrinho.map(c =>
                    c.id === product.id?
                <ButtonQuantity>{c.quantity}</ButtonQuantity>
                :false)
               
                }

            
                <ModalBox product={product} toggleDropdown={toggleDropdown} carrinho={carrinho}/>
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
        <>
        {states.isLoading ? <Loader/> : 
        <>
        <OrderModal />
        <Container>
             {showRestaurant()}
             <Title><b>Produtos</b></Title>
             {showDetail}
        </Container>
        </>
        }
        </> 
    )
}
export default RestaurantDetail