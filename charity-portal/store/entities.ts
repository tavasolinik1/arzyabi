import { create } from 'zustand';
import { Donation, Document, Evaluation, FieldVisit, Message, NGO, Report } from '@/utils/types';
import {
  sampleDonations,
  sampleDocuments,
  sampleEvaluations,
  sampleFieldVisits,
  sampleMessages,
  sampleNGOs,
  sampleReports,
} from '@/data/sample';

type EntitiesState = {
  ngos: NGO[];
  evaluations: Evaluation[];
  reports: Report[];
  documents: Document[];
  donations: Donation[];
  messages: Message[];
  fieldVisits: FieldVisit[];
};

type EntitiesActions = {
  addNGO: (ngo: NGO) => void;
};

export const useEntitiesStore = create<EntitiesState & EntitiesActions>((set) => ({
  ngos: sampleNGOs,
  evaluations: sampleEvaluations,
  reports: sampleReports,
  documents: sampleDocuments,
  donations: sampleDonations,
  messages: sampleMessages,
  fieldVisits: sampleFieldVisits,

  addNGO: (ngo) => set((state) => ({ ngos: [...state.ngos, ngo] })),
}));

