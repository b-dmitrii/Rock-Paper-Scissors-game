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
  justify-content: space-between;
  align-items: center;
`;

const MyGesture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 30px solid #3750da;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) =>
    props.result === RESULT_MESSAGE.win ? animation : ""};
`;

const EnemyGesture = styled(MyGesture)`
  border: 30px solid #e01e18e5;
`;

const ResultMessage = styled.p`
  font-size: 50px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

const Button = styled.button`
  padding: 1rem 5rem;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #c9c9c9;
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
