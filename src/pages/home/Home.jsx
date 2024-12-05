import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/products").then((res) => setData(res?.data));
  }, []);

  return (
    <div>
      <Hero />
      <Products title="Products" data={data?.products} />
    </div>
  );
};

export default Home;
