import { useSelector } from "react-redux";
import styled from "styled-components";

import appLogo from "../assets/logo.svg";
import { HeaderContent } from "./HeaderContent";
import { Score } from "./Score";

const Logo = styled.img`
  width: 100px;

  @media (min-width: 767px) {
    width: 160px;
  }
`;

export const Header = () => {
  const { count } = useSelector((state) => state.game);
  return (
    <HeaderContent>
      <Logo src={appLogo} />
      <Score count={count} />
    </HeaderContent>
  );
};
