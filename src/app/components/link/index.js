import styled from "styled-components";

export default function Link(props) {
  return <StyledLink {...props}></StyledLink>;
}

const StyledLink = styled.a`
  background-color: rgba(187, 239, 253, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #1a1a1a;

  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: #bbeffd;
  }
`;
