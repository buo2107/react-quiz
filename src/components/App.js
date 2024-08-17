// Take this project even further:
//  1.Do different kind of stuff in StartScreen, ex: allowing user to only select a certain number of questions, or also allow user to filter for the difficulty of questions
//  2.Upload the high score of the quiz to our fake API as well, and then as we reload the application later, that could then re-fetch the high score and place it back in our state, so we don't lose that value
//  3.Store all the answer that user choose in some array, instead of just the current answer like we do right now, by doing that, user could then go back and forth in time and review their answer like that

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
