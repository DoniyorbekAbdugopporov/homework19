import React, { useEffect } from "react";
import Products from "../../components/products/Products";
import { useStateValue } from "../../context";
import Empty from "../../components/empty/Empty";
import LikesImg from "../../assets/images/likes.jpg";


const WishList = () => {
  const { wishList } = useStateValue();
  console.log(wishList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] pt-20">
      {wishList.length ? (
        <Products title="Wishlist" data={wishList} />
      ) : (
        <Empty title="Sizga yoqqanini qo'shing" img={LikesImg} />
      )}
    </div>
  );
};

export default WishList;
