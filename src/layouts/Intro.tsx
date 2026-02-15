interface IntroProps {
  className?: string;
  total: number;
}

export function Intro({ className, total }: IntroProps) {
  // Determine wording for fund(s)
  const fundText =
    total === 0 ? "no funds" : total === 1 ? "1 fund" : `${total} funds`;

  return (
    <div className={`p-[3vmin_0] text-center ${className}`}>
      <p className="text-[1.2rem] text-[var(--color-text-secondary)]">
        Welcome! Refine your search below to find ETFs that match your
        interests.
      </p>
      <p className="text-[1.2rem] text-[var(--color-text-secondary)]">
        Currently showing {fundText}.
      </p>
    </div>
  );
}
