import { Container } from "./styles";

const ProdCard = (prod) => {
  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <div>
        <h3>{prod.name}</h3>
        <span>{prod.price}</span>
      </div>
    </Container>
  );
};

export default ProdCard;
