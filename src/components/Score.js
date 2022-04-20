import styled from "styled-components";

const ScoreWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  @media (min-width: 767px) {
    padding: 1rem 2rem;
  }
`;

const ScoreTitle = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  color: rgba(26, 44, 203, 0.788);

  @media (min-width: 767px) {
    font-size: 14px;
  }
`;

const ScoreCount = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 767px) {
    font-size: 35px;
  }
`;

export const Score = ({ count }) => {
  return (
    <ScoreWrapper>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreCount>{count}</ScoreCount>
    </ScoreWrapper>
  );
};
