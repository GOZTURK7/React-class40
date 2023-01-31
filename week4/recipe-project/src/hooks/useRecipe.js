const useRecipe = () => {
  const getRecipe = async (id, setDetails) => {
    const isRecipe = localStorage.getItem(id);
    
    if (isRecipe) {
      setDetails(JSON.parse(isRecipe));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${"e225dfedcd954472bc90537a69c98c92"}`
      );
      const data = await api.json();
      localStorage.setItem(`${id}`, JSON.stringify(data));
      setDetails(data);
    }
  };

  const getNutritions = async (id, setNutritions) => {
    const localStrKey = `Nutrition-${id}`;
    const isLocalStrKey = localStorage.getItem(localStrKey);

    if (isLocalStrKey) {
      setNutritions(JSON.parse(isLocalStrKey));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${"e225dfedcd954472bc90537a69c98c92"}`
      );
      const data = await api.json();
      const calories = data.bad[0];
      const fat = data.bad[1];
      const carbonhydrates = data.bad[3];
      const sugar = data.bad[4];
      const sodium = data.bad[6];
      const protein = data.good[0];
      const vitamind = data.good[17];
      const potassium = data.good[10];
      const vitaminc = data.good[1];
      const phosphorus = data.good[17];
      const nutritions = [
        calories,
        fat,
        carbonhydrates,
        sugar,
        sodium,
        protein,
        vitamind,
        potassium,
        vitaminc,
        phosphorus,
      ];
      localStorage.setItem(`${localStrKey}`, JSON.stringify(nutritions));
      setNutritions(nutritions);
    }
  };
  return [getRecipe, getNutritions];
};

export default useRecipe;
