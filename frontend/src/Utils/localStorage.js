//Add a product to the localStorage

export const addToFavoriteToLocalStorage = (product) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.some((p) => p._id == product._id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

//Remove Product from a localStorage

export const removeFavoriteFromLocalStorage = (productID) => {
  const favorites = getFavoritesFromLocalStorage();
  const updateFavorites = favorites.filter(
    (product) => product._id != productID
  );
  localStorage.setItem("favorites", JSON.stringify(updateFavorites));
};

//Retrive favorites from a localstorage
export const getFavoritesFromLocalStorage = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
