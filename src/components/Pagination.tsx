interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  onPageChange,
  page,
  pageSize,
  total,
}: PaginationProps) {
  const totalPages = total ? Math.ceil(total / pageSize) : 0;

  const windowSize = 2; // Number of pages to show on either side of current page

  const start = Math.max(1, page - windowSize);
  const end = Math.min(totalPages, page + windowSize);

  const pages: (number | string)[] = [];

  // Always show first page
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }

  // Middle window
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Always show last page
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div>
      <p className={`text-sm mb-2`}> Page size: {pageSize}</p>
      <p className={`text-sm`}> Current page: {page}</p>
      <p className={`text-sm`}> Total pages: {totalPages}</p>
      {total > 0 && (
        <p className="text-sm">Total pages: {Math.ceil(total / pageSize)}</p>
      )}

      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={`ellipsis-${index}`}>...</span>
        ) : (
          <button key={p} onClick={() => onPageChange(p)} disabled={p === page}>
            {p}
          </button>
        ),
      )}
    </div>
  );
}
