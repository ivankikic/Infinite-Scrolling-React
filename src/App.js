import { useState } from "react";
import useBookSearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  return (
    <>
      <input type="text" value={query} onChange={handleSearch} />
      {books && books.map((book, index) => {
        return <div key={index}>{book}</div>
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  );
}

export default App;
