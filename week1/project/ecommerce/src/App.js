import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories.js";
import Header from "./components/Header";
import Products from "./components/Products.js";
import allProducts from "./fake-data/all-products.js";

function App() {
  // ***************** state values *******************
  // seletedCategory
  const [selectedCategory, setSelectedCategory] = useState("");
  // products
  const [products, setProducts] = useState(allProducts);

  // ***************** functionality *******************
  // handle selected category
  const handleSelectedCategory = (e) => {
    let category = e.currentTarget.innerText.toLowerCase().substr(6);
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Header />
      <Categories
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      <Products products={products} 
      selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
