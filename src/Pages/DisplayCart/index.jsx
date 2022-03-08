import CartCounter from "../../Components/CartCounter";
import Header from "../../Components/Header";
import VitrineCart from "../../Components/VitrineCart";
import { Content } from "./styles";

const DisplayCart = () => {
  return (
    <>
      <Header />
      <Content>
        <VitrineCart />
        <CartCounter />
      </Content>
    </>
  );
};

export default DisplayCart;
