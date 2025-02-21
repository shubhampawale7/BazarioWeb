import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";
import { Link } from "react-router";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <>
      <div className="ml-[5rem] mt-5">
        <Link
          to="/"
          className="text-white font-semibold hover:underline ml-15 "
        >
          {" "}
          <span className="text-white underline ">Go Back </span>
        </Link>
        <h1 className="text-lg font-bold ml-[3rem] mt-[3rem]">
          FAVORITE PRODUCTS
        </h1>

        <div className=" flex flex-wrap">
          {favorites.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
