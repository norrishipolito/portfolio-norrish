import React from "react";
import Hero from "./_components/hero";
import About from "./_components/about";
import Projects from "./_components/projects";
import ContactMe from "./_components/contact";

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </React.Fragment>
  );
};

export default Landing;
