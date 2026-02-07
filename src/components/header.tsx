import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-12">
      <Link
        href="/"
        className="text-xl font-bold no-underline hover:no-underline"
        style={{ color: 'var(--color-text)' }}
      >
        Chris Guo
      </Link>
      <nav aria-label="Main navigation" className="flex items-center gap-6">
        <Link
          href="/#writing"
          className="text-sm no-underline hover:underline"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Writing
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
