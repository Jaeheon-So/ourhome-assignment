import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
`;

export default App;
