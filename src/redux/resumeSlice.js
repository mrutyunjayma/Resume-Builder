import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  education: "",
  experience: "",
  skills: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateResume(state, action) {
      return { ...state, ...action.payload };
    },
    resetResume(state) {
      return initialState;
    },
  },
});

export const { updateResume, resetResume } = resumeSlice.actions;

export default resumeSlice.reducer;
