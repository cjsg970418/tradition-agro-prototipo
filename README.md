# Tradition Agro Colombia

Proyecto demostrativo basado en Next.js 14 + TypeScript para publicar estadísticas y precios del sector agro colombiano.

## Requisitos
- Node.js 18+
- PostgreSQL

## Instalación
```bash
npm install
```

### Variables de entorno
Cree un archivo `.env` con las variables:
```
DATABASE_URL=postgres://user:pass@localhost:5432/agro
NEXTAUTH_SECRET=changeme
```

### Migraciones y seed
```bash
npm run prisma:migrate
npm run db:seed
```

## Desarrollo
```bash
npm run dev
```

### Vista previa rápida

Para visualizar el contenido sin compilar la aplicación, se incluye un `index.html` estático en la raíz del proyecto. Ábralo en un navegador para ver una muestra del portal.

## Estructura
- `src/app` - Rutas de la aplicación.
- `prisma/schema.prisma` - Modelo de datos.
- `prisma/seed.ts` - Datos dummy.

## Créditos
Datos de ejemplo sin valor comercial.
