import styled from "styled-components";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <HomeLogo>아워홈 Mall</HomeLogo>
      </Link>
      <Link to="/cart">
        <GrCart />
      </Link>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  svg {
    width: 40px;
    height: 40px;
  }
`;

const HomeLogo = styled.div`
  color: #4e2e1d;
  font-weight: bold;
  font-size: 30px;
`;

export default Header;
