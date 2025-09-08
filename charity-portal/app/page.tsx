import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold">Charity Evaluation Portal</h1>
        <p className="text-muted-foreground">A role-based dashboard for Admins, Evaluators, and NGOs.</p>
        <div className="flex items-center justify-center gap-4">
          <Link className="px-4 py-2 rounded-md bg-primary text-primary-foreground" href="/login">Login</Link>
          <Link className="px-4 py-2 rounded-md border" href="/register">Register</Link>
        </div>
      </div>
    </main>
  );
}

