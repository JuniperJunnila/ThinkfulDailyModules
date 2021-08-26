import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timeStamps, setTimeStamps] = useState([])
  return (
    <div>
      <ClickTimes setTimeStamps={setTimeStamps} timeStamps={timeStamps} />
      <TimestampsDisplay timestamps={timeStamps} />
    </div>
  )
}

export default App;
