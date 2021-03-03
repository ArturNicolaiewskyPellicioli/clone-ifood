import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import Modal from "../components/Modal/Modal"
import IfutureContext from "../Context/IfutureContext"
import { goTo } from "../routes/Coordinator"


const Container = styled.div`
    display: flex;
    flex-direction:column;
    width:100vw;
    padding:10px;
    box-sizing:border-box;
`
// CardRestaurant
const CardRestaurant = styled.div`
color:#d1d1d1;
`
const ImgRestaurant = styled.img`
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:100%;
`
const PRed = styled.p`
    margin-top:10px;
    color:red;
`
const PRes = styled.p`
    margin-top:5px;
`
const HTitle = styled.h4`
    padding-bottom:2px;
    margin-top:5px;
    border-bottom:1px solid;

`
const SpanPadding = styled.p`
    margin-top:5px;
    padding-right:20px;
    display:inline-block;
`
// cardProduct
const CardProduct = styled.div`
    margin-top:10px;
    width:100%;
    display:flex;
    border-radius:15px;
    border:1px solid;
    position:relative;

`
const ContainerImg = styled.div`
    width:20%;
    min-width:130px;
    
`
const ContainerInfoProduct = styled.div`
    padding:10px;
    width:80%;
`
const ImgProduct = styled.img`
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    width:100%;
`
const ButtonAddCart = styled.button`
    height:40px;
    padding:10px;
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    position: absolute;
    right:0;
    bottom:0;
    border:1px solid black;
    background-color:#fff;
    list-style:none;
    text-decoration:none;
`
const ButtonQuantity = styled.button`
    height:40px;
    padding:10px;
    border-top-right-radius:15px;
    border-bottom-left-radius:15px;
    right:0;
    bottom:0;
    color:red;
    border:1px solid red;
    background-color:#fff;
`

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const pathParams = useParams()
    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);

    const history = useHistory()

    useEffect(() => {
        requests.getRestaurantDetail(pathParams.id)
        setters.setPage('restaurant-detail')
    }, [])

    const addProduto = (product, id) => {
        const produtos = {
            id: id,
            product: {
                product: product.name,
                price: product.price,
                image: product.photoUrl,
                description: product.description,
            }


        }
        const novaLista = [...states.cart]
        novaLista.push(produtos)
        setters.setCart(novaLista)
    }
    const toggleDropdown = () => {
        console.log("show");
        //se clicar no botão, modal aparece
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        event.stopPropagation(); //impede de executar listeners dos filhos
        const contain = modalRef.current.contains(event.target);
        if (!contain) { //se clicar fora do modal, ele DESaparece
            console.log("hidden");
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };

    const showDetail = states.resDetail.products && states.resDetail.products.map((product) => {
        return (
            <CardProduct key={product.id}>
                <ContainerImg><ImgProduct src={product.photoUrl} /></ContainerImg>
                <ContainerInfoProduct>
                    <h4><PRed>{product.name}</PRed></h4>
                    <p>{product.description}</p>
                    <p>R$ {(product.price ?? 0).toFixed(2)}</p>

                </ContainerInfoProduct>
                <ButtonAddCart onClick={toggleDropdown}>adicionar</ButtonAddCart>
                {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
                <ButtonQuantity >4</ButtonQuantity>
                <Modal className={dropdown} modalRef={modalRef} addProduto={addProduto} pathParams={pathParams.id}/>
                
            </CardProduct>
        )
    })
    const showRestaurant = () => {
        return (
            <CardRestaurant>
                <ImgRestaurant src={states.resDetail.logoUrl} />
                <h4><PRed>{states.resDetail.name}</PRed></h4>
                <PRes>{states.resDetail.category}</PRes>
                <SpanPadding>{states.resDetail.deliveryTime} - {Number(states.resDetail.deliveryTime) + 10}min</SpanPadding>
                <SpanPadding>Frete R$ {(states.resDetail.shipping ?? 0).toFixed(2)}</SpanPadding>
                <PRes>{states.resDetail.address}</PRes>
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
        <Container>
            {showRestaurant()}
            <HTitle><b>Produtos</b></HTitle>
            {showDetail}
            <button onClick={goToCart}>Ver Carrinho</button>
        </Container>
    )
}
export default RestaurantDetail