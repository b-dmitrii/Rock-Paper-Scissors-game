import { createSlice } from "@reduxjs/toolkit";
import { RESULT_MESSAGE } from "../data";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    gestures: [],
    status: "",
    enemyGesture: {},
    selectedGesture: {},
    result: "",
    count: 0,
  },
  reducers: {
    loadData(state, action) {
      state.status = "loading";
      state.gestures.push(...action.payload);
      state.status = "resolved";
    },

    setEnemyGesture(state, action) {
      state.enemyGesture = action.payload;
    },

    setSelectedGesture(state, action) {
      state.selectedGesture = action.payload;
    },

    gameResult(state) {
      switch (state.selectedGesture.name + state.enemyGesture.name) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
          state.result = RESULT_MESSAGE.win;
          state.count = state.count + 1;
          break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          state.result = RESULT_MESSAGE.lose;

          break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
          state.result = RESULT_MESSAGE.draw;

          break;
        default:
      }
    },
  },
});

export const { loadData, setEnemyGesture, setSelectedGesture, gameResult } =
  gameSlice.actions;

export default gameSlice.reducer;
