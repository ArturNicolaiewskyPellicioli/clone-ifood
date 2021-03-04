import styled from 'styled-components'

export const ContainerPage = styled.div`
max-width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
`

export const MenuBar = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin: 2%;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Input = styled.input`
    align-content: center;
    align-self: center;
    text-indent: 10%;
    width: 93vw;
    height: 3.125rem;
    color: #d0d0d0;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.39px;
    border: 1px solid #b8b8b8;
    border-radius: 2px;
    outline: none;
    min-width: 250px;
    margin: 10px;
    padding: 15px 20px;
    
    font-size: 14px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;

    background-image: url("/search.svg");
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 15px;

    :focus{
    border: 2px solid rgba(232, 34, 46, 0.5);
        ::placeholder{
        color:transparent;
        }
    }
`

export const BoxCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 350px;
    height: 200px; 
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    overflow: hidden;
    margin: 10px;
`
export const TextBox = styled.div `
    display:flex;
    justify-content: space-between;
    margin: 10px;
`

export const CardImage = styled.img`
    border-top-left-radius:11px;
    border-top-right-radius:13px;
    width: 100%;
    height: 70%;
    object-fit: cover;
`



