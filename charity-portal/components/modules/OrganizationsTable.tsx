"use client";
import { useEntitiesStore } from '@/store/entities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export function OrganizationsTable() {
  const ngos = useEntitiesStore((s) => s.ngos);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sectors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ngos.map((n) => (
            <TableRow key={n.id}>
              <TableCell className="font-medium">{n.name}</TableCell>
              <TableCell>{n.country}</TableCell>
              <TableCell>
                <Badge variant={n.status === 'Active' ? 'success' as any : n.status === 'Pending' ? 'secondary' : 'destructive'}>
                  {n.status}
                </Badge>
              </TableCell>
              <TableCell>{n.sectors.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

