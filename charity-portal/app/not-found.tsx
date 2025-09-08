import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
        <Link className="underline" href="/">Go home</Link>
      </div>
    </main>
  );
}

