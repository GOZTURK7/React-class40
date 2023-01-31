import React from "react";
import Bar from "./Bar";
import "./NutritionsBars.css";

const NutritionsBars = ({ nutritions }) => {
  return (
    <>
      <div className="nutritions-bars">
        {nutritions.map((nutrition, index) => {
        return (
          <Bar
            key={index}
            id={index}
            title={nutrition.title}
            amount={nutrition.amount}
            percentOfDailyNeeds={nutrition.percentOfDailyNeeds}
          />
        )})}
      </div>
    </>
  );
};

export default NutritionsBars;
