import React from "react";

const Bar = ({ title, amount, percentOfDailyNeeds, id }) => {
  // To calculate proportion of the bar length
  // because when I used the actual daily need percentage
  // for valuenow attribute the structure of bar is being broken
  let percentageOfBarLength = 0;

  if (percentOfDailyNeeds > 100) {
    percentageOfBarLength = 83;
  } else {
    percentageOfBarLength = (percentOfDailyNeeds * 80) / 100;
  }
  // To give red bar color for first bad nutrution and green for the good ones
  let bgColor = "";
  id < 5 ? (bgColor = "bg-danger") : (bgColor = "bg-success");

  return (
    <>
      <div className="progress py-3">
        <div className="title">{`${title} - ${amount}`}</div>
        <div
          className={`progress-bar ${bgColor}`}
          role="progressbar"
          aria-labelledby="Success example"
          style={{ width: `${percentageOfBarLength}%` }}
          aria-valuenow={`${percentOfDailyNeeds}`}
          aria-valuemin="0"
          aria-valuemax="100"
        >{`${percentOfDailyNeeds}%`}</div>
      </div>
    </>
  );
};

export default Bar;
