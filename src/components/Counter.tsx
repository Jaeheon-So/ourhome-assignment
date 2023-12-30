import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { cartState } from "../store/cartAtom";
import { useModal } from "../hooks/useModal";

interface CounterProps {
  id: string;
  count: number;
}

const Counter = ({ id, count }: CounterProps) => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const { openModal, closeModal } = useModal();

  const deleteCartItemModalData = {
    title: "장바구니",
    content: <div>해당 상품을 장바구니에서 삭제하시겠습니까?</div>,
    callBack: () => {
      closeModal();
      deleteCart();
    },
  };

  const deleteCart = () => {
    setCartList((prev) => prev.filter((item) => item.id !== id));
  };

  const onIncrease = () => {
    const newCartList = cartList.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartList(newCartList);
  };

  const onDecrease = () => {
    if (count <= 1) return openModal(deleteCartItemModalData);

    const newCartList = cartList.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    setCartList(newCartList);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value[0] === "-") return;

    const newCartList = cartList.map((item) =>
      item.id === id ? { ...item, count: Number(e.target.value) } : item
    );
    setCartList(newCartList);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value[0] === "-") {
      const newCartList = cartList.map((item) =>
        item.id === id ? { ...item, count: 1 } : item
      );
      setCartList(newCartList);
    }
  };

  return (
    <Container>
      <Button onClick={onDecrease}>
        <FaMinus />
      </Button>
      <Input
        name="count"
        type="number"
        value={count || ""}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Button onClick={onIncrease}>
        <FaPlus />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  color: #7d7979;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  margin: 0;
  width: 50px;
  padding: 5px 0;
  font-size: 18px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-left: none;
  border-right: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid #719fef;
  }
`;

export default Counter;
