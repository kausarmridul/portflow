import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Featured from "./components/Featured";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Featured />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
