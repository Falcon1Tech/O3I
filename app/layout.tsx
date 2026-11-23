import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'O3I | Osprey 365 Intelligence', description: 'Microsoft 365 Tenant Intelligence & Reporting — Osprey Technologies' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
