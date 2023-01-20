import { configureStore } from "@reduxjs/toolkit";

import mySlicer from "./Slice";

const store = configureStore({
  reducer: {
    counter: mySlicer,
  },
});

export default store;
