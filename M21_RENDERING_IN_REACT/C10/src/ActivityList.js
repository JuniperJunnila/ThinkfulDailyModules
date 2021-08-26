import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({activities}) {
  return (
    <React.Fragment>
      {activities.map((activity, index) => {
        const timeDesc = Activity(activity)
        return (
          <li key={index}>{timeDesc}</li>
        )
      })}
    </React.Fragment>
  )
}

export default ActivityList;
