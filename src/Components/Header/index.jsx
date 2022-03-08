import { Container, LinksContent } from "./styles";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const prodsCart = useSelector((store) => store.cart);

  const counter = prodsCart.length;

  return (
    <Container>
      <h2>Kenzie Shop</h2>
      <LinksContent>
        <Link to="/cart">
          <FiShoppingBag />
          Carrinho
        </Link>
        {prodsCart.length > 0 && <div>{counter}</div>}
        <Link to="/">
          <FiHome />
          Home
        </Link>
      </LinksContent>
    </Container>
  );
};

export default Header;
