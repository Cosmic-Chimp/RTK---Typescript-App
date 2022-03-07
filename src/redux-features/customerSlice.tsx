import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// custom type for state val
interface Customer {
  id: string;
  name: string;
  food: string[];
}

//create interface to specify custom type for init state
interface CustomerState {
  value: Customer[];
}

//food interface:
interface ClientFoodPayload {
  food: string;
  id: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    // create method that add client/customer:
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood2Customer: (state, action: PayloadAction<ClientFoodPayload>) => {
      state.value.forEach((client) => {
        if (client.id === action.payload.id) {
          client.food.push(action.payload.food);
        }
      });
    },
  },
});

export default customerSlice.reducer;
export const { addCustomer, addFood2Customer } = customerSlice.actions;
