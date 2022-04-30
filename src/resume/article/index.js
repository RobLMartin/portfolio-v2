import React from "react";
import styled from "styled-components";
import "./styles.css";
import { Typography, Link } from "../../app/components";

export default function Article() {
  return (
    <StyledArticle>
      <header>
        <Typography variant="h1">Rob Martin</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Asheville, NC / 904-614-3282 / rmartin3@alumni.unca.edu /
          <Link href="https://github.com/RobLMartin">Github</Link> /
          <Link href="https://codesandbox.io/u/RobLMartin">Code Sandbox</Link>
        </Typography>
      </header>
      <Typography>
        Software Engineer - Meta Menlo Park/Remote, CA, 1/21 - current Designed,
        built, & tested various Financial products using JavaScript (React),
        GraphQL, and Hack. Lead Software Engineer - Premier Research Remote,
        12/20 - 12/21 Designed, built, & tested a research product to capture
        medical studies using JavaScript (React), Material-UI. Software Engineer
        - Blue Cross Blue Shield Remote, 06/18 - 1/21 Developed various products
        using: JavaScript (React), Redux, Material-UI, NodeJS, and others.
        Achievement Highlights: ● Built our supply chain management system ●
        Developed a Trello/Jira-like task management system ● Developed
        prototypes to minimize risks across projects ● Developed and followed
        best practices domain wide Software Engineer - SAW Software Mill
        Asheville, NC, 06/16 - 11/17 Built products for the construction
        industry using Javascript. SKILLS Experience in Product Management and
        Software Engineering. Programming Technologies JavaScript, React, Redux,
        REST, Firebase, NodeJS, Express, Hack, HTML, CSS, Webpack, Git, GitHub,
        GitLab, Bitbucket, Jira. Other Skills Algorithms, Data Structures,
        System Design / Product Design, Creative, Reliable & Professional,
        Organized, Time Management, Team Player, Fast Learner, Self-Motivated,
        Driven EDUCATION University of North Carolina of Asheville, 2016.
        Emphasis in Information Systems B.S. in Computer Science
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
