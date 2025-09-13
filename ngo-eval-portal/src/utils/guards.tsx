import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import type { Role } from '../constants/roles'

export function ProtectedRoute({ children, roles }: { children: React.ReactNode, roles?: Role[] }) {
  const { isAuthenticated, user } = useUser()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (roles && user && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

