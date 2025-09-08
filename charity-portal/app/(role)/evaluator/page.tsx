import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEntitiesStore } from '@/store/entities';

export default function EvaluatorDashboardPage() {
  const myEvals = useEntitiesStore((s) => s.evaluations.filter((e) => e.status !== 'Completed'));
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Pending & In-Progress Evaluations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{myEvals.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Field Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">Check the Field Visits module</div>
        </CardContent>
      </Card>
    </div>
  );
}

