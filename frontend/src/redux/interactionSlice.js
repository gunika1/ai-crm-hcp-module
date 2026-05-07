import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    hcpName: "",
    interactionType: "Meeting",
    date: "",
    time: "",
    attendees: "",
    topicsDiscussed: "",
    materialsShared: "",
    samplesDistributed: "",
    sentiment: "Neutral",
    outcomes: "",
    followUpActions: "",
  },
  interactions: [],
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    saveInteraction: (state) => {
      state.interactions.push({
        id: Date.now(),
        ...state.formData,
      });
    },
  },
});

export const { updateFormField, setFormData, saveInteraction } =
  interactionSlice.actions;

export default interactionSlice.reducer;