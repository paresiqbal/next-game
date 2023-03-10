"use client";
import Worlde from "@/components/Wordle";
import { useEffect, useState } from "react";

export default function WordleGame() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        //Generate random number 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white text-center py-2 bg-teal-500 skew-y-2">
        Worlde
      </h1>
      {solution && <Worlde solution={solution} />}
    </div>
  );
}
