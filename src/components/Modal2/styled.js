import styled from 'styled-components'

export const Select = styled.select `
    flex:1;
    width: 60vw;
    height: 3.5rem;
    margin: auto;
    padding: 1rem;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    background-image: url('/dropdown.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 95%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
`

export const AddButton = styled.button `
    font-family: Roboto;
    align-self: right;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #4f81a8;
    margin-top: 10%;
    
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`
export const ModalTitle = styled.p `
    width: 18.5rem;
    height: 1.125rem;
    margin-bottom: 35px;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`