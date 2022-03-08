import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
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

  margin: 50px 60px;

  h2 {
    margin: 15px 0px;
  }

  p {
    margin-bottom: 10px;
    color: var(--charocoal);
  }

  span {
    font-weight: bold;
    color: var(--pale-gold);
    margin-top: 20px;
  }
`;
