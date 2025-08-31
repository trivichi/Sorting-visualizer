export function SliderControl({ label, value, min, max, onChange, isSorting, unit = "" }) {
  return (
    <div className="flex justify-center items-center  gap-6 mb-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg">
      <label className="text-[#E5E7EB] font-semibold">{label}:</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-64"
        disabled={isSorting}
      />
      <span className="text-[#E5E7EB] font-semibold">{value}{unit}</span>
    </div>
  );
}
