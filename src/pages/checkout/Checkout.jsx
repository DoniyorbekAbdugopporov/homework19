import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useStateValue } from "../../context";

const BOT_TOKEN = "7966107644:AAHboWbiNoEtSvAfhlJ8XZo8IINMNgnJovo";
const CHAT_ID = "-1002401288895"; 

const Checkout = () => {
  const { cart } = useStateValue();

  if (!cart.length) {
    return <Navigate replace to={"/cart"} />;
  }

  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const country = useRef(null);
  const notes = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let text = `🛒 *Yangi Buyurtma:* %0A%0A`;
    text += `👤 *Ismi*: ${fname.current.value} %0A`;
    text += `👤 *Familiyasi*: ${lname.current.value} %0A`;
    text += `📧 *Email*: ${email.current.value} %0A`;
    text += `📞 *Telefon*: ${phone.current.value} %0A`;
    text += `🏡 *Manzil*: ${address.current.value} %0A`;
    text += `🌆 *Shahar*: ${city.current.value} %0A`;
    text += `🌍 *Mamlakat*: ${country.current.value} %0A`;
    text += `📝 *Eslatmalar*: ${notes.current.value || "Yo'q"} %0A%0A`;

    cart.forEach((product) => {
      text += `🛍️ *Mahsulot nomi*: ${product.title} %0A`;
      text += `📦 *Miqdori*: ${product.amount} %0A`;
      text += `💰 *Narxi*: $${product.price} %0A%0A`;
    });

    text += `💳 *Jami narx*: $${cart
      .reduce((sum, item) => sum + item.amount * item.price, 0)
      .toFixed(2)} %0A`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=Markdown&text=${text}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          alert("Buyurtma muvaffaqiyatli yuborildi!");
        } else {
          alert("Buyurtma yuborishda xatolik yuz berdi.");
        }
      })
      .catch(() => {
        alert("Buyurtma yuborishda xatolik yuz berdi.");
      });
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-10 pt-24">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Buyurtmani Rasmiylashtirish
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            ref={fname}
            type="text"
            placeholder="Ism"
            className="border p-3 rounded-md w-full"
            required
          />
          <input
            ref={lname}
            type="text"
            placeholder="Familiya"
            className="border p-3 rounded-md w-full"
            required
          />
        </div>
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          ref={phone}
          type="text"
          placeholder="Telefon raqami"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          ref={address}
          type="text"
          placeholder="Manzil"
          className="border p-3 rounded-md w-full"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            ref={city}
            type="text"
            placeholder="Shahar"
            className="border p-3 rounded-md w-full"
            required
          />
          <input
            ref={country}
            type="text"
            placeholder="Mamlakat"
            className="border p-3 rounded-md w-full"
            required
          />
        </div>
        <textarea
          ref={notes}
          placeholder="Buyurtma haqida eslatmalar (ixtiyoriy)"
          className="border p-3 rounded-md w-full h-24"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Buyurtmani Yuborish
        </button>
      </form>
    </div>
  );
};

export default Checkout;
