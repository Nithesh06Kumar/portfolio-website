import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-1 justify-center pt-12 md:justify-between">
        <Hero />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
