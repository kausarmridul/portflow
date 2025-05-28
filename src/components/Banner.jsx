import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="container px-2 py-[296px] lg:py-[340px] text-center">
        <h1 className="font-normal text-4xl lg:text-7xl leading-[110%] text-col-1 mb-3">
          Hi, I'm John Smith
        </h1>
        <p className="font-light text-xl lg:text-2xl leading-[100%] text-col-1 mb-[50px] lg:mb-[100px]">
          I design and build things.
        </p>
        <img src="hero-arrow.png" alt="Hero-Arrow-Icon" className="mx-auto" />
      </div>
    </section>
  );
};

export default Banner;
