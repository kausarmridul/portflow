import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section>
      <div className="container px-2 lg:pt-[120px] pt-[60px] ">
        <div className="line relative z-10">
          <h3
            className="w-fit mx-auto bg-white px-5
           text-black font-normal text-3xl lg:text-4xl
            leading-[100%] "
          >
            Contact
          </h3>
        </div>
        <div className="lg:w-6/12 mx-auto text-center mt-10 lg:mt-[70px] ">
          <p className="font-normal text-sm lg:text-base leading-[170%] text-col-1 mb-8 lg:mb-[50px] ">
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>
          <a href="#" className="nav-right">
            Write Message
          </a>
          <ul className="lg:mt-[120px] mt-[60px] flex justify-center gap-x-5">
            <li>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300 inline-block"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-col-1"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300 inline-block"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="text-col-1"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
