"use client";
import { useEntitiesStore } from '@/store/entities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function FieldVisitsList() {
  const visits = useEntitiesStore((s) => s.fieldVisits);
  const ngos = useEntitiesStore((s) => s.ngos);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NGO</TableHead>
            <TableHead>Evaluator</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visits.map((v) => {
            const ngo = ngos.find((n) => n.id === v.ngoId);
            return (
              <TableRow key={v.id}>
                <TableCell className="font-medium">{ngo?.name ?? v.ngoId}</TableCell>
                <TableCell>{v.evaluatorId}</TableCell>
                <TableCell>{v.date}</TableCell>
                <TableCell>{v.notes}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

