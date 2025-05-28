import React from "react";

const Experience = () => {
  return (
    <section className="lg:py-[120px] py-[60px] ">
      <div className="container px-2">
        {" "}
        <div className="line relative z-10">
          <h3
            className="w-fit mx-auto bg-white px-5
           text-black font-normal text-3xl lg:text-4xl
            leading-[100%] "
          >
            Experience
          </h3>
        </div>
        <div className="grid lg:grid-cols-12 gap-x-6 lg:items-center lg:mt-[50px] mt-10 ">
          <div className="lg:col-span-3 lg:text-end lg:pr-6 lg:border-r border-col-1">
            <h3 className="font-normal text-2xl leading-[100%] text-col-1 mb-1">
              Job Title
            </h3>
            <h5 className="font-normal text-base leading-[100%] text-col-1 pb-[10px] lg:border-b border-col-1">
              Company Name
            </h5>
            <p className="text-black font-normal text-sm leading-[170%] lg:mt-3 mb-5 lg:mb-0">
              Apr 2018 - Dec 2022
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="list-disc grid gap-y-[6px] pl-5">
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-x-6 lg:items-center lg:mt-[50px] mt-10 ">
          {" "}
          <div className="lg:col-span-9 max-lg:order-2">
            <ul className="list-disc grid gap-y-[6px] pl-5">
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
              <li>
                <p className="font-normal text-base leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 max-lg:order-1 lg:pl-6 lg:border-l border-col-1">
            <h3 className="font-normal text-2xl leading-[100%] text-col-1 mb-1">
              Job Title
            </h3>
            <h5 className="font-normal text-base leading-[100%] text-col-1 pb-[10px] lg:border-b border-col-1">
              Company Name
            </h5>
            <p className="text-black font-normal text-sm leading-[170%] lg:mt-3 mb-5 lg:mb-0">
              Apr 2018 - Dec 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
