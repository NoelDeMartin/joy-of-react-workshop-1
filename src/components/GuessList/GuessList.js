import React from "react";

function GuessList({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ id, label }) => (
        <p key={id} class="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
