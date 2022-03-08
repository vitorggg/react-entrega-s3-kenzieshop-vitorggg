import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.09);

  background-color: var(--pale-gold);

  h2 {
    margin-left: 40px;
    color: var(--paper);
    text-shadow: 5px 0px 8px rgba(150, 150, 150, 0.5);
  }
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-right: 40px;

  div {
    background-color: var(--paper);
    border-radius: 100%;
    padding: 5px;
  }

  a {
    margin: 20px 5px 20px 20px;
    color: var(--paper);
    text-shadow: 5px 0px 8px rgba(150, 150, 150, 0.5);
    display: flex;
    align-items: center;

    :hover {
      color: var(--charocoal);
    }
  }

  svg {
    margin-right: 5px;
  }
`;
