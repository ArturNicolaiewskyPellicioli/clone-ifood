import styled from 'styled-components'

export const NavBarFooter = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  height: 10vh;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  transition: 0.2s;
  position: sticky;
  bottom: 0;
  z-index:2000;
`

export const IconFooter = styled.img `
    width: 1.688rem;
    height: 1.875rem;
    object-fit: contain;

    :hover {
        
    }
`