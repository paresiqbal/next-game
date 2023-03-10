import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn, guess }) {
  return (
    <div className="py-10">
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
