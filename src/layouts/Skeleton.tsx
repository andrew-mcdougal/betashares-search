export function Skeleton({ count = 15 }: { count?: number }) {
  return (
    <div className="skeleton-container p-[5vmin]">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-line long" />
          <div className="skeleton-line medium" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  );
}
