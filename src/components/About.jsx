import React from "react";

const About = () => {
  return (
    <section className="bg-col-3 py-[60px] lg:py-[120px]">
      <div className="container px-2">
        <div className="line relative z-10">
          <h3
            className="w-fit mx-auto bg-col-3 px-5
           text-black font-normal text-3xl lg:text-4xl
            leading-[100%] "
          >
            About Me
          </h3>
        </div>
        <div className="grid lg:grid-cols-12 lg:items-center mt-10 lg:mt-[50px] lg:gap-x-5 gap-y-8">
          <div className="lg:col-span-8">
            <p className="font-normal text-base leading-[170%] text-col-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
              gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc
              bibendum sed.
              <br /> <br />
              Donec tincidunt tellus sed libero ultricies, eu semper enim
              molestie. Etiam lorem quam, tincidunt nec malesuada eu, interdum
              nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Morbi placerat tortor sed felis
              tristique. <br /> <br />
              Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis.
              Cras egestas magna sed nisl pellentesque, sed lobortis felis
              convallis. Phasellus eget ex at est lobortis iaculis eget non
              risus. Etiam ultricies at est sit amet condimentum.
            </p>
          </div>
          <div className="lg:col-span-4">
            <img
              src="about-me-right.png"
              alt="About"
              className="max-lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
