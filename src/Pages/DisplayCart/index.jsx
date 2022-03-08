import CartCounter from "../../Components/CartCounter";
import Header from "../../Components/Header";
import VitrineCart from "../../Components/VitrineCart";
import { Content } from "./styles";
import { useSelector } from "react-redux";
import EmptyCart from "../../Components/EmptyCart";

const DisplayCart = () => {
  const prodsCart = useSelector((store) => store.cart);

  return (
    <>
      <Header />
      {prodsCart.length > 0 ? (
        <Content>
          <VitrineCart />
          <CartCounter />
        </Content>
      ) : (
        <Content>
          <EmptyCart />
          <CartCounter />
        </Content>
      )}
    </>
  );
};

export default DisplayCart;
