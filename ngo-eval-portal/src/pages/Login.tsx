import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export function LoginPage() {
  const { login } = useUser()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const ok = await login(username, password)
    if (!ok) {
      setError('Invalid credentials')
      return
    }
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-right mb-4">
        <div className="text-xs text-slate-500">Ministry of Interior</div>
        <div className="text-sm font-semibold">Khorasan Razavi Governorate</div>
        <div className="text-sm">Sabzevar Special County Administration</div>
        <div className="text-lg font-bold mt-2">NGO Evaluation Portal</div>
      </div>
      <form onSubmit={onSubmit} className="card p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded px-3 py-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <div className="flex items-center justify-between">
          <Link to="/change-password" className="text-sm text-slate-600 hover:underline">Forgot / Change Password</Link>
          <button type="submit" className="bg-slate-900 text-white rounded px-4 py-2">Login</button>
        </div>
      </form>
      <div className="text-xs text-slate-500 mt-4">Demo users: ngo_user/password, admin_user/password, evaluator_user/password</div>
    </div>
  )
}

