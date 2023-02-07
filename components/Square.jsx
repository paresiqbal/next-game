export default function Square({ value, chooseSquare }) {
  return (
    <div onClick={chooseSquare}>
      <div className="w-20 h-20 border border-white hover:bg-gray-700 cursor-pointer flex items-center justify-center text-4xl text-white">
        {value}
      </div>
    </div>
  );
}
