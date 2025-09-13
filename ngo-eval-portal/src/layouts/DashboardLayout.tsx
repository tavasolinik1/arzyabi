import { Link, NavLink, Outlet } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export function DashboardLayout() {
  const { user, logout } = useUser()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="w-64 bg-white border-r hidden md:flex md:flex-col">
          <div className="p-4 border-b">
            <Link to="/dashboard" className="font-semibold">NGO Evaluation Portal</Link>
            <div className="text-xs text-slate-500">{user?.role}</div>
          </div>
          <nav className="p-3 space-y-2">
            <NavLink to="/dashboard" className={({isActive}) => `block px-3 py-2 rounded ${isActive ? 'bg-slate-100' : ''}`}>Dashboard</NavLink>
            <NavLink to="/evaluate" className={({isActive}) => `block px-3 py-2 rounded ${isActive ? 'bg-slate-100' : ''}`}>Evaluation Form</NavLink>
            {(user?.role === 'Admin' || user?.role === 'Evaluator') && (
              <NavLink to="/admin" className={({isActive}) => `block px-3 py-2 rounded ${isActive ? 'bg-slate-100' : ''}`}>Admin/Evaluator</NavLink>
            )}
          </nav>
          <div className="mt-auto p-3">
            <button className="w-full bg-slate-900 text-white rounded px-3 py-2" onClick={logout}>Logout</button>
          </div>
        </aside>
        <div className="flex-1 flex flex-col">
          <header className="bg-white border-b p-4 flex justify-between items-center">
            <div className="md:hidden">
              <Link to="/dashboard" className="font-semibold">NGO Evaluation Portal</Link>
            </div>
            <div className="text-sm text-slate-600">Welcome, {user?.username}</div>
          </header>
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

