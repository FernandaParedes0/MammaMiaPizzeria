import React, { useState, useEffect } from "react";
import Pizza from "../Pizza/Pizza.jsx"; 
import "./home.css";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);

      if (!response.ok) {
        console.error("Error al obtener las pizzas:", response.statusText);
        return;
      }

      const data = await response.json();

      setPizzas(data);
    } catch (error) {
      console.error("Fallo la conexión con la API:", error);
    }
  };

  return (
    <>
      {" "}
      <div className="containerCards">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => <Pizza key={pizza.id} pizzaData={pizza} />)
        ) : (
          <p>¡Hay que levantar la API! :)</p>
        )}
        {" "}
      </div>
      {" "}
    </>
  );
}

export default Home;
