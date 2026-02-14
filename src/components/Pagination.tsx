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
  const pages = Array.from({ length: totalPages}, (_, i) => i + 1);

  return (
    <div>
      <p className={`text-sm mb-2`}> Page size: {pageSize}</p>
      <p className={`text-sm`}> Current page: {page}</p>
      <p className={`text-sm`}> Total pages: {totalPages}</p>
      {total > 0 && (
        <p className="text-sm">Total pages: {Math.ceil(total / pageSize)}</p>
      )}

      <button 
        onClick={() => onPageChange(page - 1)} 
        disabled={page === 1}
      >
        Previous
      </button>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          disabled={p === page}
          >{p}</button>
          
      ))}
    </div>
  );
}
