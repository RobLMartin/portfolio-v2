import React from "react";
import styled from "styled-components";

import Article from "./article";
import Panel from "./panel";

export default function Resume() {
  return (
    <Container>
      <FixedWidth>
        <Content>
          <Article />
          <Panel />
        </Content>
      </FixedWidth>
    </Container>
  );
}

const Container = styled.div`
  flex: 1 0 auto;
`;

const FixedWidth = styled.div`
  max-width: 1260px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
`;
