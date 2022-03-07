import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood2Customer } from "../redux-features/customerSlice";
// interface for props:
interface CustomerProps {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerProps) {
  // CLIENT STATE:
  const [clientFoodInput, setClientFoodInput] = useState("");
  // dispatch actions:
  const dispatch = useDispatch();

  return (
    <>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((meal) => {
              return <p id="meal">{meal}</p>;
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={clientFoodInput}
              onChange={(e) => setClientFoodInput(e.target.value)}
            />
            <button
              onClick={() => {
                if (!clientFoodInput) return;
                dispatch(
                  addFood2Customer({
                    id,
                    food: clientFoodInput,
                  })
                );
                setClientFoodInput("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
