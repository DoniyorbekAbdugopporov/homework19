import React, { memo, useRef } from "react";
import { PROMOCODES } from "../../static";

const Promocode = ({ setPromoStatus }) => {
  const code = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredCode = code.current?.value?.trim();

    if (!enteredCode) {
      setPromoStatus({
        msg: "Promo kodni kiriting",
        error: true,
        success: false,
      });
      return;
    }

    if (PROMOCODES.includes(enteredCode.toUpperCase())) {
      setPromoStatus({
        msg: "Promocode muvaffaqiyatli qabul qilindi. Chegirma 20%!",
        error: false,
        success: true,
      });
    } else {
      setPromoStatus({
        msg: "Promo kod xato yoki yaroqsiz.",
        error: true,
        success: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mt-4">
      <input
        ref={code}
        type="text"
        className="flex-1 px-4 py-2 border rounded-md"
        placeholder="Promo kodni kiriting"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Yuborish
      </button>
    </form>
  );
};

export default memo(Promocode);
