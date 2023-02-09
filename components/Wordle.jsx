import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./Grid";
import Row from "./Row";

export default function Worlde({ solution }) {
  const { currentGuess, handleKeyup, isCorrect, turn, guesses } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>solution - {solution}</div>
      <h1>current guess - {currentGuess}</h1>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
