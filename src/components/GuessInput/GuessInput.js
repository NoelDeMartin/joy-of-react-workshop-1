import React from "react";

function GuessInput() {
  const [value, setValue] = React.useState("");

  function submit(event) {
    event.preventDefault();

    console.log("submitted", value);

    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={value}
        onChange={(event) =>
          setValue(event.target.value.toUpperCase().slice(0, 5))
        }
      />
    </form>
  );
}

export default GuessInput;
