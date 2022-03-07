import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../redux-features/reservationSlice";

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
        }}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  );
}

// export default ReservationCard;
