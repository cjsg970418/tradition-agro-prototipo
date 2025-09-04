import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-azul mb-4">Datos accionables del agro colombiano para decisiones de precio</h1>
        <p className="mb-6 text-neutro-500">Curvas, índices y análisis del mercado agrícola nacional.</p>
        <div className="space-x-4">
          <Link href="/login" className="px-6 py-3 bg-azul text-white rounded-2xl">Iniciar sesión</Link>
          <Link href="/nosotros" className="px-6 py-3 border border-azul text-azul rounded-2xl">Conócenos</Link>
        </div>
      </section>
    </main>
  )
}
