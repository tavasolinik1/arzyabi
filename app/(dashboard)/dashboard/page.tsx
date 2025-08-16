import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function DashboardHomePage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400">You are logged in to the dashboard.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600 dark:text-gray-400">
            <li>Use the sidebar to navigate</li>
            <li>Try creating a task</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}