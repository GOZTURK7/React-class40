import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { StoreContext } from "./store";
import FavoritedProducts from "./components/FavoritedProducts";
import useFetch from "./hooks/useFetch.js";

function App() {
  // ******** state values **********
  // seletedCategory
  const [selectedCategory, setSelectedCategory] = useState("");
  // products
  const [products, setProducts] = useState([]);
  // selected Products
  const [product, setProduct] = useState(null);
  // favorited Products
  const [favoritedProducts, setFavoritedProducts] = useState([]);
  // error
  const [isError, setIsError] = useState(false);
  // is Loading
  const [isLoading, setIsLoading] = useState(true);
  // selectedProduct
  const [selectedProductId, setSelectedProductId] = useState(null);
  // fovorite Products Id's Array
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);
  // custom hook useFetch()
  const [fetchData] = useFetch();

  // ********* functionality **********

  // fetch favorited products
  const fetchFavoritedProducts = async () => {
    const urls = favoriteProductIds.map((id) => {
      return `https://fakestoreapi.com/products/${id}`;
    });

    await axios
      .all(urls.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        const newData = [];
        [...data].map((d) => {
          return newData.push(d.data);
        });
        setFavoritedProducts(newData);
      });
  };

  useEffect(() => {
    fetchFavoritedProducts();
  }, [favoriteProductIds]);

  useEffect(() => {
    fetchData("", setProducts, setIsLoading, setIsError);
  }, []);

  useEffect(() => {
    fetchData(
      `category/${selectedCategory}`,
      setProducts,
      setIsLoading,
      setIsError
    );
  }, [selectedCategory]);

  useEffect(() => {
    fetchData(`${selectedProductId}`, setProduct, setIsLoading, setIsError);
  }, [selectedProductId]);

  if (isError) return <Error />;

  return (
    <StoreContext.Provider
      value={{ favoriteProductIds, setFavoriteProductIds }}
    >
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                isLoading={isLoading}
                products={products}
                setProducts={setProducts}
                setSelectedProductId={setSelectedProductId}
                setIsLoading={setIsLoading}
                setIsError={setIsError}
              />
            }
          />
          <Route
            path={`/products/${selectedProductId}`}
            element={<ProductDetails product={product} isLoading={isLoading} setSelectedCategory={setSelectedCategory} />}
          />
          <Route
            path="/products/favorites"
            element={
              <FavoritedProducts
                isLoading={isLoading}
                favoritedProducts={favoritedProducts}
                setSelectedProductId={setSelectedProductId}
              />
            }
          />
        </Routes>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
