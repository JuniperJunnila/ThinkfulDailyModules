import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeClick }) {
  return (
    <div>
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
    <button onClick={handleFontSizeClick}>Font Size Up</button>
    </div>
  );
}

export default Header;
