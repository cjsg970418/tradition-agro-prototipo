const terminos = [
  { termino: 'Arbitraje', definicion: 'Compra y venta simultánea para aprovechar diferencias de precio.' },
  { termino: 'Base', definicion: 'Diferencia entre precio local y precio de referencia.' },
  { termino: 'Carry', definicion: 'Costo de mantener inventario en el tiempo.' },
  { termino: 'CIF', definicion: 'Costo, seguro y flete.' },
  { termino: 'FOB', definicion: 'Libre a bordo.' },
  { termino: 'Hectárea', definicion: 'Unidad de superficie equivalente a 10.000 m².' },
  { termino: 'Índice', definicion: 'Medida compuesta que resume varios precios.' },
  { termino: 'Lote', definicion: 'Unidad de negociación en futuros.' },
  { termino: 'Margen', definicion: 'Ganancia o pérdida entre compra y venta.' },
  { termino: 'Nudo', definicion: 'Punto de conexión en una red logística.' },
  { termino: 'OTC', definicion: 'Mercado extrabursátil.' },
  { termino: 'Pizarra', definicion: 'Precio publicado de referencia.' },
  { termino: 'Quintal', definicion: 'Unidad de 46 kg en café.' },
  { termino: 'Rendimiento', definicion: 'Producción obtenida por unidad de área.' },
  { termino: 'Spot', definicion: 'Transacción de contado.' },
  { termino: 'Tasa de cambio', definicion: 'Relación entre dos monedas.' },
  { termino: 'UVR', definicion: 'Unidad de valor real usada en Colombia.' },
  { termino: 'Volatilidad', definicion: 'Medida de variación de precios.' },
  { termino: 'Yield', definicion: 'Rendimiento financiero.' },
  { termino: 'Zona de influencia', definicion: 'Área geográfica que abastece un mercado.' }
]

export default function Glosario() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-azul mb-4">Glosario</h1>
      <dl className="space-y-2">
        {terminos.map(t => (
          <div key={t.termino}>
            <dt className="font-semibold">{t.termino}</dt>
            <dd className="ml-4 text-sm text-neutro-500">{t.definicion}</dd>
          </div>
        ))}
      </dl>
    </main>
  )
}
