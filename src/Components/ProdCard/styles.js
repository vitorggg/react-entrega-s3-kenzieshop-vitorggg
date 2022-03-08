import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 340px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);

  background-color: var(--paper);
  border-radius: 15px;

  margin: 10px 20px;

  :hover {
    border: 5px double var(--pale-gold);
  }

  figure {
    width: 120px;
    height: 120px;

    border: 1px solid var(--pale-gold);

    margin: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    width: 90%;
    height: 60px;

    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    margin: 0 15px 10px 15px;
  }

  span {
    font-weight: bold;
    color: var(--pale-gold);
    margin: 5px 15px 10px 15px;
  }

  button {
    margin: 10px 15px;

    :hover {
      background-color: var(--pale-gold);
      border: 1px solid var(--white);
      color: var(--white);
    }
  }
`;
