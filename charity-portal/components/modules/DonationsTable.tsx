"use client";
import { useEntitiesStore } from '@/store/entities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function DonationsTable() {
  const donations = useEntitiesStore((s) => s.donations);
  const ngos = useEntitiesStore((s) => s.ngos);
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NGO</TableHead>
            <TableHead>Donor</TableHead>
            <TableHead>Amount (USD)</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donations.map((d) => {
            const ngo = ngos.find((n) => n.id === d.ngoId);
            return (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{ngo?.name ?? d.ngoId}</TableCell>
                <TableCell>{d.donor}</TableCell>
                <TableCell>{d.amountUsd.toLocaleString()}</TableCell>
                <TableCell>{d.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

