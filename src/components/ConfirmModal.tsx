import ReactModal from "react-modal";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import { IoMdClose } from "react-icons/io";

const ConfirmModal = () => {
  const { modalDataState, closeModal } = useModal();

  const modalStyle: ReactModal.Styles = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(79, 77, 77, 0.7)",
      zIndex: 10,
    },
    content: {
      padding: "40px",
      border: "none",
      borderRadius: "8px",
      width: "70%",
      maxWidth: "600px",
      minWidth: "300px",
      maxHeight: "80%",
      margin: "auto",
      top: "none",
      left: "none",
      right: "none",
      bottom: "none",
    },
  };

  return (
    <ReactModal
      isOpen={modalDataState.isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <ModalClose onClick={closeModal}>
        <IoMdClose />
      </ModalClose>
      <ModalTitle>{modalDataState.title}</ModalTitle>
      <ModalContent>{modalDataState.content}</ModalContent>
      <ModalSelect>
        <Button onClick={modalDataState.callBack}>확인</Button>
        <Button onClick={closeModal}>취소</Button>
      </ModalSelect>
    </ReactModal>
  );
};

const ModalClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  svg {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;
  text-align: center;
  color: #111111;
`;

const ModalContent = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: center;
  text-align: center;
  padding: 30px 0;
  font-size: 20px;
  line-height: 1.5;
`;

const ModalSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Button = styled.div`
  text-align: center;
  padding: 15px 25px;
  color: #4e2e1d;
  background-color: #eee;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #4e2e1d;
    color: #eee;
  }
`;

export default ConfirmModal;
