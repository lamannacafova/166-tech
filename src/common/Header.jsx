import React, { useState } from "react";
import Logo from "../components/logo/Logo";
import {  NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <header>
        <div className="container">
          <nav>
           <NavLink to="/">
              <Logo />
           </NavLink>
              <div className={`list ${show ? "block" : "hidden"}`}>
                <ul>
                  <li>
                    <NavLink to="/about">Haqqımızda</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book">Kitablar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/exams">İmtahanlar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Bizimlə əlaqə</NavLink>
                  </li>
                </ul>
              </div>

            <div className="buttons">
              <button className="btn-1">Daxil ol</button>
              <button className="btn-2">Qeydiyyat</button>
            </div>
            <div className="dots">
              <p onClick={() => setShow(!show)}><RxHamburgerMenu/></p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
