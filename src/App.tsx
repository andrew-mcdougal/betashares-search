import { SearchBar } from "./components/SearchBar";
import { useSearch } from "./hooks/useSearch";
import { SearchResults } from "./components/SearchResults";
import { Pagination } from "./components/Pagination";
import { Filters } from "./components/Filters";
import { Header } from "./layouts/Header";

export default function App() {
  const { params, setParams, results, loading, error, total } = useSearch();

  // handle onPageChange
  const handlePageChange = (page: number) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  return (
    <div className="beteshares-container bg-[var(--color-surface)]">
      <Header className="header" />
      <SearchBar className="search" params={params} setParams={setParams} />
      <Filters className="filters" params={params} setParams={setParams} />
      <Pagination
        className="pagination"
        page={params.page}
        pageSize={params.pageSize}
        total={total}
        onPageChange={handlePageChange}
      />
      <SearchResults
        className="results"
        results={results}
        loading={loading}
        error={error}
        total={total}
      />
    </div>
  );
}
