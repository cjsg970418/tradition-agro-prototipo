import { NextResponse } from 'next/server'

export async function GET() {
  const spec = {
    openapi: '3.0.0',
    info: { title: 'Tradition Agro API', version: '1.0.0' },
    paths: {
      '/api/hello': {
        get: {
          summary: 'Saludo simple',
          responses: { '200': { description: 'OK' } }
        }
      }
    }
  }
  return NextResponse.json(spec)
}
