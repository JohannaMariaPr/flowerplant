import "./SearchField.css";

export default function SearchField({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className="search-field"
      placeholder="Search plants by name or species..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}