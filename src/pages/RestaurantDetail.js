import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import Modal from "../components/Modal/Modal"
import IfutureContext from "../Context/IfutureContext"
import { goTo } from "../routes/Coordinator"

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width:100vw;
    padding:10px;
    box-sizing:border-box;
`
// CardRestaurant
const CardRestaurant = styled.div`
    color:#d1d1d1;
`
const ImgRestaurant = styled.img`
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    max-width: 75vw;
    height: auto;
    object-fit: contain;
    margin-top: 10px;
`
const PRed = styled.p`
    margin-top:10px;
    color:red;
`
const PRes = styled.p`
    margin-top:5px;
`
const HTitle = styled.div`
    width: 100%;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    border-bottom: 1px solid #000000;
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
    height: 7rem;
    margin: 0.438rem 0 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
const ContainerImg = styled.div`
    display: flex;
    height: 100%;
    width: 35%;
`
const ContainerInfoProduct = styled.div`
    padding:10px;
    width:80%;
`
const ImgProduct = styled.img`
    flex:1;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    height:100%;
    width: 100%;
    object-fit: cover;
`
const ButtonAddCart = styled.button`
    display: flex;
    justify-content: center;
    height:40px;
    padding:10px;
    position: absolute;
    right:0;
    bottom:0;
    border:1px solid black;
    background-color:#fff;
    list-style:none;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: var(--black);
    width: 5.626rem;
    height: 1.938rem;
    margin: 0.428rem 0 0 0.5rem;
    padding: 0.5rem 1.281rem 0.563rem 1.344rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 7px;
`
const ButtonQuantity = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius:7px;
    border-bottom-left-radius:8px;
    padding: 0;
    right:0;
    color:red;
    border:1px solid red;
    background-color:#fff;
    width: 40px;
    height: 40px;
    border: solid 1px #e8222e;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e8222e;
`
const TextItem = styled.p `
    width: 12.5rem;
    height: 1.875rem;
    margin: 0.5rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`

const RestaurantDetail = () => {
    const { states, setters, requests } = useContext(IfutureContext)
    const pathParams = useParams()
    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);
    const [selectedProduct,setSelectedProduct]=useState("")

    const history = useHistory()

    useEffect(() => {
        requests.getRestaurantDetail(pathParams.id)
        setters.setPage('restaurant-detail')
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
        // event.stopPropagation(); //impede de executar listeners dos filhos
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
                    <p>R${(product.price ?? 0).toFixed(2)}</p>

                </ContainerInfoProduct>
                <ButtonAddCart onClick={()=>toggleDropdown(product)} value={product}>adicionar</ButtonAddCart>
                {/* <ButtonAddCart onClick={() => addProduto(product, pathParams.id)}>adicionar</ButtonAddCart> */}
                <ButtonQuantity>4</ButtonQuantity>
                <Modal className={dropdown} modalRef={modalRef} product={states.resDetail.products[selectedProduct]}/>
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