import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const ContainerLoadingScreen = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoadSpinner = styled.div `
    width: 100px;
    height: 100px;
    border: 5px solid #B8B8B838;
    border-top: solid #E8222E;
    border-radius: 50%;
    animation: ${spin} 0.75s linear infinite;
`

export const Loader = () => {

        return (
            <ContainerLoadingScreen>
                <LoadSpinner/>
            </ContainerLoadingScreen>
        )

}
export default Loader 