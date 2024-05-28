import { useEffect, useRef } from "react";
import { getMatrixData } from "@/client/matrix-client";
import { useFullStackChallengeStore } from "@/store";

const DisplayCode = () => {
  let timer: any;
  const biasRef = useRef("");
  const code = useFullStackChallengeStore((state) => state.code);
  const updateCharacters = useFullStackChallengeStore(
    (state) => state.updateCharacters
  );
  const updateCode = useFullStackChallengeStore((state) => state.updateCode);

  const getData = async () => {
    const { matrixData, codeData } = await getMatrixData(biasRef.current);

    updateCharacters(matrixData.newCharacters);
    updateCode(codeData.newCode);
  };

  useEffect(() => {
    timer = setInterval(async () => {
      await getData();
    }, 2000);

    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center items-center gap-1">
        <div className="red-ball" />
        <p className="text-blue-950 font-bold">Live</p>
      </div>
      <p className="border-2 border-blue-950 text-xl uppercase py-4 px-8">
        Your Code: <span className="font-bold">{code}</span>
      </p>
    </div>
  );
};

export default DisplayCode;
