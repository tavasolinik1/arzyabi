"use client";

import { useThemeStore } from '@/stores/theme';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const theme = useThemeStore((s) => s.theme);
  const direction = useThemeStore((s) => s.direction);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const toggleDirection = useThemeStore((s) => s.toggleDirection);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Theme</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current: {theme}</div>
            </div>
            <Button variant="outline" onClick={toggleTheme}>Toggle Theme</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Direction</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Current: {direction}</div>
            </div>
            <Button variant="outline" onClick={toggleDirection}>Toggle RTL</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}