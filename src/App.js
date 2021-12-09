import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import References from "./components/References";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export default App;
