import { SettingsPanel } from '@/components/modules/SettingsPanel';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Settings</h2>
      <SettingsPanel />
    </div>
  );
}

