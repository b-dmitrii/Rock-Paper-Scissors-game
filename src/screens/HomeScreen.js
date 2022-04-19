import styled from "styled-components";

import Triangle from "../assets/bg-triangle.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEnemyGesture, setSelectedGesture } from "../store/gameSlice";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin-top: 200px;
`;

const GesturesWrapper = styled.div`
  position: relative;
  background: url(${Triangle});
  background-repeat: no-repeat;
  background-position: center center;

  background-size: contain;
  width: 305px;
  height: 277px;
`;

const GesturePaper = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 20px solid #3750da;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 1s all ease-out 0.2s;
  }
`;

const GestureRock = styled(GesturePaper)`
  left: calc(100% - 120px);
  border: 20px solid yellow;
`;

const GestureScissors = styled(GestureRock)`
  left: calc(277px / 2 - 120px / 2);
  top: calc(100% - 120px);
  border: 20px solid #e01e18e5;
`;

export const HomeScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { gestures } = useSelector((state) => state.game);

  const generateRandomGestures = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    dispatch(setEnemyGesture(gestures[randomNumber]));
  };

  const selectedGestureHundler = (data) => {
    dispatch(setSelectedGesture(data));
    generateRandomGestures();
    navigate("/result");
  };

  return (
    <Container>
      <GesturesWrapper>
        <GesturePaper onClick={() => selectedGestureHundler(gestures[0])}>
          <img
            src={gestures[0]?.image}
            width="49px"
            height="59px"
            alt="gesture"
          />
        </GesturePaper>
        <GestureRock onClick={() => selectedGestureHundler(gestures[2])}>
          <img
            src={gestures[2]?.image}
            width="49px"
            height="59px"
            alt="gesture"
          />
        </GestureRock>
        <GestureScissors onClick={() => selectedGestureHundler(gestures[1])}>
          <img
            src={gestures[1]?.image}
            width="49px"
            height="59px"
            alt="gesture"
          />
        </GestureScissors>
      </GesturesWrapper>
    </Container>
  );
};
