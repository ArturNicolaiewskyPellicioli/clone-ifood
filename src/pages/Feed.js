import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL, headers } from '../parameters';
import Input from '../components/Input'
import {goTo} from '../routes/Coordinator'
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';

const Feed = () => {
    const [form, onChange, clear] = useForm({ name: "" })
    const [restaurantsList, setRestaurantsList] = useState()
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState()
    const [currentCategory, setCurrentCategory] = useState()
    const [listCategory, setListCategoryState] = useState()

    const history = useHistory()
    
    const getUsers = async () => {
        try {
            const response = await axios.get(`${baseURL}/restaurants`, {headers})
            setRestaurantsList(response.data.restaurants)
            console.log(response.data.restaurants)
            
        } catch (err) {
            console.log(err)
        }
    }

    const onClickCategory = (event) => {
        setCurrentCategory(event.target.value)
        clear()

        if(currentCategory === event.target.value) {
            setCurrentCategory(null)
        }
    }
    
    const filterListInput = () => {
        if(restaurantsList && restaurantsList.length > 0){
            if(listCategory) {
        const list = listCategory.filter(rest => rest.name.toLowerCase().includes(form.name.toLowerCase()))
        setFilteredRestaurantsList(list)
        console.log(list)
            } else {
                const list = restaurantsList.filter(rest => rest.name.toLowerCase().includes(form.name.toLowerCase()))
                setFilteredRestaurantsList(list)
                console.log(list)
            }
    }}

    const filterListButton = () => {
        if(restaurantsList && restaurantsList.length > 0){
            if(currentCategory !== null) {

        const listCategory = restaurantsList.filter(rest => rest.category.toLowerCase().includes(currentCategory.toLowerCase()))
        console.log(listCategory)
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
        filterListInput()
    }, [form])
    
    useEffect(() => {
        filterListButton()
    }, [currentCategory])

    const goToDetails = (id) => {
        goTo(history, "/restaurant-detail", `/${id}`)
    }
    
    return (
       <div>
            <Input label="name" type="text" name="name" value={form.name} onChange={onChange} placeholder="Buscar"/>

                    { restaurantsList && restaurantsList.map(restaurant => {
                            return(
                                <div>
                                    <button onClick={onClickCategory} value={restaurant.category}>{restaurant.category}</button> 
                                </div>
                            )
                        })}

                    {filteredRestaurantsList ?
                    
                    filteredRestaurantsList && filteredRestaurantsList.map(restaurant => {
                    return(
                        <div onClick={() => goToDetails(restaurant.id)} >
                            <p>{restaurant.name}</p> 
                            <p>{restaurant.deliveryTime} - {Number(restaurant.deliveryTime) + 10}min</p>
                            <p>Frete: R${(restaurant.shipping ?? 0).toFixed(2)}</p>  
                        </div>
                    )
                }) : 
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
       </div>
    )
}
export default Feed