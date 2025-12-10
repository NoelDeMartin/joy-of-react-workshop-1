import React from "react";

function GuessInput({ disabled, onSubmit }) {
  const [value, setValue] = React.useState("");

  function submit(event) {
    event.preventDefault();

    onSubmit(value);
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={value}
        onChange={(event) =>
          setValue(event.target.value.toUpperCase().slice(0, 5))
        }
      />
    </form>
  );
}

export default GuessInput;
