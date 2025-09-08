"use client";
import { useEntitiesStore } from '@/store/entities';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function MessagesList() {
  const messages = useEntitiesStore((s) => s.messages);
  return (
    <div className="space-y-3">
      {messages.map((m) => (
        <Card key={m.id}>
          <CardHeader>
            <CardTitle className="text-sm">From {m.fromUserId} → {m.toUserId}</CardTitle>
            <CardDescription>{m.sentAt}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{m.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

