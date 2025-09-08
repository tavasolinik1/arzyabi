import { OrganizationsTable } from '@/components/modules/OrganizationsTable';

export default function AdminOrganizationsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Organizations</h2>
      <OrganizationsTable />
    </div>
  );
}

