export default function Row({ guess }) {
  if (guess) {
    return (
      <div className="py-1 flex justify-center gap-1">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="py-1 flex justify-center gap-1">
      <div className="w-20 h-20 bg-gray-200"></div>
      <div className="w-20 h-20 bg-gray-200"></div>
      <div className="w-20 h-20 bg-gray-200"></div>
      <div className="w-20 h-20 bg-gray-200"></div>
      <div className="w-20 h-20 bg-gray-200"></div>
    </div>
  );
}
