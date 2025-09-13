import { useMemo, useState } from 'react'

type NGO = {
  id: string
  name: string
  status: 'Pending' | 'In Review' | 'Approved' | 'Rejected'
  expiredDocs: boolean
}

const mockNGOs: NGO[] = [
  { id: 'n1', name: 'Hope Foundation', status: 'Pending', expiredDocs: true },
  { id: 'n2', name: 'Green Iran', status: 'In Review', expiredDocs: false },
  { id: 'n3', name: 'Future Youth', status: 'Approved', expiredDocs: false },
]

export function AdminDashboard() {
  const [filter, setFilter] = useState<'All' | NGO['status']>('All')

  const list = useMemo(() => {
    return mockNGOs.filter((n) => (filter === 'All' ? true : n.status === filter))
  }, [filter])

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <div className="flex gap-2 items-center">
          <span className="text-sm text-slate-600">Filter:</span>
          {(['All', 'Pending', 'In Review', 'Approved', 'Rejected'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded border ${filter===f? 'bg-slate-900 text-white' : ''}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="card p-4">
        <div className="text-sm font-medium mb-3">NGO List</div>
        <div className="divide-y">
          {list.map((n) => (
            <div key={n.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{n.name}</div>
                <div className="text-xs text-slate-500">{n.status}</div>
              </div>
              {n.expiredDocs && <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800">Expired documents</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4">
        <div className="text-sm font-medium mb-2">Manage Grading Rules & Cycles</div>
        <p className="text-sm text-slate-600">Configure weights and six-month cycles (mock UI).</p>
      </div>
    </div>
  )
}

