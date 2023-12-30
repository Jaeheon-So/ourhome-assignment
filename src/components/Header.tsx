import styled from "styled-components";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../store/cartAtom";

const Header = () => {
  const cartList = useRecoilValue(cartState);

  return (
    <Container>
      <Link to="/">
        <HomeLogo>아워홈 Mall</HomeLogo>
      </Link>
      <Link to="/cart">
        <GrCart />
        <CartCount>
          <span>{cartList.length}</span>
        </CartCount>
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

  a {
    position: relative;
  }
`;

const HomeLogo = styled.div`
  color: #4e2e1d;
  font-weight: bold;
  font-size: 30px;
`;

const CartCount = styled.div`
  position: absolute;
  top: -3px;
  right: -5px;
  width: 19px;
  height: 19px;
  text-align: center;
  border-radius: 50%;
  background-color: orange;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
