import React from "react";
import Logo from "./images/logo2.svg";
import Nav from "./Nav";
function Header({ setSearch }) {
  return (
    <section className="header">
      <img className="logo" src={Logo} alt="netflix logo" />
      <Nav setSearch={setSearch} />
    </section>
  );
}

export default Header;
