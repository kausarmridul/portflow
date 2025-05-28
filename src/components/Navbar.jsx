import React from "react";

const Navbar = () => {
  return (
    <section className="py-6">
      <div className="container px-2 lg:grid max-lg:flex max-lg:justify-between items-center lg:grid-cols-3">
        <div className="flex items-center">
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <div className="max-lg:hidden lg:justify-self-center">
          <ul className="flex gap-x-5 items-center">
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="justify-self-end flex items-center gap-x-5">
          <a href="#" className="nav-right">
            Resume
          </a>
          <a href="#" className="nav-right">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
