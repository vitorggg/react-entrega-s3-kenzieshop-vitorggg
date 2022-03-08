import { Container, LinksContent } from "./styles";
import { Link } from "react-router-dom";
import { FiLogIn, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <h2>Kenzie Shop</h2>
      <LinksContent>
        <Link to="/cart">
          <FiShoppingBag />
          Carrinho
        </Link>
        <Link to="/">
          <FiLogIn />
          Login
        </Link>
      </LinksContent>
    </Container>
  );
};

export default Header;
