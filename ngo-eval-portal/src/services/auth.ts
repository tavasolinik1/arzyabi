import type { Role } from '../constants/roles'

const demoUsers: { id: string; username: string; password: string; role: Role }[] = [
  { id: '1', username: 'ngo_user', password: 'password', role: 'NGO' },
  { id: '2', username: 'admin_user', password: 'password', role: 'Admin' },
  { id: '3', username: 'evaluator_user', password: 'password', role: 'Evaluator' },
]

export async function loginService(username: string, password: string) {
  await new Promise((r) => setTimeout(r, 300))
  const user = demoUsers.find((u) => u.username === username && u.password === password)
  if (!user) return false
  const { password: _pw, ...safe } = user
  return safe
}

export function logoutService() {
  return true
}

