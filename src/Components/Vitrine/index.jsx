import { Container } from "./styles";
import ProdCard from "../ProdCard";
import products from "../../Services/products";

const Vitrine = () => {
  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <ProdCard prod={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Vitrine;
