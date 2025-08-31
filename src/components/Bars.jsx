export function Bars({ array, compared, isSorted, barCount }) {
  return (
    <div className="flex items-end justify-center gap-[2px] w-full h-full">
      {array.map((value, idx) => (
        <div
          key={idx}
          className={`rounded-t transition-all duration-200 ease-in-out transform origin-bottom hover:scale-y-105 ${
            isSorted
              ? "bg-teal-500 hover:bg-teal-400"
              : compared.includes(idx)
                ? "bg-amber-400 hover:bg-amber-300"
                : "bg-blue-800 hover:bg-blue-700"
          }`}
          style={{ 
            height: `${value * 2}px`, 
            width: `calc((100% - ${(barCount - 1) * 2}px) / ${barCount})` // dynamic width based on bar count
          }}
        />
      ))}
    </div>
  );
}
