export default function Footer() {
  return (
    <footer
      className="mt-16 pt-8"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
        &copy; {new Date().getFullYear()} Chris Guo
      </p>
    </footer>
  );
}
