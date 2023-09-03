import { useState } from "react";
import style from "./Colors.module.scss";

function Colors() {
  const colors: string[] = ["#E44", "#3C81F6", "#000"];
  const [selectedCircle, setSelectedCircle] = useState<number>(0);

  const handleCircleClick = (index: number) => {
    setSelectedCircle(index);
  };

  return (
    <div className={style.wrapper}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleCircleClick(index)}
          className={style.circle}
          style={{
            backgroundColor: color,
            borderColor: selectedCircle === index ? "#000" : "",
          }}
        ></div>
      ))}
    </div>
  );
}

export default Colors;
