import { useFullStackChallengeStore } from "@/store";

const Grid = () => {
  const characters = useFullStackChallengeStore((state) => state.characters);

  return (
    <div className="grid grid-cols-10 gap-0">
      {characters?.length > 0 &&
        characters.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((character, colIndex) => (
              <div
                key={colIndex}
                className="flex justify-center items-center border-2 border-blue-950 h-14"
              >
                {character}
              </div>
            ))}
          </div>
        ))}

      {characters?.length === 0 &&
        Array.from({ length: 100 }, (_, i) => i + 1).map((_, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-2 border-blue-950 h-14"
          ></div>
        ))}
    </div>
  );
};

export default Grid;
