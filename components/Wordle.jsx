import useWordle from "@/hooks/useWordle";
import { useEffect, useState } from "react";
import Grid from "./Grid";
import "../app/index.css";
import Link from "next/link";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Worlde({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}

      <Link
        href={"/"}
        className="bg-cyan-500 py-2 px-4 rounded-lg text-2xl hover:bg-cyan-600"
      >
        Play Other Game
      </Link>
    </div>
  );
}
