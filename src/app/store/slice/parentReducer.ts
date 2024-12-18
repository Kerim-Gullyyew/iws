import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ParentState {
  chooseParent: "Parent" | "Guardian" | null;
  gender: "Male" | "Female" | "Prefer not to say" | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  parentPhoneNumber: string | null;
  address: string | null;
  postal: string | null;
  city: string | null;
  country: string | null;
  completed: boolean;
}

const initialState: ParentState = {
  chooseParent: null,
  gender: null,
  firstName: null,
  lastName: null,
  email: null,
  parentPhoneNumber: null,
  address: null,
  postal: null,
  city: null,
  country: null,
  completed: false,
};

interface AddParentPayload {
  chooseParent: "Parent" | "Guardian";
  gender: "Male" | "Female" | "Prefer not to say";
  firstName: string;
  lastName: string;
  email: string;
  parentPhoneNumber: string;
  address: string;
  postal: string;
  city: string;
  country: string;
}

const parentSlice = createSlice({
  name: "Parent",
  initialState,
  reducers: {
    addParent: (state, action: PayloadAction<AddParentPayload>) => {
      state.chooseParent = action.payload.chooseParent;
      state.gender = action.payload.gender;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.parentPhoneNumber = action.payload.parentPhoneNumber;
      state.address = action.payload.address;
      state.postal = action.payload.postal;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.completed = true;
    },
    resetParent: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addParent, resetParent } = parentSlice.actions;
export default parentSlice.reducer;
