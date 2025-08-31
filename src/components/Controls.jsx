export function Controls({ isSorting, generateArray, handleSort }) {
  return (
    <div className="flex justify-center gap-4 mb-2">
      <button
        onClick={generateArray}
        disabled={isSorting}
        className={`px-4 py-2 rounded-lg font-semibold text-white shadow-lg transition-all duration-200 ease-in-out ${
          isSorting ? "bg-gray-700 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        Generate New Array
      </button>

      <button
        onClick={handleSort}
        disabled={isSorting}
        className={`px-4 py-2 rounded-lg font-semibold text-white shadow-lg transition-all duration-200 ease-in-out ${
          isSorting ? "bg-gray-700 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        Sort Array
      </button>
    </div>
  );
}
