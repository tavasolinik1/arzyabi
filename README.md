# Next.js 14 Starter (TypeScript, Tailwind + Dark/RTL, Zustand, Prisma)

A modern Next.js 14 starter using the App Router, TypeScript, Tailwind CSS (dark mode + RTL), Zustand for state management, and Prisma (PostgreSQL).

## Features
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with dark mode and RTL support
- Zustand for auth + theme state
- Prisma ORM (PostgreSQL) with `User` and `Task` models
- API routes: GET/POST `/api/tasks`
- ESLint + Prettier configured

## Getting Started

1. Install dependencies:
```bash
pnpm install # or npm install / yarn
```

2. Copy environment variables and edit values:
```bash
cp .env.example .env
```

3. Initialize database and Prisma:
```bash
pnpm prisma:generate
pnpm prisma:migrate --name init
```

4. Run the dev server:
```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Scripts
- `dev`: start Next.js dev server
- `build`: generate Prisma client then build
- `start`: start production server
- `lint`: run ESLint
- `format`: run Prettier
- `prisma:*`: Prisma helpers (generate, migrate, studio)

## Project Structure
- `app/(marketing)`: Home `/`, `/about`, `/contact`
- `app/(auth)`: `/login`, `/register`, `/forgot-password`
- `app/(dashboard)`: Protected layout with `/dashboard`, `/dashboard/tasks`, `/dashboard/settings`
- `components/ui`: Reusable UI components (`Button`, `Input`, `Card`, `Modal`)
- `components/layout`: `Navbar`, `Sidebar`
- `stores`: Zustand stores (`auth`, `theme`)
- `prisma/schema.prisma`: Prisma schema
- `app/api/tasks`: API route handlers

## Notes
- Auth is demo-only via Zustand; replace with a real auth provider (e.g. NextAuth) for production.
- RTL is controlled via the theme store; toggle from Navbar or Settings.
- Dark mode uses `class` strategy; the `ThemeProvider` syncs state to `<html>`.