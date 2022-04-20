import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { Container } from "./HomeScreen";
import { RESULT_MESSAGE } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { gameResult } from "../store/gameSlice";

const pulse = keyframes`
  0%{    
    box-shadow: 0 0 40px #050f6d;
  }

  25% {    
    box-shadow: 0 0 40px #325cf1;
  }

  50% {
    box-shadow: 0 0 40px #6d87cf;
  }

  75% {
    box-shadow: 0 0 40px #7d7feb;
  }

  100% {
    box-shadow: 0 0 40px #3d18e4;
  }
`;

const animation = () => css`
 1s ${pulse} 0s linear infinite alternate
`;

const ResultContainer = styled(Container)`
  flex-direction: column;

  align-items: center;
  height: 80vh;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
  }
`;

const MyGesture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 20px solid #3750da;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) =>
    props.result === RESULT_MESSAGE.win ? animation : ""};

  @media (min-width: 767px) {
    width: 200px;
    height: 200px;
    border: 30px solid #3750da;
  }

  & > img {
    width: 49px;
    height: 59px;
  }
`;

const EnemyGesture = styled(MyGesture)`
  border: 20px solid #e01e18e5;

  @media (min-width: 767px) {
    border: 30px solid #e01e18e5;
  }
`;

const ResultMessage = styled.p`
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 767px) {
    font-size: 50px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 3rem;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;

  &:hover {
    background-color: #c9c9c9;
  }

  @media (min-width: 767px) {
    padding: 1rem 5rem;
    font-size: 20px;
  }
`;

export const GameResultScreen = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { enemyGesture, selectedGesture, result } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    dispatch(gameResult());
  }, [dispatch]);

  return (
    <ResultContainer>
      <MyGesture result={result}>
        <img src={selectedGesture.image} width="70px" alt="gesture" />
      </MyGesture>
      <div>
        <ResultMessage>{result}</ResultMessage>
        <Button onClick={() => navigate(-1)}>Play again</Button>
      </div>

      <EnemyGesture>
        <img src={enemyGesture?.image} width="70px" alt="gesture" />
      </EnemyGesture>
    </ResultContainer>
  );
};
