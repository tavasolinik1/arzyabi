"use client";
import { useEntitiesStore } from '@/store/entities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function EvaluationsTable() {
  const evaluations = useEntitiesStore((s) => s.evaluations);
  const ngos = useEntitiesStore((s) => s.ngos);
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NGO</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {evaluations.map((e) => {
            const ngo = ngos.find((n) => n.id === e.ngoId);
            return (
              <TableRow key={e.id}>
                <TableCell className="font-medium">{ngo?.name ?? e.ngoId}</TableCell>
                <TableCell>{e.score}</TableCell>
                <TableCell>{e.status}</TableCell>
                <TableCell>{e.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

