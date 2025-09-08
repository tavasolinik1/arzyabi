"use client";
import { useEntitiesStore } from '@/store/entities';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ReportsList() {
  const reports = useEntitiesStore((s) => s.reports);
  const ngos = useEntitiesStore((s) => s.ngos);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reports.map((r) => {
        const ngo = ngos.find((n) => n.id === r.ngoId);
        return (
          <Card key={r.id}>
            <CardHeader>
              <CardTitle className="text-base">{r.title}</CardTitle>
              <CardDescription>{ngo?.name ?? r.ngoId} • {r.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">Status: {r.status}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

