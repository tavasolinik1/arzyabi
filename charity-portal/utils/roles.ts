import { ModuleId, Role } from '@/utils/types';

export type ModuleMeta = { id: ModuleId; label: string; icon: string };

export const navigationOrder: ModuleId[] = [
  'dashboard',
  'organizations',
  'evaluations',
  'reports',
  'documents',
  'donations',
  'field-visits',
  'messages',
  'settings',
];

export const moduleMeta: Record<ModuleId, ModuleMeta> = {
  'dashboard': { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  'organizations': { id: 'organizations', label: 'Organizations', icon: 'Building2' },
  'evaluations': { id: 'evaluations', label: 'Evaluations', icon: 'ClipboardCheck' },
  'reports': { id: 'reports', label: 'Reports', icon: 'FileText' },
  'documents': { id: 'documents', label: 'Documents', icon: 'Folder' },
  'donations': { id: 'donations', label: 'Donations', icon: 'Coins' },
  'field-visits': { id: 'field-visits', label: 'Field Visits', icon: 'MapPin' },
  'messages': { id: 'messages', label: 'Messages', icon: 'MessagesSquare' },
  'settings': { id: 'settings', label: 'Settings', icon: 'Settings' },
};

export const roleModules: Record<Role, ModuleId[]> = {
  admin: navigationOrder,
  evaluator: ['dashboard', 'organizations', 'evaluations', 'reports', 'field-visits', 'messages', 'settings'],
  ngo: ['dashboard', 'organizations', 'reports', 'documents', 'donations', 'messages', 'settings'],
};

export function getHomeForRole(role: Role) {
  return `/${role}` as const;
}

export function isModuleAllowed(role: Role, module: string): module is ModuleId {
  return roleModules[role].includes(module as ModuleId);
}

