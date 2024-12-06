import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useStateValue } from "../../context";
import {PROMOCODES} from "../../static/index"

const Products = ({ data, title }) => {
  const { wishList, setWishList, cart, setCart } = useStateValue();

  const handleLike = (product) => {
    const index = wishList.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishList((prev) => [...prev, product]);
    } else {
      setWishList((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const handleAddToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
    }
    //  else {
    //   setCart((prev) => prev.filter((item) => item.id !== product.id));
    // }
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="shadow-lg">
      <div className="w-full h-60 bg-[#7B7B7B26] relative">
        <img
          className="w-full h-full object-contain"
          src={product.thumbnail}
          alt="product image"
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-xl"
        >
          {wishList?.some((item) => item.id === product.id) ? (
            <FaHeart className="text-green-600" />
          ) : (
            <FaRegHeart className="text-green-600" />
          )}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute top-10 right-3 text-xl"
        >
          {cart?.some((item) => item.id === product.id) ? (
            <IoCartSharp className="text-green-600" />
          ) : (
            <IoCartOutline className="text-green-600" />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-base font-semibold">{product.title}</h3>
        <p className="text-base font-bold text-[#56B280] text-end">
          {product.price}
        </p>
      </div>
    </div>
  ));
  return (
    <section className="products pb-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 mt-28">
          <h2 className="text-5xl text-[#0B254B] font-semibold">{title}</h2>
          <p className="text-lg text-[#0B254B] font-medium">
            Order it for you or for your beloved ones{" "}
          </p>
        </div>
        <div className="grid container gap-4 grid-cols-4 pt-20">
          {productItems}
        </div>
      </div>
    </section>
  );
};

export default Products;
