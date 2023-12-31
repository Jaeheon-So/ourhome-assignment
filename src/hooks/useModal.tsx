import { useRecoilState } from "recoil";
import { modalState } from "../store/modalAtom";

type ModalType = {
  title: string;
  content: JSX.Element | string;
  callBack?: () => any;
};

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = () => {
    setModalDataState((prev: ModalType) => {
      return { ...prev, isOpen: false };
    });
  };

  const openModal = ({ title, content, callBack }: ModalType) => {
    setModalDataState({
      isOpen: true,
      title: title,
      content: content,
      callBack: callBack,
    });
  };

  return { modalDataState, closeModal, openModal };
};
