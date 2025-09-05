const normativas = [
  { id: 1, titulo: 'Resolución 123 de 2020', url: '#' },
  { id: 2, titulo: 'Circular 45 de 2021', url: '#' },
  { id: 3, titulo: 'Decreto 987 de 2022', url: '#' },
  { id: 4, titulo: 'Ley 50 de 2019', url: '#' }
]

export default function Normativa() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-azul mb-4">Normativa</h1>
      <ul className="list-disc pl-6 space-y-2">
        {normativas.map(n => (
          <li key={n.id}><a href={n.url} className="text-azul underline" target="_blank" rel="noreferrer">{n.titulo}</a></li>
        ))}
      </ul>
    </main>
  )
}
