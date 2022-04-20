import styled from "styled-components";

import Triangle from "../assets/bg-triangle.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEnemyGesture, setSelectedGesture } from "../store/gameSlice";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;

  @media (min-width: 767px) {
  }
`;

const GesturesWrapper = styled.div`
  position: relative;

  background: url(${Triangle});
  background-repeat: no-repeat;
  background-position: center center;

  background-size: contain;
  width: 200px;
  height: 237px;

  @media (min-width: 767px) {
    width: 455px;
    height: 427px;
  }
`;

const GesturePaper = styled.div`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 15px solid #3750da;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 1s all ease-out 0.2s;
  }

  @media (min-width: 767px) {
    top: -100px;
    left: -100px;
    width: 220px;
    height: 220px;
    border: 20px solid #3750da;
  }

  & > img {
    width: 49px;
    height: 59px;

    @media (min-width: 767px) {
      width: 109px;
      height: 119px;
    }
  }
`;

const GestureRock = styled(GesturePaper)`
  left: calc(100% - 85px);
  border: 15px solid yellow;

  @media (min-width: 767px) {
    left: calc(100% - 180px);
    border: 20px solid yellow;
  }

  & > img {
    width: 49px;
    height: 59px;

    @media (min-width: 767px) {
      width: 109px;
      height: 119px;
    }
  }
`;

const GestureScissors = styled(GestureRock)`
  left: calc(200px / 2 - 130px / 2);
  top: calc(100% - 130px);
  border: 15px solid #e01e18e5;

  @media (min-width: 767px) {
    left: calc(427px / 2 - 240px / 2);
    top: calc(100% - 200px);
    border: 20px solid #e01e18e5;
  }
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
          <img src={gestures[0]?.image} alt="gesture" />
        </GesturePaper>
        <GestureRock onClick={() => selectedGestureHundler(gestures[2])}>
          <img src={gestures[2]?.image} alt="gesture" />
        </GestureRock>
        <GestureScissors onClick={() => selectedGestureHundler(gestures[1])}>
          <img src={gestures[1]?.image} alt="gesture" />
        </GestureScissors>
      </GesturesWrapper>
    </Container>
  );
};
