"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function fetchTasks() {
    setLoading(true);
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data.tasks ?? []);
    setLoading(false);
  }

  async function createTask() {
    if (!title || !description) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      setTitle('');
      setDescription('');
      fetchTasks();
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </CardContent>
        <CardFooter>
          <Button onClick={createTask}>Add</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {loading ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">No tasks yet.</p>
        ) : (
          tasks.map((t) => (
            <Card key={t.id}>
              <CardHeader>
                <CardTitle>{t.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
                <p className="mt-2 text-xs text-gray-500">Status: {t.status}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}