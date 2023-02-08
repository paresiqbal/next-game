"use client";
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
      <h1>Worlde</h1>
      {solution && <div>Solution is {solution}</div>}
    </div>
  );
}
