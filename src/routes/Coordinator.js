export const goTo=(history,route,param)=>{
   
    history.push(route+param)
}

export const goToBack = (history) => {
    history.goBack()
}