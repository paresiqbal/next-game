import Link from "next/link";
import { BsCircle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-10 bg-gray-900 h-full">
      <h1 className="text-4xl font-bold text-center text-white py-10">
        Next 13 Game's
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-white text-2xl">
        <div className="flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-700 rounded-md py-5 w-80 h-52">
          <h1 className="font-bold">Tic Tac Toe Game</h1>
          <h2 className="flex gap-4 justify-center items-center py-5 text-3xl">
            <BsCircle className="text-red-500" />
            <FaTimes className="text-cyan-500" />
          </h2>
          <Link
            href={"/TicTacToe"}
            className="py-1 px-6 bg-cyan-600 hover:bg-cyan-500 rounded-lg cursor-pointer "
          >
            Play game
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-700 rounded-md py-5 w-80 h-52">
          <h1 className="font-bold">Rock Paper Scissors Game</h1>
          <h2 className="flex gap-4 justify-center items-center py-5 text-3xl">
            <img src="/rockpaperscissors.png" className="w-14" />
          </h2>
          <Link
            href={"/RockPaperScissors"}
            className="py-1 px-6 bg-purple-600 hover:bg-purple-500 rounded-lg cursor-pointer "
          >
            Play game
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-700 rounded-md py-5 w-80 h-52">
          <h1 className="font-bold">Wordle Game</h1>
          <h2 className="flex gap-4 justify-center items-center py-5 text-3xl">
            <img src="/wordle.png" className="w-44" />
          </h2>
          <Link
            href={"/WordleGame"}
            className="py-1 px-6 bg-teal-600 hover:bg-teal-500 rounded-lg cursor-pointer "
          >
            Play game
          </Link>
        </div>
      </div>
    </div>
  );
}
