interface IntroProps {
  className?: string;
  total: number;
}

export function Intro({ className, total }: IntroProps) {
  // Determine wording for fund(s)
  const fundText =
    total === 0 ? "no ETFs" : total === 1 ? "1 ETF" : `${total} ETFs`;

  return (
    <div className={`p-[3vmin_5vmin] bg-[white] ${className}`}>
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
