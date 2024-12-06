import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, img }) => {
    const navigate = useNavigate();

  return (
    <div className="text-center flex flex-col gap-6">
      <img className="w-1/2 h-1/2 mx-auto" src={img} alt="image" />
      <p className="text-3xl text-[#56B280] font-bold">{title}</p>
      <button
        onClick={() => navigate("/")}
        className="text-xl text-[#56B280] font-semibold pb-4 hover:text-[#56B280]"
      >
        Go home
      </button>
    </div>
  );
};

export default Empty;
