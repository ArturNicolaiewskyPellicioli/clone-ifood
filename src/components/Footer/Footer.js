import React, { useContext} from "react";
import {} from './styled'
import homepage from '../../Icons/SVG/homepage.svg'
import cart from '../../Icons/SVG/shopping-cart.svg'
import avatar from '../../Icons/SVG/avatar.svg'
import { goToBack } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom';
import IfutureContext from '../../Context/IfutureContext';

export const Footer = () => {

    const history=useHistory()

    const { states, setters, requests } = useContext(IfutureContext)

    if(states.page === "login"){
        
        return (
        <>

        </>
        )
    } else if(states.page === "signup") {
        return (
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
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
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
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
    } else if (states.page === "details") {
        return(
        <NavBar>
            <Back 
                src={back} 
                onClick={() => goToBack(history)}
            />
        </NavBar>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Footer;