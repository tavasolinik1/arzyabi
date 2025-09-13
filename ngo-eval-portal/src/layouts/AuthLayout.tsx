import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr] bg-slate-50">
      <header className="border-b bg-white">
        <div className="container-page py-4 flex items-center justify-between">
          <div className="text-right ml-auto">
            <div className="text-xs text-slate-500">Ministry of Interior</div>
            <div className="text-sm font-semibold">Khorasan Razavi Governorate</div>
            <div className="text-sm">Sabzevar Special County Administration</div>
          </div>
        </div>
      </header>
      <main className="container-page py-8">
        <Outlet />
      </main>
    </div>
  )
}

