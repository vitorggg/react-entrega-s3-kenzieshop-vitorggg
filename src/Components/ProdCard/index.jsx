import Button from "../Button";
import { Container } from "./styles";

const ProdCard = ({ prod }) => {
  const price = Number(prod.price).toFixed(2);

  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <h3>{prod.name}</h3>
      <span>{price} BRL</span>
      <Button width="120px" height="40px">
        Comprar
      </Button>
    </Container>
  );
};

export default ProdCard;
