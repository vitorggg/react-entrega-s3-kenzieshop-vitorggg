import styled from "styled-components";

export const Container = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
  margin-top: 40px;

  div {
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
    -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);

    background-color: var(--paper);
    border-radius: 15px;

    h1 {
      margin-bottom: 40px;
      color: var(--pale-gold);
    }

    a {
      color: var(--charocoal);
      text-decoration: underline;

      :hover {
        color: var(--silk);
      }
    }
  }
`;
