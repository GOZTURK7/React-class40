import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // ******** state values **********
  // seletedCategory
  const [selectedCategory, setSelectedCategory] = useState("");
  // all categories
  const [categories, setCategories] = useState([]);
  // products
  const [products, setProducts] = useState([]);
  // selected Products
  const [product, setProduct] = useState(null);
  // error
  const [isError, setIsError] = useState(false);
  // is Loading
  const [isLoading, setIsLoading] = useState(true);
  // selectedProduct
  const [selectedProductId, setSelectedProductId] = useState(null);

  // ********* functionality **********
  // handle selected category
  const handleSelectedCategory = (e) => {
    let category = e.currentTarget.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  // handle selected product
  const handleSelectedProduct = (id) => {
    setSelectedProductId(id);
  };

  // fetch categories
  const allCategories = () => {
    axios("https://fakestoreapi.com/products/categories")
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetch all products
  const allProducts = () => {
    axios("https://fakestoreapi.com/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetch selected category products
  const fetchSelectedProducts = () => {
    setIsLoading(true);

    axios(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((product) => {
        setProducts(product.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // fetch selected product
  const fethcSelectedProduct = () => {
    setIsLoading(true);

    axios(`https://fakestoreapi.com/products/${selectedProductId}`)
      .then((product) => {
        setProduct(product.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    allCategories();
    allProducts();
  }, []);

  useEffect(() => {
    fetchSelectedProducts();
  }, [selectedCategory]);

  useEffect(() => {
    fethcSelectedProduct();
  }, [selectedProductId]);

  if (isError) return <Error />;

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              selectedCategory={selectedCategory}
              handleSelectedCategory={handleSelectedCategory}
              isLoading={isLoading}
              products={products}
              handleSelectedProduct={handleSelectedProduct}
            />
          }
        />
        <Route
          path={`/products/${selectedProductId}`}
          element={<ProductDetails 
          product={product} 
          isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
