import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('demo123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@demo.co' },
    update: {},
    create: {
      email: 'admin@demo.co',
      hash,
      nombre: 'Administrador',
      rol: 'ADMIN'
    }
  })

  const productos = await prisma.producto.createMany({
    data: [
      { nombre: 'Café pergamino', categoria: 'Café', unidadMedida: 'kg' },
      { nombre: 'Maíz amarillo', categoria: 'Granos', unidadMedida: 'kg' },
      { nombre: 'Arroz paddy', categoria: 'Granos', unidadMedida: 'kg' }
    ]
  })

  const regiones = await prisma.region.createMany({
    data: [
      { nombre: 'Huila', departamento: 'Huila', lat: 2.5359, lng: -75.5277 },
      { nombre: 'Antioquia', departamento: 'Antioquia', lat: 6.2518, lng: -75.5636 },
      { nombre: 'Cundinamarca', departamento: 'Cundinamarca', lat: 4.7110, lng: -74.0721 }
    ]
  })

  const productoCafe = await prisma.producto.findFirst({ where: { nombre: 'Café pergamino' } })
  const regionHuila = await prisma.region.findFirst({ where: { nombre: 'Huila' } })
  if (productoCafe && regionHuila) {
    await prisma.precioSpot.create({
      data: {
        productoId: productoCafe.id,
        regionId: regionHuila.id,
        fecha: new Date(),
        precio: 1400000,
        fuente: 'Dummy'
      }
    })
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
