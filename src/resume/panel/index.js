import React from "react";
import styled from "styled-components";

export default function Panel() {
  return (
    <Container>
      <div>
        <Content>Panel Content</Content>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: #f7f7f7;
  flex: 0 0 300px;
  border-left: 1px solid #ececec;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: fixed;
  z-index: 2;
  height: 100vh;
  overflow-y: auto;
  margin-right: -999px;
  padding-right: 999px;
  background-color: #f7f7f7;
  opacity: 1 !important;
`;
