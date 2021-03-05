import React, { useContext} from "react";
import {NavBar, Back, Box, Title} from './styled'
import back from '../../Icons/SVG/back.svg'
import { goToBack } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom';
import IfutureContext from '../../Context/IfutureContext';

export const Header = () => {

    const history=useHistory()

    const { states, requests } = useContext(IfutureContext)

    if(states.page === "login"){
        return (
        <NavBar style={{borderBottom:'none'}}/>
        )
    } else if(states.page === "signup") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
            <Box>
                <Title>SignUp</Title>
            </Box>
        </NavBar>
        )
    } else if(states.page === "address") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
        </NavBar>
        )
    } else if(states.page === "feed") {
        return (
        <NavBar>        

            {states.searchPage ?
            <>
                <Back 
                    src={back} 
                    onClick={requests.feedPage}
                />

                <Box>
                    <Title>Buscar</Title>
                </Box>
                </>
            :
            <>
            <Back
                style={{display:'none'}} 
                src={back} 
                onClick={() => goToBack(history)}
            />
                <Box style={{margin:'20%'}}>
                    <Title>4Food</Title>
                </Box>
            </>
            }
        </NavBar>
        )

    } else if(states.page === 'profile/edit/address') {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
            <Box>
                <Title>Endereço</Title>
            </Box>   
        </NavBar>
        )
    } else if(states.page === "profile/edit") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
            <Box>
                <Title>Entrar</Title>
            </Box>   
        </NavBar>
        )
    }  else if(states.page === "profile") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
        </NavBar>
        )
    } else if (states.page === "restaurant-detail") {
        return(
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
            <Box>
                <Title>Restaurante</Title>
            </Box>
        </NavBar>
        )  
    } else if(states.page === "cart") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
            <Box>
                <Title>Meu carrinho</Title>
            </Box> 
        </NavBar>
        ) 
        }else {
        return (
            <>
            </>
        )
    }
}

export default Header;