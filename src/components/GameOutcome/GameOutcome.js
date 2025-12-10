function GameOutcome({ status, guesses, answer }) {
  return (
    <div className={`${status === "won" ? "happy" : "sad"} banner`}>
      {status === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOutcome;
