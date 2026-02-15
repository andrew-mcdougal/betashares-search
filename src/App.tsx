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
    <div className={`
      beteshares-container
      w-screen h-screen
      bg-[var(--color-surface)]
      p-[2.5vmin_5vmin]
    `}>
      <Header />
      <SearchBar params={params} setParams={setParams} />

      <Filters params={params} setParams={setParams} />

      <Pagination
        page={params.page}
        pageSize={params.pageSize}
        total={total}
        onPageChange={handlePageChange}
      />

      <SearchResults
        results={results}
        loading={loading}
        error={error}
        total={total}
      />
    </div>
  );
}
