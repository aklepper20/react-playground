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
                  Hey! I'm Aly. I am currently a frontend web developer. I
                  graduated cum laude in 2019 at California State University,
                  Fullerton in Communications. My background is in the creative
                  industry, but recently I followed my heart to a career change
                  into software development. My
                </AboutContent>
              </AboutMe>
            </AboutContainer>
          </HeaderContainer>
          <FooterContainer>
            <FooterTitle>Experience</FooterTitle>
            <ExperienceContainer>
              <h3>Legendary Pictures, </h3> <span>Burbank, CA</span>
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
              <h3>Conan,</h3> <span>Burbank, CA</span>
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
              <h3> Titan Television,</h3> <span>Fullerton, CA</span>
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
    margin-bottom: 50px;
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
  height: 240px;
  border-radius: 4px;
  margin-top: 40px;
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
