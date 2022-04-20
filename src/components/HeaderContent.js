import styled from "styled-components";

export const HeaderContent = styled.div`
  margin-top: 20px;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 767px) {
    padding: 1rem 2rem;
  }
`;
