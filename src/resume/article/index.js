import React from "react";
import styled from "styled-components";
import "./styles.css";
import { Typography } from "../../app/components";

export default function Article() {
  return (
    <StyledArticle>
      <header>
        <Typography variant="h1">How to Upgrade to React 18</Typography>
      </header>
      <Typography variant="subtitle1" color="textSecondary">
        As we shared in the release post, React 18 introduces features powered
        by our new concurrent renderer, with a gradual adoption strategy for
        existing applications. In this post, we will guide you through the steps
        for upgrading to React 18.
      </Typography>
      <Typography>
        As we shared in the release post, React 18 introduces features powered
        by our new concurrent renderer, with a gradual adoption strategy for
        existing applications. In this post, we will guide you through the steps
        for upgrading to React 18. Please report any issues you encounter
        whilexxx upgrading to React 18. Note for React Native users: React 18
        will ship in a future version of React Native. This is because React 18
        relies on the New React Native Architecture to benefit from the new
        capabilities presented in this blogpost. For more information, see the
        React Conf keynote here.
      </Typography>
      <Typography variant="h2">Installing</Typography>
      <Typography>To install the latest version of React:</Typography>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  p {
    margin-top: 30px;
  }
  h1:nth-child(1),
  h3,
  h4,
  h5 {
    margin-top: 80px;
  }
  h2::before {
    content: " ";
    display: block;
    border-bottom: 1px solid #ececec;
    padding-top: 44px;
    margin-bottom: 40px;
  }
  h6 {
    margin-top: 50px;
  }
`;
