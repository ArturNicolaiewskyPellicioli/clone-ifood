import styled from 'styled-components'

export const OrderContainer = styled.div`
    background-color: #e8222e;
    position: sticky;
    /* bottom: 0; */
    width: 100vw;
    /* height: 10vh; */
    top: 71.5%;
    z-index: 2000;
    padding:1.5rem;
    text-align: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`

export const OrderActive = styled.p`
    color: #fff;
    letter-spacing: 0.39px;
    margin: 0.5rem 0;

`
export const OrderRestaurant = styled.p`
    margin: 0.5rem 0 ;
    letter-spacing: 0.39px;

`

export const OrderTotal = styled.p`
    margin: 0.50rem 0 1.5rem 0;
    letter-spacing: 0.39px;
    text-transform: uppercase;
`