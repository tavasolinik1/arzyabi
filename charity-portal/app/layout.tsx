import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/context/AuthContext';
import { ToastProvider } from '@/components/ui/toast';

export const metadata: Metadata = {
  title: 'Charity Evaluation Portal',
  description: 'Role-based portal for charity evaluations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <ToastProvider />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

