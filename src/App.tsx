import { SearchBar } from "./components/SearchBar/SearchBar";
import { useSearch } from "./hooks/useSearch";
import { SearchResults } from "./components/SearchResults";
import { Pagination } from "./components/Pagination/Pagination";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./layouts/Header";
import { Intro } from "./layouts/Intro";

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
      <Intro total={total} className="intro" />

      <Filters className="filters" params={params} setParams={setParams} />

      <SearchResults
        className="results p-[5vmin]"
        results={results}
        loading={loading}
        error={error}
        total={total}
      />

      <Pagination
        page={params.page}
        pageSize={params.pageSize}
        total={total}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
