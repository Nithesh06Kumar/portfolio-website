import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import Divider from "../../components/Divider/Divider";

const Home = () => {
  return (
    <>
      <div className="flex flex-1 justify-center pt-12 md:justify-between">
        <Hero />
      </div>
      <About />
      <div className="mb-8 md:hidden px-10">
        <Divider />
        <Skills />
      </div>
    </>
  );
};

export default Home;
