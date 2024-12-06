import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartImg from "../../assets/images/cart.jpg";
import Empty from "../../components/empty/Empty";
import Promocode from "../../components/promocode/Promocode";
import { useStateValue } from "../../context";

const Cart = () => {
  const [promoStatus, setPromoStatus] = useState({
    msg: "",
    error: false,
    success: false,
  });
  const { cart, setCart } = useStateValue();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  const discountedPrice = promoStatus.success ? totalPrice * 0.8 : totalPrice;

  const handleIncrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : item.amount }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter(({ id }) => id !== product.id));
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {cart.length ? (
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Savatingizdagi Mahsulotlar
            </h2>
            <div className="space-y-6">
              {cart?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <img
                    src={item.thumbnail}
                    alt="product"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Price: ${(item.price * item.amount).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item)}
                      disabled={item.amount <= 1}
                      className="bg-gray-200 px-3 py-1 text-lg rounded"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="bg-gray-200 px-3 py-1 text-lg rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-96 bg-white shadow-lg rounded-md p-6 ">
            <h2 className="text-xl font-semibold mb-4">
              Buyurtmangiz Tafsilotlari
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Jami narx:</p>
                <p className="font-bold text-lg text-green-600">
                  ${discountedPrice.toFixed(2)}
                </p>
              </div>
              <Promocode setPromoStatus={setPromoStatus} />
              {promoStatus.error && (
                <p className="text-red-500 text-sm">{promoStatus.msg}</p>
              )}
              {promoStatus.success && (
                <p className="text-green-500 text-sm">{promoStatus.msg}</p>
              )}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-green-500 text-white py-2 rounded-md text-lg hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Empty title="Savatingiz hozircha bo‘sh" img={CartImg} />
      )}
    </div>
  );
};

export default Cart;
