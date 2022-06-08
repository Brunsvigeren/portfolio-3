import React from "react";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import What_i_do from "./components/what_i_do/What_i_do";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <What_i_do />
    </>
  );
};

export default App;
