import styled from 'styled-components'

export const Container = styled.div `
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items:center;
    max-width: 100vw;
    height: 100%;
    gap: 5px;    
`

export const BoxTitle = styled.div `
    display:flex;
    justify-content: center;
`

export const Title = styled.div ` 
    width: 2.813rem;
    height: 1.188rem;
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
export const Button = styled.button `
    display: flex;
    justify-content: center;
    text-align: center;
    align-items:center;
    width: 20.5rem;
    height: 2.625rem;
    padding: 0.75rem 1rem;
    border-radius: 2px;
    background-color: #e8222e;
    margin-top:10px;
    font-family: Roboto;
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
`

export const Subscribe = styled.button `
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    margin-top: 5%;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`

