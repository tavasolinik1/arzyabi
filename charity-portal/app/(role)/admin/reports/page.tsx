import { ReportsList } from '@/components/modules/ReportsList';

export default function AdminReportsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Reports</h2>
      <ReportsList />
    </div>
  );
}

