import "./FilterSelect.css";

export default function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="filter-select">
      <label>{label}: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}