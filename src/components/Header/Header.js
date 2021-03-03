import React, { useContext} from "react";
import {NavBar, Back, Box, Title} from './styled'
import back from '../../Icons/SVG/back.svg'
import { goToBack } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom';
import IfutureContext from '../../Context/IfutureContext';

export const Header = () => {

    const history=useHistory()

    const { states, setters, requests } = useContext(IfutureContext)

    if(states.page === "login"){
        
        return (
        <NavBar style={{boxShadow:'none'}}>

        </NavBar>
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
                <Box>
                    <Title>4food</Title>
                </Box>
            </>
            }
           
        </NavBar>
        )
    } else if(states.page === "home") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
        </NavBar>
        )
    } else if(states.page === "profile") {
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
    } else {
        return (
            <>
            </>
        )
    }
}

export default Header;