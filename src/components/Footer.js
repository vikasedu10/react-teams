import React from "react";

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    top: "100vh",
    position: "absolute",

  }
  return (
    <div className="bg-dark text-light b-1 py-2" style={footerStyle}>
      <p className="bg-dark text-light" href="todos.com">
      <p className="text-center">
        Copyright @2022; todos.com
      </p>
      </p>
    </div>
  );
};
