function NextButton({ dispatch, answer }) {
  // If user doesn't have answer, this component will not display
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
