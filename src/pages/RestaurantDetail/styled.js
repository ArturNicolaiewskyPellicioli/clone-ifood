import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width:100vw;
    padding:10px;
    padding-top: 0px;
    margin-top:0;
    box-sizing:border-box;
    margin-left: 10px;
    margin-right: 10px;
`

export const CardRestaurant = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    color:#d1d1d1;
    text-align: left;
`
export const ImgRestaurant = styled.img`
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
    margin-top: 10px;
`
export const RedText = styled.p`
    color:#e8222e;
    margin: 0.75rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    margin: 10px;
`
export const GrayText = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 3px;
`
export const Title = styled.div`
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
export const SpanPadding = styled.p`
    margin-top:5px;
    padding-right:20px;
    display:inline-block;
`
export const CardProduct = styled.div`
    margin-top:10px;
    width:100%;
    display:flex;
    border-radius:15px;
    border:1px solid;
    position:relative;
    height: 150px;
    margin: 10px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    /* overflow:hidden; */
`
export const ContainerInfoProduct = styled.div`
    margin:10px;
    width:60%;
`
export const ImgProduct = styled.img`
    width: 100px;
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    object-fit: cover;
`
export const ButtonAddCart = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    right:0;
    bottom:0;
    border:1px solid black;
    background-color:#fff;
    list-style:none;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: var(--black);
    width: 100px;
    height: 30px;
    border-top-left-radius: 7px;
    border-bottom-right-radius: 7px;
`
export const ButtonRemoveToCart = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    right:0;
    bottom:0;
    border:1px solid red;
    background-color:#fff;
    list-style:none;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: red;
    width: 100px;
    height: 30px;
    border-top-left-radius: 7px;
    border-bottom-right-radius: 7px;
    z-index:1000;
`
export const ButtonQuantity = styled.button`
    display: flex;
    padding: 0;
    width: 50px;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: solid 1px #e8222e;
    border-top-right-radius:7px;
    border-bottom-left-radius:7px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e8222e;
`
export const TextItem = styled.p `
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`