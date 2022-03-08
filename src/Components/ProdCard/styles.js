import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 280px;

  display: flex;
  flex-direction: column;

  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.09);

  background-color: var(--paper);

  margin: 10px 20px;

  figure {
    width: 90px;
    height: 90px;

    img {
      width: 100%;
    }
  }
`;
