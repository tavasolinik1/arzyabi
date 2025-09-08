import { MessagesList } from '@/components/modules/MessagesList';

export default function NGOMessagesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Messages</h2>
      <MessagesList />
    </div>
  );
}

