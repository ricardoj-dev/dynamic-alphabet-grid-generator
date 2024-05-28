import { ChangeEvent, useState } from "react";
import { useFullStackChallengeStore } from "@/store";

const Character = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  const updateBias = useFullStackChallengeStore((state) => state.updateBias);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (isBlocked) {
      return;
    }

    const newBias = event.target.value;

    if (newBias && !/^[a-z]$/.test(newBias)) {
      return;
    }

    setIsBlocked(true);
    updateBias(newBias);

    setTimeout(() => {
      setIsBlocked(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="text-xl text-blue-950">Character</p>
      <input
        className="mt-2 p-2 border-2 border-blue-950 rounded-lg"
        placeholder="Character"
        maxLength={1}
        onChange={handleChange}
        disabled={isBlocked}
      />
    </div>
  );
};

export default Character;
