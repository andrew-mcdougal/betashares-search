import { SearchBar } from "./components/SearchBar";
import { useSearch } from "./hooks/useSearch";
import { SearchResults } from "./components/SearchResults";

export default function App() {
  const { params, setParams, results, loading, error, total } = useSearch();

  return (
    <div>
      <h1>Betashares Search</h1>
      <SearchBar params={params} setParams={setParams} />

      <SearchResults
        results={results}
        loading={loading}
        error={error}
        total={total}
      />
    </div>
  );
}
