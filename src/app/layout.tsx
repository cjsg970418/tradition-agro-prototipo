import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tradition Agro Colombia',
  description: 'Datos accionables del agro colombiano'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased bg-neutro-100">
        {children}
      </body>
    </html>
  )
}
