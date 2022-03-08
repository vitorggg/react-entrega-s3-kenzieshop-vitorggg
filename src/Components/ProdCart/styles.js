import styled from "styled-components";

export const Container = styled.div`
  width: 540px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);

  background-color: var(--paper);
  border-radius: 15px;

  margin: 10px 20px;

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

  div {
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 10px;

    h3 {
      width: 90%;
      height: 60px;

      font-weight: bold;
      font-size: 1rem;
      text-align: center;
      margin: 5px 0;
    }

    span {
      font-weight: bold;
      color: var(--pale-gold);
      margin: 0px 0px 20px 0px;
    }

    a {
      color: var(--charocoal);
      text-decoration: underline;
      cursor: pointer;

      :hover {
        color: var(--silk);
      }
    }
  }
`;
