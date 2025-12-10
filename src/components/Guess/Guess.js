import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  const checked = value && checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className={`cell ${checked?.[index].status ?? ""}`}>
          {checked?.[index].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
