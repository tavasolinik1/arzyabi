import { FieldVisitsList } from '@/components/modules/FieldVisitsList';

export default function AdminFieldVisitsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Field Visits</h2>
      <FieldVisitsList />
    </div>
  );
}

