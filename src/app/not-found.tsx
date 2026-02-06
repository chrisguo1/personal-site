import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="prose">
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Return home</Link>
    </div>
  );
}
