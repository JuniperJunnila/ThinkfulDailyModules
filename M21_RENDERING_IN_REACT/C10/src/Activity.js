import React from "react";
import "./Activity.css";

function Activity({time, description}) {
  if(!time || !description) return
  return <h4><span>{time}</span> <span>{description}</span></h4>
}

export default Activity;
