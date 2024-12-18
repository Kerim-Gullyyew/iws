import {
  ALevelProgram,
  DateObject,
  Package,
  Subject,
} from "@/src/lib/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudyState {
  package: Package | ALevelProgram | null;
  selectedSubjects: Subject[] | null;
  date: DateObject | null;
  completed: boolean;
}

const initialState: StudyState = {
  package: null,
  selectedSubjects: null,
  date: null,
  completed: false,
};

interface AddStudyPayload {
  package: Package | ALevelProgram;
  selectedSubjects: Subject[];
  date: DateObject;
}

const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {
    addStudy: (state, action: PayloadAction<AddStudyPayload>) => {
      state.package = action.payload.package;
      state.selectedSubjects = action.payload.selectedSubjects;
      state.date = action.payload.date;
      state.completed = true;
    },
    resetStudy: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addStudy, resetStudy } = studySlice.actions;
export default studySlice.reducer;
