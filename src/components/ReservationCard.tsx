import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux-features/customerSlice";
import { removeReservation } from "../redux-features/reservationSlice";
import { v4 as uuid } from "uuid";
// interface for component props
interface ReserveCardProps {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReserveCardProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => {
          dispatch(removeReservation(index));
          dispatch(
            addCustomer({
              id: uuid(), // fn imported from uuid that creates random string aka uuid
              name,
              food: [],
            })
          );
        }}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  );
}
