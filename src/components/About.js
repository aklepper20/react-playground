import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

function About() {
  return (
    <>
      <Container>
        <Main>
          <BackArrow>
            <Link to="/">
              <a>
                <img src="/images/left.png" />
              </a>
            </Link>
          </BackArrow>
          <Title>ABOUT</Title>
          <HeaderContainer>
            <AboutContainer>
              <AboutImg>
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=12e627f7a5&attid=0.1.1&permmsgid=msg-f:1718622806579975382&th=17d9c656411594d6&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_9Kqpwq5F_XrFSSkPJI0C_toMAtwnb6Sh3v_2VFyeBmLccvWr867ffOWGjI78a6hP3o60Ssy86YKUFiKqMjgYCEByjBon0g4L6rwhq4a9Np7HEKWqfN45CkX0&disp=emb" />
              </AboutImg>
              <AboutMe>
                <AboutContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </AboutContent>
              </AboutMe>
            </AboutContainer>
          </HeaderContainer>
          <FooterContainer>
            <FooterTitle>Experience</FooterTitle>
            <ExperienceContainer>
              <h3>Legendary Pictures, Burbank, CA</h3>
              <p>
                Digital Media Intern Accounted for all production paperwork and
                contracts, such as talent releases, deal memos and casting
                agreements Aided support and service in creative development,
                physical on set projects and with all departments Consulted with
                production team to discuss future projects, budgets, schedules,
                creative ideas and show content
              </p>
            </ExperienceContainer>
            <ExperienceContainer>
              <h3>Conan Burbank, CA</h3>
              <p>
                Train, inform and oversee incoming interns of all daily duties
                and important everyday tasks with studio operations Responsible
                for all needed management in pre-production, production and
                post-production Order, receive, distribute and/or stock all
                incoming daily inventory to ensure production completes all
                daily affairs
              </p>
            </ExperienceContainer>
            <ExperienceContainer>
              <h3> Titan Television Fullerton, CA</h3>
              <p>
                Created behind-the-scenes stills, controlled teleprompter,
                floor/technical direct, run audio and edit on software
                Conventionalized needed camera shots and practical standards
                prior to production (including live programs) Operated camera,
                frame shots, set up lighting, carry out technical tasks, studio
                set-up and studio breakdown
              </p>
            </ExperienceContainer>
          </FooterContainer>
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackArrow = styled.div`
  margin-top: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.div`
  color: #48284a;
  font-size: 70px;
  text-align: center;
`;

const Main = styled.div`
  width: 950px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutImg = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #916c80;
    object-position: center;
  }
`;

const AboutMe = styled.div`
  flex-basis: 50%;
`;

const AboutContent = styled.div`
  width: 100%;
  height: 290px;
  border-radius: 4px;

  padding: 8px;
`;

const FooterContainer = styled.div`
  border-top: 5px solid #916c80;
  flex-basis: 50%;
  width: 100%;
  height: 400px;
`;

const FooterTitle = styled.div`
  color: #48284a;
  font-size: 50px;
  text-align: center;
`;

const ExperienceContainer = styled.div`
  padding: 8px;
  width: 100%;
  height: fit-content;
`;
export default About;
