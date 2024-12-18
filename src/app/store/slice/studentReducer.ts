import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  studentPhoneNumber: string | null;
  address: string | null;
  postal: string | null;
  city: string | null;
  country: string | null;
  completed: boolean;
}

const initialState: StudentState = {
  firstName: null,
  lastName: null,
  email: null,
  studentPhoneNumber: null,
  address: null,
  postal: null,
  city: null,
  country: null,
  completed: false,
};

interface AddStudentPayload {
  firstName: string;
  lastName: string;
  email: string;
  studentPhoneNumber: string;
  address: string;
  postal: string;
  city: string;
  country: string;
}

const studentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<AddStudentPayload>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.studentPhoneNumber = action.payload.studentPhoneNumber;
      state.address = action.payload.address;
      state.postal = action.payload.postal;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.completed = true;
    },
    resetStudent: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addStudent, resetStudent } = studentSlice.actions;
export default studentSlice.reducer;
