import type { EvaluationData } from '../context/EvaluationContext'

export function calculateGrade(data: EvaluationData): { score: number; grade: 'A' | 'B' | 'C' | 'D' } {
  const activityScore = Math.min(100, data.activities.projectsCompleted * 10 + data.activities.volunteers * 2)
  const financeScore = Math.min(100, Math.max(0, data.finance.revenue - data.finance.expenses) / 1000)
  const baseInfoScore = data.baseInfo.ngoName && data.baseInfo.nationalId && data.baseInfo.registrationNumber ? 100 : 50
  const weighted = activityScore * 0.4 + financeScore * 0.3 + baseInfoScore * 0.3
  const score = Math.round(weighted)
  const grade = score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 55 ? 'C' : 'D'
  return { score, grade }
}

export function nextEvaluationDate(from: Date) {
  const d = new Date(from)
  d.setMonth(d.getMonth() + 6)
  return d
}

export function improvementTips(grade: 'A' | 'B' | 'C' | 'D'): string[] {
  switch (grade) {
    case 'A':
      return ['Maintain documentation quality', 'Share best practices with peers']
    case 'B':
      return ['Increase volunteer engagement', 'Optimize expenses to improve margin']
    case 'C':
      return ['Complete missing documents', 'Focus on high-impact projects']
    case 'D':
      return ['Renew licenses immediately', 'Set up basic financial tracking']
  }
}

