import React from "react";
import { Sorting } from "../components/home/Sorting";
import { Category } from "../components/home/Category";
import { Products } from "../components/home/Products";

function Home() {
  return (
    <div>
      <Sorting />
      <div className="flex">
        <Category />
        <Products/>
      </div>
    </div>
  );
}

export default Home;
