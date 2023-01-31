
const useCategories = () => {
  const getCategories = async (setRecipes, category) => {
    const isBestTen = category == "" ? "bestTen" : category;
    const isCategory = localStorage.getItem(isBestTen);

    // if(typeof isCategory == "undefined"){
    //   localStorage.removeItem(isBestTen);
    //   isCategory = false;
    // } 

    if (isCategory) {
      setRecipes(JSON.parse(isCategory));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e225dfedcd954472bc90537a69c98c92&type=${category}`
      );
      const data = await api.json();
      const categories = data.results;
      const cate = category == "" ? "bestTen" : category;
      localStorage.setItem(cate, JSON.stringify(categories));
      setRecipes(categories);
    }
  };

  const getSearched = async (setRecipes, search) => {
    const isSearched = localStorage.getItem(search);
    console.log("0 - isSearched: ", isSearched);
    
    // if(typeof isSearched == "undefined"){
    //   localStorage.removeItem(search);
    //   isSearched = false;
    // } 
    console.log("1-from useCategories 'seacrh' :", `'${search}'`);

    if (isSearched) {
      setRecipes(JSON.parse(isSearched));
      console.log("2-isSearched first if:", isSearched);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e225dfedcd954472bc90537a69c98c92&query=${search}`
      );
      const data = await api.json();
      console.log("3-data: ", data);
      const searchedResults = data.results;
      localStorage.setItem(search, JSON.stringify(searchedResults));
      console.log("4-searchedResults :", searchedResults);
      setRecipes(searchedResults);
    }
  };
  return [getCategories, getSearched];
};

export default useCategories;
