import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { GameResultScreen } from "./screens/GameResultScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { loadData } from "./store/gameSlice";
import { gestures } from "./data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(gestures));
  }, [dispatch]);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/result" element={<GameResultScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
