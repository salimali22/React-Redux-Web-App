import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="ui fixed menu" style={{ marginBottom: "20px" }}>
      <Link to={`/`}>
        <div className="ui container center">
          <h1>Redux E comm</h1>
        </div>
      </Link>
    </div>
  );
}

export default Header;
