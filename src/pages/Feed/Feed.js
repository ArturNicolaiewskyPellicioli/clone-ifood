import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { baseURL, headers } from '../../parameters';
import {goTo} from '../../routes/Coordinator'
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import IfutureContext from "../../Context/IfutureContext";
import styled from 'styled-components';
import styles from '../../App.css'
import '../../button.css'

const MenuBar = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const Input = styled.input`
    padding: 1rem 3.2rem;
    width: 15rem;
    margin: 0 auto 1rem auto;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    background-image: url("/search.svg");
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 15px;
`
const ContainerPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Feed = () => {
    const { states, setters, requests } = useContext(IfutureContext)

    useEffect(() => {
        setters.setPage("feed")
    }, [])

    const [form, onChange, clear] = useForm({ name: "" })
    const [restaurantsList, setRestaurantsList] = useState()
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState()
    const [filteredRestaurantsListInput, setFilteredRestaurantsListInput] = useState()
    const [currentCategory, setCurrentCategory] = useState()
    const [listCategory, setListCategoryState] = useState()

    const history = useHistory()
    
    const getUsers = async () => {
        try {
            const response = await axios.get(`${baseURL}/restaurants`, {headers})
            setRestaurantsList(response.data.restaurants)
            
        } catch (err) {
            console.log(err)
        }
    }

    const onClickNavBar = (event) => {
        setCurrentCategory(event.target.value)
        const divv = event.target.closest('div').children

        for(let button of divv){
            button.classList.remove('active')
            console.log(button)
        }

        event.target.classList.add('active')

        if(currentCategory === event.target.value) {
            setCurrentCategory(null)
            event.target.classList.remove('active')
        }

    }
    
    const filterListInput = () => {
        if(restaurantsList && restaurantsList.length > 0){
            if(listCategory) {
        const list = listCategory.filter(rest => rest.name.toLowerCase().includes(form.name.toLowerCase()))
        setFilteredRestaurantsListInput(list)
            } else {
                const list = restaurantsList.filter(rest => rest.name.toLowerCase().includes(form.name.toLowerCase()))
                setFilteredRestaurantsListInput(list)
            }
    }}

    const filterListButton = () => {
        if(restaurantsList && restaurantsList.length > 0){
            if(currentCategory !== null) {

        const listCategory = restaurantsList.filter(rest => rest.category.toLowerCase().includes(currentCategory.toLowerCase()))
        setListCategoryState(listCategory)
        setFilteredRestaurantsList(listCategory)
            } else {
                setListCategoryState(restaurantsList)
                setFilteredRestaurantsList(restaurantsList)
            }
    }}

    useEffect(() => {
        getUsers()
    },[])

    useEffect(() => {
        clear()
    },[states.searchPage])

    useEffect(() => {
        filterListInput()
    }, [form])
    
    useEffect(() => {
        filterListButton()
    }, [currentCategory])

    const goToDetails = (id) => {
        goTo(history, "/restaurant-detail", `/${id}`)
    }

    const onSearchPage = () => {
        setters.setSearchPage(true)
        setListCategoryState(restaurantsList)
        setFilteredRestaurantsList(restaurantsList)
    }

    return (
       <ContainerPage>
            <Input type="text" name="name" value={form.name}  onFocus={onSearchPage} onChange={onChange} placeholder="Restaurante"/>

            {states.searchPage ?  
                <>  

                    {form.name ?
                        filteredRestaurantsListInput && filteredRestaurantsListInput.length > 0 ? 
                            filteredRestaurantsListInput && filteredRestaurantsListInput.map(restaurant => {
                                return(
                                    <div onClick={() => goToDetails(restaurant.id)}>
                                        <p>{restaurant.name}</p> 
                                        <p>{restaurant.deliveryTime} - {Number(restaurant.deliveryTime) + 10}min</p>
                                        <p>Frete: R${(restaurant.shipping ?? 0).toFixed(2)}</p>  
                                    </div>
                                )
                            })
                        : 
                            <p>Não encontramos :(</p> 
                    :
                        <p>Busque por nome de restaurante</p>
                    }
                </> 
            :
                <>
                    <MenuBar onClick={onClickNavBar}>
                        {restaurantsList && restaurantsList.map(restaurant => {
                            return(
                                <button value={restaurant.category}>{restaurant.category}</button> 
                            
                            )
                        })}
                    </MenuBar>

                    {filteredRestaurantsList ?
                
                        filteredRestaurantsList && filteredRestaurantsList.map(restaurant => {
                            return(
                                <div onClick={() => goToDetails(restaurant.id)}>
                                    <p>{restaurant.name}</p> 
                                    <p>{restaurant.deliveryTime} - {Number(restaurant.deliveryTime) + 10}min</p>
                                    <p>Frete: R${(restaurant.shipping ?? 0).toFixed(2)}</p>  
                                </div>
                            )
                        }) 
                    : 
                        restaurantsList && restaurantsList.map(restaurant => {
                            return(
                                <div onClick={() => goToDetails(restaurant.id)}>
                                    <p>{restaurant.name}</p> 
                                    <p>{restaurant.deliveryTime} - {Number(restaurant.deliveryTime) + 10}min</p>
                                    <p>Frete: R${(restaurant.shipping ?? 0).toFixed(2)}</p>  
                                </div>
                            )
                        })
                    }
                </>
            }
    </ContainerPage>
    )
}
export default Feed