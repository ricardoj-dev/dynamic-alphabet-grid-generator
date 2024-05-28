export async function getMatrixData(bias?: string) {
  const [responseMatrix, responseCode] = await Promise.all([
    fetch(
      `http://localhost:3001/api/exercise/generate-matrix${
        bias ? `?bias=${bias}` : ""
      }`
    ),
    fetch("http://localhost:3001/api/exercise/generate-code"),
  ]);

  if (!responseMatrix.ok || !responseCode.ok) {
    throw new Error("Error in fetching data");
  }

  const matrixData = await responseMatrix.json();
  const codeData = await responseCode.json();

  return { matrixData, codeData };
}
