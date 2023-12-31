import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { cartState } from "../store/cartAtom";
import { useNavigate } from "react-router-dom";
import { ProductCardItem, storeColor } from "../data/data";
import { useModal } from "../hooks/useModal";
import { getDiscountPrice } from "../util/calculate";

const ProdectCard = ({
  id,
  image,
  title,
  subtitle,
  price,
  discountRate,
  store,
  best,
}: ProductCardItem) => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const cartModalData = {
    title: "장바구니",
    content: (
      <div>
        해당 상품이 장바구니에 담겼습니다.
        <br />
        장바구니로 이동 하겠습니까?
      </div>
    ),
    callBack: () => {
      closeModal();
      navigate("/cart");
    },
  };

  const duplicateCartModalData = {
    title: "장바구니",
    content: (
      <div>
        해당 상품이 이미 장바구니에 담겨있습니다. <br />
        장바구니로 이동 하겠습니까?
      </div>
    ),
    callBack: () => {
      closeModal();
      navigate("/cart");
    },
  };

  const checkDuplicate = () => {
    if (!cartList.find((item) => item.id === id)) addCartItem();
    else openModal(duplicateCartModalData);
  };

  const addCartItem = () => {
    setCartList((prev) => [
      ...prev,
      {
        id,
        image,
        title,
        subtitle,
        price,
        discountRate,
        store,
        best,
        count: 1,
      },
    ]);
    openModal(cartModalData);
  };

  return (
    <Container>
      <Id>{id}</Id>
      <ImageContainer>
        <img src={image} alt="" />
        <HoverElement>
          <div className="cart-wrapper" onClick={checkDuplicate}>
            <BsCart2 />
          </div>
        </HoverElement>
      </ImageContainer>
      {best ? (
        <Best>
          <div>베스트</div>
        </Best>
      ) : null}
      <Info>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <PriceContainer>
          <DiscountPrice>
            {getDiscountPrice(price, discountRate).toLocaleString("ko-KR")}원
          </DiscountPrice>
          {discountRate === 0 ? null : (
            <>
              <Price>{price.toLocaleString("ko-KR")}원</Price>
              <DiscountRate>{discountRate}%</DiscountRate>
            </>
          )}
        </PriceContainer>
        <Keep color={storeColor[store]}>{store}</Keep>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  /* width: 25%; */
  cursor: pointer;
  max-width: 284px;
  word-break: break-all;
  transition: all 2s;

  &:hover {
    .cart-wrapper {
      opacity: 85%;
    }
  }
`;

const Id = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  border: 1.5px solid #eee;
  margin-top: 10px;
  position: relative;

  img {
    width: 100%;
  }
`;

const HoverElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  .cart-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid gray;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    background-color: #fff;

    &:hover {
      background-color: #dbd8d8;
    }

    svg {
      width: 70px;
      height: 70px;
      padding: 20px;
    }
  }
`;

const Best = styled.div`
  margin-top: 18px;

  div {
    color: #fff;
    font-weight: 500;
    background: #ff6064;
    padding: 5px 12px;
    display: inline-block;
    font-size: 13px;
    border-radius: 5px;
  }
`;

const Info = styled.div`
  margin-top: 18px;
`;

const Title = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: 400;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  color: #888;
  font-size: 14px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 15px;
`;

const DiscountPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Price = styled.div`
  margin-left: 7px;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  text-decoration: line-through;
`;

const DiscountRate = styled.div`
  margin-left: 7px;
  color: #ff6500;
  font-size: 16px;
  font-weight: bold;
`;

const Keep = styled.div<{ color: string }>`
  margin-top: 15px;
  color: ${(props) => props.color};
`;

export default ProdectCard;
