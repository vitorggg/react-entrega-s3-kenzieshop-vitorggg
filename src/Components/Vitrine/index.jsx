import { Container } from "./styles";
import ProdCard from "../ProdCard";
import { useSelector } from "react-redux";

const Vitrine = () => {
  const prods = useSelector((store) => store.products);

  return (
    <Container>
      <ul>
        {prods.map((product) => (
          <li key={product.name}>
            <ProdCard prod={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Vitrine;
