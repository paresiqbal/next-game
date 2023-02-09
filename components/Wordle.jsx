import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./Grid";
import "../app/index.css";
import Link from "next/link";

export default function Worlde({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Link
        href={"/"}
        className="bg-cyan-500 py-2 px-4 rounded-lg text-2xl hover:bg-cyan-600"
      >
        Play Other Game
      </Link>
    </div>
  );
}
