import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import {
  cartState,
  deliveryFeeState,
  totalPriceState,
} from "../store/cartAtom";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { FaPlus, FaEquals } from "react-icons/fa6";

const Cart = () => {
  const cartList = useRecoilValue(cartState);
  const totalPrice = useRecoilValue(totalPriceState);
  const deliveryFee = useRecoilValue(deliveryFeeState);

  if (cartList.length <= 0)
    return (
      <EmptyContainer>
        <div>장바구니가 비어있습니다.</div>
        <Link to="/">상품 구경하기</Link>
      </EmptyContainer>
    );

  return (
    <Container>
      <ProductInfo>
        <div className="item name">상품명</div>
        <div className="item price">구매가</div>
        <div className="item count">수량</div>
        <div className="item amount">금액</div>
      </ProductInfo>
      {cartList.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <PriceInfo>
        <PriceItem>
          <div className="title">총 금액</div>
          <div className="value">
            {totalPrice.toLocaleString("ko-KR")}
            <span className="won">원</span>
          </div>
        </PriceItem>
        <FaPlus />
        <PriceItem>
          <div className="title">배송비</div>
          <div className="value">
            {deliveryFee.toLocaleString("ko-KR")}
            <span className="won">원</span>
            <span className="sub">(3만원이상 구매 시 무료배송)</span>
          </div>
        </PriceItem>
        <FaEquals />
        <PriceItem>
          <div className="title">결제 금액</div>
          <div className="value">
            {(totalPrice + deliveryFee).toLocaleString("ko-KR")}
            <span className="won">원</span>
          </div>
        </PriceItem>
      </PriceInfo>
    </Container>
  );
};

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 30px;
  color: #4e2e1d;
  font-weight: bold;
  height: 60vh;

  a {
    background-color: #eee;
    padding: 15px 25px;
    border-radius: 8px;
    color: #4e2e1d;
    transition: all 0.3s;

    &:hover {
      background-color: #4e2e1d;
      color: #eee;
    }
  }
`;

const Container = styled.div`
  margin: 20px 0;
  font-size: 20px;

  .item {
    padding: 20px 0;
  }

  .name {
    width: 60%;
  }

  .price {
    width: 15%;
  }

  .count {
    width: 15%;
  }

  .amount {
    width: 10%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  text-align: center;
  background-color: #fafafa;
  border-top: 2px solid #000;
  border-bottom: 2px solid #eee;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  background-color: #fafafa;
  padding: 50px 0;

  svg {
    color: #b5b5b5;
    width: 30px;
    height: 30px;
  }
`;

const PriceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .title {
    font-size: 16px;
  }

  .value {
    font-size: 25px;
    font-weight: 500;

    .won {
      font-size: 23px;
      font-weight: normal;
    }
  }

  .sub {
    font-size: 16px;
    color: #888;
  }
`;

export default Cart;
