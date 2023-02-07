"use client";
import Square from "@/components/Square";
import { useEffect, useState } from "react";
import { Pattern } from "@/components/Pattern";
import Link from "next/link";

export default function TicTacToe() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfDraw();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Nice You Win: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, idx) => {
        if (idx == square && value == "") {
          return player;
        }

        return value;
      })
    );
  };

  const checkWin = () => {
    Pattern.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;

      currentPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Hei" });
      }
    });
  };
  const checkIfDraw = () => {
    let filled = true;

    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "To bad it's Draw", state: "To bad it's Draw" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  return (
    <div className="p-10 bg-gray-800 h-screen">
      <h1 className="text-2xl font-bold text-white text-center py-2 bg-cyan-500 skew-y-2">
        Tic Tac Toe
      </h1>
      <div className="pt-20 pb-10 items-center flex flex-col">
        <div className="flex flex-row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="flex flex-row">
          <Square
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="flex flex-row">
          <Square
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
      <h1 className="text-3xl text-center text-white pb-4">
        Player {player} turn{" "}
      </h1>
      <div className="flex justify-center items-center gap-5 text-white">
        <Link
          href={"/"}
          onClick={restartGame}
          className="bg-cyan-500 py-2 px-4 rounded-lg text-2xl hover:bg-cyan-600"
        >
          Play Other Game
        </Link>
        <button
          onClick={restartGame}
          className="bg-cyan-500 py-2 px-4 rounded-lg text-2xl hover:bg-cyan-600"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
