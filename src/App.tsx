import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./redux-features/reservationSlice";

function App() {
  // later idea to separate e.taget.value cb
  // function handleClientNameInput () {
  //   setClientName(target.value)
  // }
  const [clientNameInput, setClientNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!clientNameInput) return;

    dispatch(addReservation(clientNameInput));
    setClientNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={clientNameInput}
              onChange={(e) => setClientNameInput(e.target.value)} // get value of input and store inside state
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>

        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
