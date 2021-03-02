import React, {useEffect, useContext} from "react"
import AddAddress from "./AddAddress"
import IfutureContext from "../Context/IfutureContext"

const Home =()=>{

    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {
        setters.setPage("home")
    }, [])


    return(
        <div>
            <AddAddress/>
        </div>
    )
}
export default Home