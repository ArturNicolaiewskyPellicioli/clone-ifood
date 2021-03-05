import React, { useContext} from "react"
import styled from 'styled-components'
import whiteLogo from '../Icons/SVG/homepage.svg'
import redLogo from '../Icons/SVG/logo-future-eats-invert.svg'
import IfutureContext from '../Context/IfutureContext';


const Container = styled.div `
    display: flex;
`
const FourFood = styled.img `
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
`

export const Logo = () => {

    const { states } = useContext(IfutureContext)

    if (states.page === ""){
        
        return (
        <Container>
            <FourFood
                src={whiteLogo} 
            />
        </Container>
        )
    } else {
        return (
        <Container>
            <FourFood
                src={redLogo} 
            />
        </Container>
        )
    }
}
export default Logo 