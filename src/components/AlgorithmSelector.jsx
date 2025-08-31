export function AlgorithmSelector({ algorithm, setAlgorithm, isSorting }) {
  const algorithms = ["bubble", "selection", "insertion", "merge", "quick", "counting"]; 
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {algorithms.map((alg) => (
        <button
            key={alg}
            onClick={() => setAlgorithm(alg)}
            className={`px-3 py-1 rounded font-semibold text-white shadow-lg transition-all duration-200 ease-in-out ${
                algorithm === alg ? "bg-blue-800 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
            }`}
            disabled={isSorting}
        >
          {alg.charAt(0).toUpperCase() + alg.slice(1)} Sort
        </button>
      ))}
    </div>
  );
}
