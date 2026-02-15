import { Logo } from "../assets/Logo";
import { ThemeToggle } from "../components/ThemeToggle";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <div className={`bg-white flex items-center justify-between p-4 ${className}`}>
      <Logo />
      <ThemeToggle />
    </div>
  );
}
