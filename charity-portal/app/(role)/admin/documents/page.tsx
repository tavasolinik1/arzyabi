import { DocumentsList } from '@/components/modules/DocumentsList';

export default function AdminDocumentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Documents</h2>
      <DocumentsList />
    </div>
  );
}

