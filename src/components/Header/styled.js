import styled from 'styled-components'

export const NavBar = styled.div `
  width: 22.5rem;
  height: 4rem;
  margin: 0 0 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`
export const Box = styled.div `
    display:flex;
    width: 10.938rem;
    height: 2.75rem;
    margin: 1.25rem 5.75rem 0 5.813rem;
    padding: 0.813rem 4.063rem 0.75rem;
`

export const Back = styled.img `
  width: 1.44rem;
  height: 1.5rem;
  margin: 0.625rem 3.373rem 0.625rem 1rem;
  object-fit: contain;
}
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