import React, { useContext} from "react";
import { NavBarFooter, IconFooter } from './styled'
import homepage from '../../Icons/SVG/homepage.svg'
import redHomepage from '../../Icons/SVG/homepage-red.svg'
import cart from '../../Icons/SVG/shopping-cart.svg'
import redCart from '../../Icons/SVG/shopping-cart-red.svg'
import avatar from '../../Icons/SVG/avatar.svg'
import redAvatar from '../../Icons/SVG/avatar-red.svg'
import { goTo } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom';
import IfutureContext from '../../Context/IfutureContext';

export const Footer = () => {

    const history=useHistory()

    const { states,  } = useContext(IfutureContext)

    if(states.page === "feed") {
        return (
        <NavBarFooter>
            <IconFooter 
                src={redHomepage} 
                onClick={() => goTo(history, "/feed", "")}
            />
            <IconFooter
                src={cart} 
                onClick={() => goTo(history, "/cart", "")}
            />
            <IconFooter
                src={avatar} 
                onClick={() => goTo(history, "/profile", "")}
            />
        </NavBarFooter>
        )
    } else if(states.page === "/profile") {
        return (
            <NavBarFooter>
            <IconFooter 
                src={homepage} 
                onClick={() => goTo(history, "/feed", "")}
            />
            <IconFooter
                src={cart} 
                onClick={() => goTo(history, "/cart", "")}
            />
            <IconFooter
                src={redAvatar} 
                onClick={() => goTo(history, "/profile", "")}
            />
        </NavBarFooter>
        )
    } else if(states.page === "/restaurant-detail") {
        return (
            <NavBarFooter>
            <IconFooter 
                src={redHomepage} 
                onClick={() => goTo(history, "/feed", "")}
            />
            <IconFooter
                src={cart} 
                onClick={() => goTo(history, "/cart", "")}
            />
            <IconFooter
                src={avatar} 
                onClick={() => goTo(history, "/profile", "")}
            />
        </NavBarFooter>
        )
    } else if(states.page === "/cart") {
        return (
        <NavBarFooter>
            <IconFooter 
                src={homepage} 
                onClick={() => goTo(history, "/feed", "")}
            />
            <IconFooter
                src={redCart} 
                onClick={() => goTo(history, "/cart", "")}
            />
            <IconFooter
                src={avatar} 
                onClick={() => goTo(history, "/profile", "")}
            />
        </NavBarFooter>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Footer;