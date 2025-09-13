import React, { createContext, useContext, useMemo, useState } from 'react'
import { calculateGrade, nextEvaluationDate } from '../services/evaluation'

export type EvaluationData = {
  baseInfo: {
    ngoName: string
    nationalId: string
    registrationNumber: string
    licenseRenewal?: File | null
    meetingMinutes?: File | null
    memberList?: File | null
  }
  activities: {
    volunteers: number
    projectsCompleted: number
    beneficiaries: number
  }
  finance: {
    revenue: number
    expenses: number
    reserves: number
  }
}

type EvaluationContextValue = {
  data: EvaluationData
  setData: React.Dispatch<React.SetStateAction<EvaluationData>>
  score: number
  grade: 'A' | 'B' | 'C' | 'D'
  nextCycle: Date
}

const defaultData: EvaluationData = {
  baseInfo: { ngoName: '', nationalId: '', registrationNumber: '' },
  activities: { volunteers: 0, projectsCompleted: 0, beneficiaries: 0 },
  finance: { revenue: 0, expenses: 0, reserves: 0 },
}

const EvaluationContext = createContext<EvaluationContextValue | undefined>(undefined)

export function EvaluationProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<EvaluationData>(defaultData)

  const { score, grade } = useMemo(() => calculateGrade(data), [data])
  const nextCycle = useMemo(() => nextEvaluationDate(new Date()), [])

  const value = useMemo(() => ({ data, setData, score, grade, nextCycle }), [data, score, grade, nextCycle])
  return <EvaluationContext.Provider value={value}>{children}</EvaluationContext.Provider>
}

export function useEvaluation() {
  const ctx = useContext(EvaluationContext)
  if (!ctx) throw new Error('useEvaluation must be used within EvaluationProvider')
  return ctx
}

