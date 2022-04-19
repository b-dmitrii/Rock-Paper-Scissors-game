import { configureStore } from "@reduxjs/toolkit";
import gameReduser from "./gameSlice";

export default configureStore({
  reducer: {
    game: gameReduser,
  },
});
