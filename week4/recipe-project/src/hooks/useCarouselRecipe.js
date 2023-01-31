import React from "react";

const useCarouselRecipe = () => {

    const getCarouselRecipes = async (setCarouselRecipe) =>{
        const carouselItems = localStorage.getItem('carousel');
   

        if(carouselItems){
            setCarouselRecipe(JSON.parse(carouselItems));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${"e225dfedcd954472bc90537a69c98c92"}&number=3`);
            const data = await api.json();
            const carouselRecipes = data.recipes;
            localStorage.setItem('carousel', JSON.stringify(carouselRecipes));
            setCarouselRecipe(carouselRecipes)
        }
        
    }

    return [getCarouselRecipes];

};

export default useCarouselRecipe;
