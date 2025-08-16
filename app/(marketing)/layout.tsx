import { Navbar } from '@/components/layout/navbar';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-padding mx-auto max-w-6xl py-10">{children}</main>
    </div>
  );
}