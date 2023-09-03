import React from "react";
import "./App.scss";
import GateCard from "./components/ProductCard/ProductCard";

export interface CardItem {
  id?: number;
  price: string;
  name: string;
  descr: string;
}

function App() {
  const CardData: CardItem[] = [
    {
      id: 1,
      price: "$100",
      name: "Zebronics head phone",
      descr:
        "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
    },
  ];
  return (
    <div className="wrapper">
      {CardData.map((item) => (
        <GateCard key={item.id} price={item.price} name={item.name} descr={item.descr} />
      ))}
    </div>
  );
}

export default App;
