import React from "react";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer>
      <p>Copywrite {year}</p>
    </footer>
  );
}

export default Footer;
