import { useState } from 'react';

function SearchBar(props) {
  const [nameSearch, setNameSearch] = useState('');

    const handleSelect = (e) => {
      setNameSearch(e.target.value);
      props.SearchBar1(e.target.value);
    }

  return (
    <div>
      <label>Search</label>
      <input value={nameSearch} type="text" onChange={handleSelect} />
    </div>
  );
}

export default SearchBar;
