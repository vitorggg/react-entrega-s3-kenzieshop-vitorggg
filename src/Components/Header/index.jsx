import { Container, LinksContent } from "./styles";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingBag } from "react-icons/fi";

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
          <FiHome />
          Home
        </Link>
      </LinksContent>
    </Container>
  );
};

export default Header;
