import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";

export default function Worlde({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <h1>current guess - {currentGuess}</h1>
    </div>
  );
}
