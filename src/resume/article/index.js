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
          Asheville, NC / 904-614-3282 / rmartin3@alumni.unca.edu
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <Link href="https://github.com/RobLMartin">Github</Link> -{" "}
          <Link href="https://codesandbox.io/u/RobLMartin">Code Sandbox</Link>
        </Typography>
      </header>
      <Typography variant="h2"></Typography>
      <Typography variant="h3">
        Software Engineer - Meta, 1/21 - current
      </Typography>
      <Typography>
        Designed, built, & tested various Financial products using JavaScript
        (React), GraphQL, and Hack.
      </Typography>
      <Typography variant="h3">
        Lead Software Engineer - Premier Research Remote, 12/20 - 12/21
      </Typography>
      <Typography>
        Designed, built, & tested a research product to capture medical studies
        using JavaScript (React), Material-UI.
      </Typography>
      <Typography variant="h3">
        Software Engineer - Blue Cross Blue Shield Remote, 06/18 - 1/21
      </Typography>
      <Typography>
        Developed various products using: JavaScript (React), Redux,
        Material-UI, NodeJS, and others. Achievement Highlights: ● Built our
        supply chain management system ● Developed a Trello/Jira-like task
        management system ● Developed prototypes to minimize risks across
        projects ● Developed and followed best practices domain wide.
      </Typography>
      <Typography variant="h3">
        Software Engineer - SAW Software Mill Asheville, NC, 06/16 - 11/17
      </Typography>
      <Typography>
        Built products for the construction industry using Javascript.
      </Typography>
      <Typography variant="h2">Skills</Typography>
      <Typography>
        Experience in Product Management and Software Engineering. Programming
        Technologies JavaScript, React, Redux, REST, Firebase, NodeJS, Express,
        Hack, HTML, CSS, Webpack, Git, GitHub, GitLab, Bitbucket, Jira. Other
        Skills Algorithms, Data Structures, System Design / Product Design,
        Creative, Reliable & Professional, Organized, Time Management, Team
        Player, Fast Learner, Self-Motivated, Driven EDUCATION University of
        North Carolina of Asheville, 2016. Emphasis in Information Systems B.S.
        in Computer Science
      </Typography>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  p {
    margin-top: 1em;
  }
  h1:nth-child(1),
  h3,
  h4,
  h5 {
    margin-top: 1em;
  }
  h2::before {
    content: " ";
    display: block;
    border-bottom: 1px solid #ececec;
    padding-top: 1em;
    margin-bottom: 1em;
  }
  h6 {
    margin-top: 0.5em;
  }
`;
