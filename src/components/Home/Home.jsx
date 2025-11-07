import React from "react";
import CardPizza from "../CardPizza/CardPizza";
import "./home.css";
import {pizzas} from "../../js/pizzas.js";

function Home() {
  return (
    <>
    <div className="containerCards">
        {
          pizzas.map (pizza => (
                  <CardPizza
                  key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}
                  />
          ))
        }
      </div>
    </>
  );
}

export default Home;