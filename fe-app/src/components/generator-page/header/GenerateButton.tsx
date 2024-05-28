import { useRef } from "react";
import { getMatrixData } from "@/client/matrix-client";
import { useFullStackChallengeStore } from "@/store";

const GenerateButton = () => {
  const biasRef = useRef("");
  const bias = useFullStackChallengeStore((state) => state.bias);
  const updateCharacters = useFullStackChallengeStore(
    (state) => state.updateCharacters
  );
  const updateCode = useFullStackChallengeStore((state) => state.updateCode);

  const getData = async () => {
    const { matrixData, codeData } = await getMatrixData(biasRef.current);

    updateCharacters(matrixData.newCharacters);
    updateCode(codeData.newCode);
  };

  const handleClick = async () => {
    try {
      biasRef.current = bias;
      await getData();
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };

  return (
    <button
      className="rounded border-2 border-solid border-blue-950 py-2 px-6 h-12 uppercase text-white text-xl bg-blue-950"
      onClick={handleClick}
    >
      Generate 2D Grid
    </button>
  );
};

export default GenerateButton;
