import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { subCart } from "../../store/modules/cart/actions";

const ProdCart = ({ prod }) => {
  const dispacht = useDispatch();

  const price = Number(prod.price).toFixed(2);

  const removeProd = () => {
    dispacht(subCart(prod));
  };

  return (
    <Container>
      <figure>
        <img alt={prod.name} src={prod.image} />
      </figure>
      <div>
        <h3>{prod.name}</h3>
        <span>{price} BRL</span>
        <a onClick={removeProd}>Remover</a>
      </div>
    </Container>
  );
};

export default ProdCart;
