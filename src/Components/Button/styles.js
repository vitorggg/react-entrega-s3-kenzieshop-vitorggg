import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: var(--silk);
  border: 1px solid var(--charocoal);
  border-radius: 15px;

  font-weight: normal;
  font-size: 0.8rem;
`;
