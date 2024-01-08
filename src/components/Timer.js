import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // We want to initialize the timer as Timer component mounts
  useEffect(
    function () {
      // Ever single setInterval() will return a unique id
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      // Cleanup Function : use the id to cancel the timer
      // If not do this, each time we restarted our quiz, a new timer got added.(Then we have many timer running at the same time *o*)
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;

// Since our state lives in the global App component,
//  as state re-renders, so will re-render all of child components every single seconds in this case

// This could become a preformance issue in a really large application with like a thousand components,
// so in that case, you probably shouldn't have your most parent component re-rendering every single seconds, but in this case, this is really not a problem.
