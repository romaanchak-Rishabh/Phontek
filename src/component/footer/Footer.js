import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ All Rights Reserved with Phontek.in</p>
    </footer>
  );
}

export default Footer;
