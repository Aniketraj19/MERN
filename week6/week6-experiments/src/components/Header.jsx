import React from "react";
const Header = React.memo(function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
});

module.exports = { Header };
