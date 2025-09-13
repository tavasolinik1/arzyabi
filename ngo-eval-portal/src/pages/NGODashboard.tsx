import { useMemo } from 'react'
import { useEvaluation } from '../context/EvaluationContext'
import { improvementTips } from '../services/evaluation'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const mockHistory = [
  { period: '2023-H1', score: 62 },
  { period: '2023-H2', score: 70 },
  { period: '2024-H1', score: 78 },
  { period: '2024-H2', score: 83 },
]

export function NGODashboard() {
  const { grade, score, nextCycle } = useEvaluation()
  const tips = improvementTips(grade)
  const timeLeft = useMemo(() => {
    const diff = nextCycle.getTime() - Date.now()
    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
    return `${days} days` 
  }, [nextCycle])

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">
          <div className="text-sm text-slate-500">Current Grade</div>
          <div className="text-4xl font-bold mt-1">{grade}</div>
          <div className="text-xs text-slate-500">Score: {score}</div>
        </div>
        <div className="card p-4 md:col-span-2">
          <div className="text-sm text-slate-500 mb-2">Evaluation History</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockHistory} margin={{ left: 8, right: 8 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="period" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#059669" fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">
          <div className="text-sm text-slate-500">Next Evaluation</div>
          <div className="text-lg">In {timeLeft}</div>
          <div className="text-xs text-slate-500">Scheduled: {nextCycle.toLocaleDateString()}</div>
        </div>
        <div className="card p-4 md:col-span-2">
          <div className="text-sm text-slate-500 mb-2">Suggestions</div>
          <ul className="list-disc pl-5 space-y-1">
            {tips.map((t) => (
              <li key={t} className="text-sm">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

