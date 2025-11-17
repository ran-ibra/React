
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary" >Search</button>
    </div>
  );
}
