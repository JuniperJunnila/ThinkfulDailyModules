import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12)
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const increaseFont = () => setFontSize(fontSize + 2)
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeClick={increaseFont} />
      <Content loggedIn={loggedIn} fontSize={fontSize} />
    </div>
  );
}

export default App;
