import styled from "styled-components";
import Counter from "./Counter";
import { CartItemType } from "../store/cartAtom";
import { getDiscountPrice } from "../util/calculate";

const CartItem = ({
  id,
  image,
  title,
  price,
  discountRate,
  count,
}: CartItemType) => {
  return (
    <Container>
      <Items className="name first">
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
        <div>{title}</div>
      </Items>
      <Items className="price second">
        <div>
          {getDiscountPrice(price, discountRate).toLocaleString("ko-KR")}원
        </div>
        <Price>{price.toLocaleString("ko-KR")}원</Price>
      </Items>
      <Items className="count">
        <Counter id={id} count={count} />
      </Items>
      <Items className="amount fourth">
        {(count * getDiscountPrice(price, discountRate)).toLocaleString(
          "ko-KR"
        )}
        원
      </Items>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-size: 20px;
`;

const Items = styled.div`
  text-align: center;
  padding: 15px 0;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  &.first {
    gap: 25px;
    justify-content: flex-start;
  }

  &.second {
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
  }

  &.fourth {
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  border: 1.5px solid #eee;
  position: relative;
  margin-left: 30px;

  img {
    width: 150px;
  }
`;

const Price = styled.div`
  color: #666;
  text-decoration: line-through;
`;

export default CartItem;
