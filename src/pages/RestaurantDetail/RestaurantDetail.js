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

const modalStyle = {
    backgroundColor: '#fff',
    padding: '60px 100px',
    borderRadius: '10px'
};

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const pathParams = useParams()
    const [dropdown, setDropdown] = useState("");
    const [carrinho, setCarrinho] = useState("");
    
    const modalRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState("")
    // const [Modal, open, close, isOpen] = useModal('root', {
    //     preventScroll: true
    // });
    const history = useHistory()

    useEffect(() => {
        requests.getRestaurantDetail(pathParams.id)
        setters.setPage('restaurant-detail')
    }, [])

    useEffect(() => {
        setCarrinho(JSON.parse(localStorage.getItem("carrinho")))
    }, [states.cart])


    const toggleDropdown = (p) => {
        const findProduct = states.resDetail.products.findIndex(product => product === p)
        setSelectedProduct(findProduct)

        // console.log("show");
        // //se clicar no botão, modal aparece
        // setDropdown("show");
        // document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        const contain = modalRef.current.contains(event.target);
        if (!contain) { //se clicar fora do modal, ele Desaparece
            console.log("hidden");
            setDropdown("");
            
            document.body.removeEventListener("click", closeDropdown);
        }
    };
console.log("carrinho",carrinho)
    const showDetail = states.resDetail.products && states.resDetail.products.map((product) => {
        // console.log(carrinho)
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

    const goToCart = () => {
        try {
            goTo(history, "/cart", "")
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {states.isLoading ? <Loader /> :

                <Container>
                    {showRestaurant()}
                    <Title><b>Produtos</b></Title>
                    {showDetail}
                    <button onClick={goToCart}>Ver Carrinho</button>

                </Container>
            }
        </>
    )
}
export default RestaurantDetail