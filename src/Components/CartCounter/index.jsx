import { Container } from "./styles";
import { useSelector } from "react-redux";

const CartCounter = () => {
  const prodsCart = useSelector((store) => store.cart);

  const counter = prodsCart.length;

  const amount = prodsCart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Container>
      <h2>Resumo do pedido</h2>
      <p>Quantidade: {counter}</p>
      <span>Total: {amount} BRL</span>
    </Container>
  );
};

export default CartCounter;
