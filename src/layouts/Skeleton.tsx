export function Skeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-20 bg-gray-200 rounded animate-pulse"
        />
      ))}
    </div>
  );
}
