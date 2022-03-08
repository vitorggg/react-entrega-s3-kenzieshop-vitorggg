import { Link } from "react-router-dom";
import { Container } from "./styles";

const EmptyCart = () => {
  return (
    <Container>
      <div>
        <h1>Carrinho vazio</h1>
        <Link to="/">Visite a Home e adicione produtos</Link>
      </div>
    </Container>
  );
};

export default EmptyCart;
