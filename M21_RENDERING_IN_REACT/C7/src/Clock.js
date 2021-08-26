import React from "react";

function Clock() {
  const date = new Date();
  const currentHour = date.getHours();
  if (currentHour < 12) {
    return <p>Good Morning!</p>;
  } else if (currentHour < 18) {
    return <p>Good Afternoon!</p>;
  } else {
    return <p>Good Evening!</p>;
  }
}

export default Clock;
