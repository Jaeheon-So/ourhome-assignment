import styled from "styled-components";
import ProdectCard from "../components/ProdectCard";
import { productList } from "../data/data";

const Product = () => {
  const products = productList.map((product, index) => (
    <ProdectCard key={index} {...product} />
  ));

  return <Container>{products}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px 34px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export default Product;
