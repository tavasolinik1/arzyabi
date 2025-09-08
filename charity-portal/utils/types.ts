export type Role = 'admin' | 'evaluator' | 'ngo';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: Role;
}

export interface NGO {
  id: string;
  name: string;
  country: string;
  status: 'Active' | 'Pending' | 'Suspended';
  sectors: string[];
}

export interface Evaluation {
  id: string;
  ngoId: string;
  evaluatorId: string;
  score: number;
  status: 'Pending' | 'In Progress' | 'Completed';
  date: string;
}

export interface Report {
  id: string;
  ngoId: string;
  title: string;
  authorId: string;
  date: string;
  status: 'Draft' | 'Published';
}

export interface Document {
  id: string;
  ngoId: string;
  title: string;
  type: 'PDF' | 'Image' | 'Spreadsheet' | 'Other';
  uploadedAt: string;
}

export interface Donation {
  id: string;
  ngoId: string;
  amountUsd: number;
  date: string;
  donor: string;
}

export interface FieldVisit {
  id: string;
  ngoId: string;
  evaluatorId: string;
  date: string;
  notes: string;
}

export interface Message {
  id: string;
  fromUserId: string;
  toUserId: string;
  body: string;
  sentAt: string;
}

export type ModuleId =
  | 'dashboard'
  | 'organizations'
  | 'evaluations'
  | 'reports'
  | 'documents'
  | 'donations'
  | 'field-visits'
  | 'messages'
  | 'settings';

