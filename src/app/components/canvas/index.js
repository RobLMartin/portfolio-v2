import styled from "styled-components";

export default function Canvas({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: stretch;
`;
