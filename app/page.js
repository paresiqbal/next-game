import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Next 13 Game's</h1>
      <div className="flex flex-col gap-4 p-24 text-white text-2xl">
        <div className=" bg-gray-800 shadow-lg rounded-lg text-center py-10">
          <h1 className="pb-2">Tic Tac Toe Game</h1>
          <Link
            href={"/TicTacToe"}
            className="py-1 px-6 bg-cyan-500 rounded-lg"
          >
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}
