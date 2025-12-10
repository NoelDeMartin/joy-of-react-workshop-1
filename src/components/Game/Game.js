import { useState } from "react";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import GameOutcome from "../GameOutcome";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const status = guesses.includes(answer)
    ? "won"
    : guesses.length === NUM_OF_GUESSES_ALLOWED
    ? "lost"
    : "ongoing";

  return (
    <>
      {status !== "ongoing" && (
        <GameOutcome status={status} guesses={guesses} answer={answer} />
      )}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        onSubmit={(guess) => setGuesses(guesses.concat([guess]))}
        disabled={status !== "ongoing"}
      />
    </>
  );
}

export default Game;
