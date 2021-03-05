import axios from "axios";
import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { baseURL, headers } from "../../parameters";
import { goTo } from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import IfutureContext from "../../Context/IfutureContext";
import {
  ContainerPage,
  MenuBar,
  Input,
  BoxCard,
  TextBox,
  CardImage,
} from "./styled";
import "../../button.css";
import {
  ContainerImg,
  GrayText,
  ImgProduct,
  RedText,
} from "../RestaurantDetail/styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import OrderModal from "../../components/OrderModal";

const Feed = () => {
  const { states, setters, requests } = useContext(IfutureContext);

  useProtectedPage();

  useEffect(() => {
    setters.setPage("feed");
    console.log(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    if (token) {
      getRestaurants(token);

      requests.getActiveOrder(token);
    }
  }, [headers]);

  const [form, onChange, clear] = useForm({ name: "" });
  const [restaurantsList, setRestaurantsList] = useState();
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState();
  const [
    filteredRestaurantsListInput,
    setFilteredRestaurantsListInput,
  ] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [listCategory, setListCategoryState] = useState();

  const history = useHistory();

  async function getRestaurants(token) {
    // const headers1 = {auth:localStorage.getItem("token")}
    // console.log("çlksdjfalksdhjf",headers1.auth)
    await axios
      .get(`${baseURL}/restaurants`, { headers: { auth: token } })
      .then((response) => setRestaurantsList(response.data.restaurants))
      .catch(() => console.log("deu ruim"));
    // setRestaurantsList(response.data.restaurants)
  }

  const getHeader = () => {
    return { headers };
  };

  const onClickNavBar = (event) => {
    setCurrentCategory(event.target.value);
    const divv = event.target.closest("div").children;

    for (let button of divv) {
      button.classList.remove("active");
      console.log(button);
    }

    event.target.classList.add("active");

    if (currentCategory === event.target.value) {
      setCurrentCategory(null);
      event.target.classList.remove("active");
    }

  };


    
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
  };

  const filterListButton = () => {
    if (restaurantsList && restaurantsList.length > 0) {
      if (currentCategory !== null) {
        const listCategory = restaurantsList.filter((rest) =>
          rest.category.toLowerCase().includes(currentCategory.toLowerCase())
        );
        setListCategoryState(listCategory);
        setFilteredRestaurantsList(listCategory);
      } else {
        setListCategoryState(restaurantsList);
        setFilteredRestaurantsList(restaurantsList);
      }
    }
  };

  useEffect(() => {
    // setters.setPage("feed")
    // console.log(headers)
    // getRestaurants()
  }, [headers]);

  useEffect(() => {
    clear();
  }, [states.searchPage]);

  useEffect(() => {
    filterListInput();
  }, [form]);

  useEffect(() => {
    filterListButton();
  }, [currentCategory]);

  const goToDetails = (id) => {
    goTo(history, "/restaurant-detail", `/${id}`);
  };

  const onSearchPage = () => {
    setters.setSearchPage(true);
    setListCategoryState(restaurantsList);
    setFilteredRestaurantsList(restaurantsList);
  };

  // const page = () =>

  return (
    <>
      <OrderModal />
      <ContainerPage>
        <Input
          type="text"
          name="name"
          value={form.name}
          onFocus={onSearchPage}
          onChange={onChange}
          placeholder="Restaurante"
        />

        {states.searchPage ? (
          <>
            {form.name ? (
              filteredRestaurantsListInput &&
              filteredRestaurantsListInput.length > 0 ? (
                filteredRestaurantsListInput &&
                filteredRestaurantsListInput.map((restaurant) => {
                  return (
                    <BoxCard onClick={() => goToDetails(restaurant.id)}>
                      <CardImage src={restaurant.logoUrl} />
                      <RedText>{restaurant.name}</RedText>
                      <TextBox>
                        <GrayText>
                          {restaurant.deliveryTime} -{" "}
                          {Number(restaurant.deliveryTime) + 10}min
                        </GrayText>
                        <GrayText>
                          Frete: R${(restaurant.shipping ?? 0).toFixed(2)}
                        </GrayText>
                      </TextBox>
                    </BoxCard>
                  );
                })
              ) : (
                <p>Não encontramos :(</p>
              )
            ) : (
              <p>Busque por nome de restaurante</p>
            )}
          </>
        ) : (
          <>
            <MenuBar onClick={onClickNavBar}>
              {restaurantsList &&
                restaurantsList.map((restaurant) => {
                  return (
                    <button value={restaurant.category}>
                      {restaurant.category}
                    </button>
                  );
                })}
            </MenuBar>

            {filteredRestaurantsList
              ? filteredRestaurantsList &&
                filteredRestaurantsList.map((restaurant) => {
                  return (
                    <BoxCard onClick={() => goToDetails(restaurant.id)}>
                      <CardImage src={restaurant.logoUrl} />
                      <RedText>{restaurant.name}</RedText>
                      <TextBox>
                        <GrayText>
                          {restaurant.deliveryTime} -{" "}
                          {Number(restaurant.deliveryTime) + 10}min
                        </GrayText>
                        <GrayText>
                          Frete: R${(restaurant.shipping ?? 0).toFixed(2)}
                        </GrayText>
                      </TextBox>
                    </BoxCard>
                  );
                })
              : restaurantsList &&
                restaurantsList.map((restaurant) => {
                  // console.log(restaurant)
                  return (
                    <BoxCard onClick={() => goToDetails(restaurant.id)}>
                      <CardImage src={restaurant.logoUrl} />
                      <RedText>{restaurant.name}</RedText>
                      <TextBox>
                        <GrayText>
                          {restaurant.deliveryTime} -{" "}
                          {Number(restaurant.deliveryTime) + 10}min
                        </GrayText>
                        <GrayText>
                          Frete: R${(restaurant.shipping ?? 0).toFixed(2)}
                        </GrayText>
                      </TextBox>
                    </BoxCard>
                  );
                })}
          </>
        )}
      </ContainerPage>
    </>
  );
};
export default Feed;
