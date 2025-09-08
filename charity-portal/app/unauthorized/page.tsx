export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Unauthorized</h1>
        <p className="text-muted-foreground">You do not have access to this page.</p>
      </div>
    </main>
  );
}

