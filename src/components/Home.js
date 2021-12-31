import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home({ dataBtns }) {
  const [currentSrc, setCurrentSrc] = useState("");

  // function routeComponent(btnSrc) {
  //   setCurrentSrc(btnSrc);
  // }

  return (
    <Container>
      <Main>
        <Link to="/seeFriends">
          <Button>See Random Generated Friends</Button>
        </Link>
        <Head>
          <Title>AB</Title>
          <SubTitle>ALY BAEZ</SubTitle>
        </Head>
        <ButtonContainer>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
          <Link to="/references">
            <Button>References</Button>
          </Link>
        </ButtonContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 1000px;
  height: 550px;
  border-radius: 37px;
  box-shadow: 28px 28px 62px #dfdfdf, -28px -28px 62px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 37px;
  box-shadow: inset 5px 5px 9px #ebebeb, inset -5px -5px 9px #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Varta", sans-serif;
`;

const Head = styled.div`
  text-align: center;
  height: 220px;
  margin-top: 26px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 98px;
  letter-spacing: 10px;
  color: #48284a;
`;

const SubTitle = styled.div`
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 6px;
  color: #916c80;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  width: 90px;
  height: 70px;
  margin-top: 20px;
  margin-left: 18px;
  border: 0.5 solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  box-shadow: inset 5px 5px 9px #ebebeb, inset -5px -5px 9px #f5f5f5;
  cursor: pointer;
  &:hover {
    background: #d6d6d6;
  }
`;

export default Home;
