# Tradition Agro Colombia

Proyecto demostrativo basado en Next.js 14 + TypeScript para publicar estadísticas y precios del sector agro colombiano.

## Requisitos
- Node.js 18+
- PostgreSQL

## Instalación
```bash
yarn install
```

### Variables de entorno
Cree un archivo `.env` con las variables:
```
DATABASE_URL=postgres://user:pass@localhost:5432/agro
NEXTAUTH_SECRET=changeme
```

### Migraciones y seed
```bash
yarn prisma migrate dev
yarn db:seed
```

## Desarrollo
```bash
yarn dev
```

## Estructura
- `src/app` - Rutas de la aplicación.
- `prisma/schema.prisma` - Modelo de datos.
- `prisma/seed.ts` - Datos dummy.

## Créditos
Datos de ejemplo sin valor comercial.
