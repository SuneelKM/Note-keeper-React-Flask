import React from "react";

function Footer() {
  return (
    <footer>
      <p><em>All the note entries are deleted after every ten minutes.
            Made by Suneel. Copyright ⓒ {new Date().getFullYear()} </em></p>
    </footer>
  );
}

export default Footer;
