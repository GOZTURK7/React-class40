import axios from "axios";

const useFetch = () => {
  const fetchData = (urlSuffix, setFetched, setIsLoading, setIsError) => {
    axios(`https://fakestoreapi.com/products/${urlSuffix}`)
      .then((product) => {
        setFetched(product.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return [fetchData];
};

export default useFetch;
