import { Logo } from "../assets/Logo";
import { ThemeToggle } from "../components/ThemeToggle";

export function Header() {
  return (
    <div className="bg-white flex items-center justify-between p-4">
      <Logo />
      <ThemeToggle />
    </div>
  );
}
