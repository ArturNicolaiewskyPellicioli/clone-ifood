import styled from 'styled-components'

export const NavBar = styled.div `
  display: flex;
  align-items: center;
  max-width: 100vw;
  height: 3rem;
  margin: 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`
export const Box = styled.div `
    display:flex;
    flex: 1;
    justify-content: center;
    margin-right: 20%;
`

export const Back = styled.img `
  display: flex;
  width: 1.44rem;
  height: 1.5rem;
  margin: 0.625rem 3.373rem 0.625rem 1rem;
  object-fit: contain;
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