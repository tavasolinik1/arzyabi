"use client";
import { useEntitiesStore } from '@/store/entities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function DocumentsList() {
  const docs = useEntitiesStore((s) => s.documents);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Uploaded</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {docs.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-medium">{d.title}</TableCell>
              <TableCell>{d.type}</TableCell>
              <TableCell>{d.uploadedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

