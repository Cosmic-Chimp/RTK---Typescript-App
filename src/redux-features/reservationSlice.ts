import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//create interface to specify custom type for init state
interface ReservationState {
  value: string[]
};

const initialState : ReservationState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: initialState,
  reducers: {
    // create method that updates targeted state :
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    },
  },
});

export default reservationsSlice.reducer;
export const { addReservation, removeReservation } = reservationsSlice.actions