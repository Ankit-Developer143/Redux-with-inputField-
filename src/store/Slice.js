const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
  myVal: "",
};

const mySlicer = createSlice({
  name: "slicer",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      }
    },
    add(state, action) {
      state.myVal = action.payload;
    },
  },
});

export const { increment, decrement, add } = mySlicer.actions;
export default mySlicer.reducer;
