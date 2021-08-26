import React from "react";

function ClickTimes({setTimeStamps, timeStamps}) {
    const time = Date.now()
    const clickHandler = () => {setTimeStamps([...timeStamps, time])}
    return <button onClick={clickHandler}>Click</button>
}

export default ClickTimes;
