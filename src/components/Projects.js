import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

function Projects() {
  return (
    <div>
      <BackArrow>
        <Link to="/">
          <a>
            <img src="/images/left.png" />
          </a>
        </Link>
      </BackArrow>
      TBH
    </div>
  );
}

const BackArrow = styled.div`
  margin-top: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export default Projects;
