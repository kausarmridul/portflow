import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Featured = () => {
  return (
    <section className="bg-col-3 lg:py-[120px] py-[60px] ">
      <div className="container px-2">
        <div>
          <div className="line relative z-10">
            <h3
              className="w-fit mx-auto bg-col-3 px-5
           text-black font-normal text-3xl lg:text-4xl
            leading-[100%] "
            >
              Featured Project
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-y-4 gap-x-5 mt-10 lg:mt-[50px] items-center ">
            <div>
              <img
                src="project-picture.png"
                alt="project-picture"
                className="w-full"
              />
            </div>
            <div>
              <h3 className="font-normal text-xl lg:text-3xl leading-[100%] text-col-1 mb-[6px] lg:mb-2">
                Project Name
              </h3>
              <p className="font-normal text-base leading-[170%] text-col-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.{" "}
              </p>
              <hr className="border-col-1 h-[1px] my-[10px] lg:my-3" />
              <ul className="flex gap-x-[10px] mb-2">
                <li>
                  <a href="#" className="featured-link">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    JS
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    Figma
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    React
                  </a>
                </li>
              </ul>
              <ul className="flex gap-x-[10px]">
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-y-4 gap-x-5 items-center lg:mt-16 mt-10">
            <div className="lg:order-2">
              <img
                src="project-picture.png"
                alt="project-picture"
                className="w-full"
              />
            </div>
            <div className="lg:order-1 lg:text-end">
              <h3 className="font-normal text-xl lg:text-3xl leading-[100%] text-col-1 mb-[6px] lg:mb-2">
                Project Name
              </h3>
              <p className="font-normal text-base leading-[170%] text-col-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.{" "}
              </p>
              <hr className="border-col-1 h-[1px] my-[10px] lg:my-3" />
              <ul className="flex gap-x-[10px] lg:justify-end mb-2">
                <li>
                  <a href="#" className="featured-link">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    JS
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    Figma
                  </a>
                </li>
                <li>
                  <a href="#" className="featured-link">
                    React
                  </a>
                </li>
              </ul>
              <ul className="flex gap-x-[10px] lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:mt-[100px] mt-[60px]">
          <div className="line relative z-10">
            <h3
              className="w-fit mx-auto bg-col-3 px-5
           text-black font-normal text-3xl lg:text-4xl
            leading-[100%] "
            >
              Other Project
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-9 mt-10 lg:mt-[50px]">
            <div className="flex gap-x-3">
              <div className="w-3/12 lg:w-2/12">
                <img
                  src="other-project.png"
                  alt="other-project"
                  className="w-full"
                />
              </div>
              <div className="w-9/12 lg:w-10/12">
                <h3 className="font-normal text-xl lg:text-2xl leading-[100%] text-col-1 mb-1 lg:mb-2">
                  Project Name
                </h3>
                <p className="font-normal text-sm leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis.
                </p>
                <hr className="border-col-1 h-[1px] my-2" />
                <ul className="flex gap-x-[10px] mb-2">
                  <li>
                    <a href="#" className="featured-link">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      JS
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-x-[10px]">
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="w-3/12 lg:w-2/12">
                <img
                  src="other-project.png"
                  alt="other-project"
                  className="w-full"
                />
              </div>
              <div className="w-9/12 lg:w-10/12">
                <h3 className="font-normal text-xl lg:text-2xl leading-[100%] text-col-1 mb-1 lg:mb-2">
                  Project Name
                </h3>
                <p className="font-normal text-sm leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis.
                </p>
                <hr className="border-col-1 h-[1px] my-2" />
                <ul className="flex gap-x-[10px] mb-2">
                  <li>
                    <a href="#" className="featured-link">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      JS
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-x-[10px]">
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="w-3/12 lg:w-2/12">
                <img
                  src="other-project.png"
                  alt="other-project"
                  className="w-full"
                />
              </div>
              <div className="w-9/12 lg:w-10/12">
                <h3 className="font-normal text-xl lg:text-2xl leading-[100%] text-col-1 mb-1 lg:mb-2">
                  Project Name
                </h3>
                <p className="font-normal text-sm leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis.
                </p>
                <hr className="border-col-1 h-[1px] my-2" />
                <ul className="flex gap-x-[10px] mb-2">
                  <li>
                    <a href="#" className="featured-link">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      JS
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-x-[10px]">
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="w-3/12 lg:w-2/12">
                <img
                  src="other-project.png"
                  alt="other-project"
                  className="w-full"
                />
              </div>
              <div className="w-9/12 lg:w-10/12">
                <h3 className="font-normal text-xl lg:text-2xl leading-[100%] text-col-1 mb-1 lg:mb-2">
                  Project Name
                </h3>
                <p className="font-normal text-sm leading-[170%] text-col-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis.
                </p>
                <hr className="border-col-1 h-[1px] my-2" />
                <ul className="flex gap-x-[10px] mb-2">
                  <li>
                    <a href="#" className="featured-link">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="featured-link">
                      JS
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-x-[10px]">
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform duration-300 inline-block"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
