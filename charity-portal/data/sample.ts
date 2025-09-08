import { Donation, Document, Evaluation, FieldVisit, Message, NGO, Report, Role, User } from '@/utils/types';

export const sampleUsers: User[] = [
  { id: 'u-admin-1', name: 'Alice Admin', email: 'admin@charity.org', password: 'admin123', role: 'admin' },
  { id: 'u-eval-1', name: 'Evan Evaluator', email: 'evaluator@charity.org', password: 'evaluator123', role: 'evaluator' },
  { id: 'u-ngo-1', name: 'Nina NGO', email: 'ngo@charity.org', password: 'ngo123', role: 'ngo' },
];

export const sampleNGOs: NGO[] = [
  { id: 'ngo-1', name: 'Hope Foundation', country: 'Kenya', status: 'Active', sectors: ['Education', 'Health'] },
  { id: 'ngo-2', name: 'Green Earth', country: 'India', status: 'Pending', sectors: ['Environment'] },
  { id: 'ngo-3', name: 'WaterWorks', country: 'Nepal', status: 'Active', sectors: ['WASH'] },
];

export const sampleEvaluations: Evaluation[] = [
  { id: 'eval-1', ngoId: 'ngo-1', evaluatorId: 'u-eval-1', score: 86, status: 'In Progress', date: '2025-08-10' },
  { id: 'eval-2', ngoId: 'ngo-2', evaluatorId: 'u-eval-1', score: 72, status: 'Pending', date: '2025-08-12' },
  { id: 'eval-3', ngoId: 'ngo-3', evaluatorId: 'u-eval-1', score: 91, status: 'Completed', date: '2025-07-21' },
];

export const sampleReports: Report[] = [
  { id: 'rep-1', ngoId: 'ngo-1', title: 'Q2 Impact Report', authorId: 'u-admin-1', date: '2025-08-15', status: 'Published' },
  { id: 'rep-2', ngoId: 'ngo-2', title: 'Environmental Activities Summary', authorId: 'u-ngo-1', date: '2025-07-30', status: 'Draft' },
];

export const sampleDocuments: Document[] = [
  { id: 'doc-1', ngoId: 'ngo-1', title: 'Budget 2025', type: 'Spreadsheet', uploadedAt: '2025-06-01' },
  { id: 'doc-2', ngoId: 'ngo-2', title: 'Impact Photos', type: 'Image', uploadedAt: '2025-05-11' },
];

export const sampleDonations: Donation[] = [
  { id: 'don-1', ngoId: 'ngo-1', amountUsd: 15000, date: '2025-03-10', donor: 'Acme Corp' },
  { id: 'don-2', ngoId: 'ngo-2', amountUsd: 5000, date: '2025-04-22', donor: 'Global Fund' },
];

export const sampleFieldVisits: FieldVisit[] = [
  { id: 'fv-1', ngoId: 'ngo-1', evaluatorId: 'u-eval-1', date: '2025-06-15', notes: 'Site clean and active.' },
  { id: 'fv-2', ngoId: 'ngo-2', evaluatorId: 'u-eval-1', date: '2025-07-09', notes: 'Awaiting permits.' },
];

export const sampleMessages: Message[] = [
  { id: 'msg-1', fromUserId: 'u-admin-1', toUserId: 'u-ngo-1', body: 'Please upload Q3 documents.', sentAt: '2025-08-01' },
  { id: 'msg-2', fromUserId: 'u-ngo-1', toUserId: 'u-admin-1', body: 'Working on it, thanks!', sentAt: '2025-08-02' },
];

