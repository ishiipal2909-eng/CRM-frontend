function FilterBar() {
  return (
    <>
      <select>
        <option>Status</option>
        <option>New</option>
        <option>Qualified</option>
      </select>

      <select style={{ marginLeft: "10px" }}>
        <option>Owner</option>
        <option>John</option>
        <option>Alex</option>
      </select>
    </>
  );
}

export default FilterBar;