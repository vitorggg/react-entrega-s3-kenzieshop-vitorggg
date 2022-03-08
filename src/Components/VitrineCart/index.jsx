import { Container } from "./styles";
import { useSelector } from "react-redux";
import ProdCart from "../ProdCart";

const VitrineCart = () => {
  const prodsCart = useSelector((store) => store.cart);

  return (
    <Container>
      <ul>
        {prodsCart.map((product) => (
          <li key={product.name}>
            <ProdCart prod={product} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default VitrineCart;
