import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./redux-features/reservationSlice";

function App() {
  // later idea to separate e.taget.value cb
  // function handleClientNameInput () {
  //   setClientName(target.value)
  // }

  //state set up
  const [clientNameInput, setClientNameInput] = useState("");

  //useSelectors
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  //dispatching actions
  const dispatch = useDispatch();

  //handler fn's
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
        {customers.map((client) => {
          return (
            <CustomerCard
              id={client.id}
              name={client.name}
              food={client.food}
            />
          );
        })}
        <div className="customer-food-container"></div>
      </div>
    </div>
  );
}

export default App;
