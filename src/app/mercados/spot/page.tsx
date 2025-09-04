'use client'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

interface RegionPrecio {
  nombre: string
  lat: number
  lng: number
  precio: number
}

const regiones: RegionPrecio[] = [
  { nombre: 'Huila', lat: 2.5359, lng: -75.5277, precio: 1400000 },
  { nombre: 'Antioquia', lat: 6.2518, lng: -75.5636, precio: 1300000 },
  { nombre: 'Cundinamarca', lat: 4.7110, lng: -74.0721, precio: 1350000 }
]

interface ProductoCambio {
  producto: string
  compra: number
  venta: number
  cambio: number // 1 si sube, -1 si baja
}

const productos: ProductoCambio[] = [
  { producto: 'Maíz amarillo', compra: 85000, venta: 87000, cambio: 1 },
  { producto: 'Café pergamino', compra: 1400000, venta: 1420000, cambio: -1 },
  { producto: 'Cacao', compra: 950000, venta: 960000, cambio: 1 },
  { producto: 'Arroz paddy', compra: 180000, venta: 185000, cambio: 1 },
  { producto: 'Habichuela', compra: 4000, venta: 4500, cambio: -1 },
  { producto: 'Papa criolla', compra: 150000, venta: 152000, cambio: 1 },
  { producto: 'Fríjol rojo', compra: 300000, venta: 310000, cambio: -1 },
  { producto: 'Banano', compra: 25000, venta: 26000, cambio: 1 },
  { producto: 'Cebolla larga', compra: 80000, venta: 82000, cambio: -1 },
  { producto: 'Tomate chonto', compra: 50000, venta: 52000, cambio: 1 },
  { producto: 'Yuca', compra: 40000, venta: 41000, cambio: -1 },
  { producto: 'Plátano', compra: 30000, venta: 31000, cambio: 1 },
  { producto: 'Aguacate', compra: 120000, venta: 125000, cambio: -1 },
  { producto: 'Soya', compra: 90000, venta: 93000, cambio: 1 },
  { producto: 'Caña de azúcar', compra: 70000, venta: 72000, cambio: -1 }
]

export default function Spot() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-azul">Precios Spot</h1>

      <section className="h-96">
        <MapContainer center={[4.5, -74]} zoom={5} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap"
          />
          {regiones.map(r => (
            <CircleMarker key={r.nombre} center={[r.lat, r.lng]} radius={10} color="#0E9F6E">
              <Popup>
                <p className="font-bold">{r.nombre}</p>
                <p>Café: ${'{'}r.precio.toLocaleString('es-CO')}{' '}COP</p>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Variación diaria de productos</h2>
        <table className="w-full text-sm border">
          <thead className="bg-neutro-100 sticky top-0">
            <tr>
              <th className="p-2 text-left">Producto</th>
              <th className="p-2 text-right">Compra (COP)</th>
              <th className="p-2 text-right">Venta (COP)</th>
              <th className="p-2 text-center">Cambio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.producto} className="border-t">
                <td className="p-2">{p.producto}</td>
                <td className="p-2 text-right">{p.compra.toLocaleString('es-CO')}</td>
                <td className="p-2 text-right">{p.venta.toLocaleString('es-CO')}</td>
                <td className={`p-2 text-center ${p.cambio > 0 ? 'text-verde' : 'text-red-600'}`}>{p.cambio > 0 ? '▲' : '▼'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
