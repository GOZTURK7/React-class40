import { useContext } from "react";
import { StoreContext } from "../store";

const useHandleFavorite = () => {
  const context = useContext(StoreContext);
  const favoritedId = context.favoriteProductIds;
  const setFavoritedId = context.setFavoriteProductIds;
  const heartRegular = require("../assets/heart-regular.svg").default;
  const heartSolid = require("../assets/heart-solid.svg").default;

  const handleFavorite = (e, id) => {
    e.preventDefault();
    if (!favoritedId.includes(id)) {
      setFavoritedId([...favoritedId, id]);
    } else {
      setFavoritedId(favoritedId.filter((listId) => listId !== id));
    }
  };

  return [
    handleFavorite,
    favoritedId,
    heartRegular,
    heartSolid,
  ];
};

export default useHandleFavorite;
