import { DonationsTable } from '@/components/modules/DonationsTable';

export default function AdminDonationsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Donations</h2>
      <DonationsTable />
    </div>
  );
}

