import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEntitiesStore } from '@/store/entities';

export default function AdminDashboardPage() {
  const ngos = useEntitiesStore((s) => s.ngos);
  const evaluations = useEntitiesStore((s) => s.evaluations);
  const reports = useEntitiesStore((s) => s.reports);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>NGOs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{ngos.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Evaluations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{evaluations.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{reports.length}</div>
        </CardContent>
      </Card>
    </div>
  );
}

