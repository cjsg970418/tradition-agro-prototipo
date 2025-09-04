import * as handler from '../src/app/api/hello/route'

it('retorna saludo', async () => {
  const res = await handler.GET()
  const data = await res.json()
  expect(data.mensaje).toBe('Hola API')
})
