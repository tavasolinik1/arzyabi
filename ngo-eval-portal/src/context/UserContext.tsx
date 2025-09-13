import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loginService, logoutService } from '../services/auth'
import type { Role } from '../constants/roles'

export type User = {
  id: string
  username: string
  role: Role
}

type UserContextValue = {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  const login = async (username: string, password: string) => {
    const loggedIn = await loginService(username, password)
    if (loggedIn) {
      setUser(loggedIn)
      localStorage.setItem('user', JSON.stringify(loggedIn))
      return true
    }
    return false
  }

  const logout = () => {
    logoutService()
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout }), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}

