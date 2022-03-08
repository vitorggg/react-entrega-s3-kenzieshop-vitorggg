import { Container } from "./styles";

const Button = ({ children, onClick, width, height }) => {
  return (
    <Container width={width} height={height} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
