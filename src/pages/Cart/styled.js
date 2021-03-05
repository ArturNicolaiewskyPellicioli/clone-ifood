import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
`;

export const AddressContainer = styled.div`
  background-color: #e8e8e8;
  width: 100%;
  height: 4.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.75rem;
`;

export const Address = styled.p`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem;
`;

export const EmptyCart = styled.p`
  text-align: center;
  padding: 0.75rem;
`;
export const CartWrapper = styled.div`
  width: 100%;
  margin: 1rem;
`;

export const Shipping = styled.p`
  text-align: right;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const Subtotal = styled.p`
  text-align: left;
  display: inline-block;
  margin: 1rem;
`;

export const Price = styled.span`
  display: inline-block;
  color: red;
  margin: 0 1rem 0 9rem;
`;

export const PaymentContainer = styled.div`
  margin: 1.5rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

export const PaymentTitle = styled.p`
  font-size: 1rem;
  padding: 0.75rem;
  /* padding-bottom: 0.5rem; */
  border-bottom: 1px solid black;
  margin: 0 1rem;
`;

export const PaymentLabel = styled.label`
  padding: 0.75rem;
  margin-top: 0.5rem;
`;

export const ButtonConfirm = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  background-color: #e8222e;
  margin-top: 10px;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);

  &:disabled{
    background-color: #e8222e38
  }
`;

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
    overflow:hidden;
`

export const ImgProduct = styled.img`
    width: 100px;
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    object-fit: cover;
`

export const ContainerInfoProduct = styled.div`
    margin:10px;
    width:60%;
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