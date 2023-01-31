import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarRating = ({ id }) => {
  const [first, setFirst] = useState(0);
  const colors = {
    orange: "var(--color10)",
    gray: "var(--color5)",
  };

  return (
    <>
      <Rating className="icon">
        <h2>Rating</h2>
      </Rating>
      <div>
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return (
              <FaStar
                size={24}
                key={index}
                style={{ cursor: "pointer", marginRight: "10px" }}
                color={first > index ? colors.orange : colors.gray}
                onClick={() => {
                  setFirst(index + 1);
                }}
              />
            );
          })}
      </div>
    </>
  );
};

const Rating = styled.div`
  h2 {
    font-family: "Montserrat", sans-serif !important;
    font-size: 15px !important;
    width: 5rem;
    background: var(--color10);
    color: var(--color6);
    text-align: center;
    border-radius: 3rem;
    padding: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  h2:hover {
    background: var(--color2);
    color: var(--color1);
  }
`;
export default StarRating;
