import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import GlobalStyles from "./global/globalStyles.ts";
import { RecoilRoot } from "recoil";
import ConfirmModal from "./components/ConfirmModal.tsx";
import Modal from "react-modal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <GlobalStyles />
    <RouterProvider router={router} />
    <ConfirmModal />
  </RecoilRoot>
);

Modal.setAppElement("#root");
