import React from "react";
import Logo from "./images/logo2.svg";
import Nav from "./Nav";
function Header() {
  return (
    <section className="header">
      <img className="logo" src={Logo} alt="netflix logo" />
      <Nav />
    </section>
  );
}

export default Header;
