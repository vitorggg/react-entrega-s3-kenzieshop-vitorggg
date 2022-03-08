import Button from "../Button";
import { Container } from "./styles";

const ProdCart = ({ prod }) => {
  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <h3>{prod.name}</h3>
      <span>{prod.price}</span>
      <Button width="120px" height="40px">
        Comprar
      </Button>
    </Container>
  );
};

export default ProdCart;
