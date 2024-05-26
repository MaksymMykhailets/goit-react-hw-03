const SearchBox = ({ filter, setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <p>Find contacts by Name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </>
  );
};

export default SearchBox;
