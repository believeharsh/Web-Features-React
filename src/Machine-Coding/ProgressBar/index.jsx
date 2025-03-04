import React from "react";
import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animateProgress, setAnimateProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimateProgress(progress), 100);
  }, [progress]);
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            // width: ${progress}%,
            transform: `translateX(${animateProgress - 100}%`
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        ></div>
      </div>
    </>
  );
};

function App() {
  const Bar = [10, 29, 40, 70, 90];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {Bar.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}