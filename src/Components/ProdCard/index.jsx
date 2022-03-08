import Button from "../Button";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/modules/cart/actions";

const ProdCard = ({ prod }) => {
  const dispacht = useDispatch();

  const price = Number(prod.price).toFixed(2);

  const handleProduct = () => {
    localStorage.setItem("@KenzieShop:prod", JSON.stringify(prod));
    dispacht(addCart(prod));
  };

  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <h3>{prod.name}</h3>
      <span>{price} BRL</span>
      <Button onClick={handleProduct} width="120px" height="40px">
        Comprar
      </Button>
    </Container>
  );
};

export default ProdCard;
