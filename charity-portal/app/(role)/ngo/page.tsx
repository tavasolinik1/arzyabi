import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEntitiesStore } from '@/store/entities';

export default function NGODashboardPage() {
  const reports = useEntitiesStore((s) => s.reports);
  const documents = useEntitiesStore((s) => s.documents);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{reports.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{documents.length}</div>
        </CardContent>
      </Card>
    </div>
  );
}

