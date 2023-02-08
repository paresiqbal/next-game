"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="p-10 h-screen">
      <h1 className="text-2xl font-bold text-white text-center py-2 bg-purple-500 skew-y-2">
        Rock-Paper-Scissors
      </h1>
      <div className="py-14 flex flex-col justify-center items-center text-gray-800 ">
        <div className="flex gap-5 p-6 border-4 border-purple-500 hover:border-purple-700  font-semibold text-3xl">
          <h1>User Points: {userPoints}</h1>
          <h1>Computer Points: {computerPoints}</h1>
        </div>

        <div className="flex gap-40 py-10">
          <div className="text-center">
            <img className="w-40" src={`/${userChoice}.png`}></img>
            <h1 className="text-2xl font-semibold pt-5">Player</h1>
          </div>
          <div className="text-center">
            <img className="w-40" src={`/${computerChoice}.png`}></img>
            <h1 className="text-2xl font-semibold pt-5">Computer</h1>
          </div>
        </div>

        <div className="px-5">
          <h1 className="text-center text-xl font-medium pb-2">
            Choose Your Move
          </h1>
          {choices.map((choice, index) => (
            <button
              className="py-2 px-5 bg-gray-800 text-white text-2xl hover:underline  decoration-purple-600"
              key={index}
              onClick={() => handleClick(choice)}
              disabled={gameOver}
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="text-xl font-medium pt-2">
          <h1>Turn Result: {turnResult}</h1>
          <h1>Final Result: {result}</h1>
        </div>

        <div className="flex gap-4 py-4 text-white">
          {gameOver && (
            <button
              className="bg-purple-500 py-2 px-4 rounded-md text-2xl font-medium hover:bg-purple-600"
              onClick={() => reset()}
            >
              Restart Game? Or
            </button>
          )}
          <Link
            href={"/"}
            className="bg-purple-500 py-2 px-4 rounded-md text-2xl font-medium hover:bg-purple-600"
          >
            Play Other Game
          </Link>
        </div>
      </div>
    </div>
  );
}
