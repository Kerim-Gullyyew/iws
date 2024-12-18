import { createSlice } from "@reduxjs/toolkit";

interface ConfirmState {
  confirm: boolean;
}

const initialState: ConfirmState = {
  confirm: false,
};

const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    confirm: (state) => {
      state.confirm = true;
    },
  },
});

export const { confirm } = confirmSlice.actions;
export default confirmSlice.reducer;
