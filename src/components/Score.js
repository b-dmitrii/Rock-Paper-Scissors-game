import styled from "styled-components";

const ScoreWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 1rem 2rem;
`;

const ScoreTitle = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  color: rgba(26, 44, 203, 0.788);
`;

const ScoreCount = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`;

export const Score = ({ count }) => {
  return (
    <ScoreWrapper>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreCount>{count}</ScoreCount>
    </ScoreWrapper>
  );
};
