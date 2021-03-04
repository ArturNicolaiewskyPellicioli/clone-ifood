import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

export const AddressTitle = styled.p`
  font-size: 1rem;
  color: #b8b8b8;
  font-weight: bold;
  padding: 0.75rem;
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
`;
