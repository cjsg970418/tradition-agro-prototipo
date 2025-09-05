'use client'
import { useForm } from 'react-hook-form'

interface Creds {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<Creds>()

  const onSubmit = (data: Creds) => {
    alert('Login simulado')
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-azul mb-4">Iniciar sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
        <div>
          <label className="block mb-1">Correo</label>
          <input className="border p-2 w-full" type="email" {...register('email', { required: true })} />
        </div>
        <div>
          <label className="block mb-1">Contraseña</label>
          <input className="border p-2 w-full" type="password" {...register('password', { required: true })} />
        </div>
        <button type="submit" className="px-4 py-2 bg-azul text-white rounded">Entrar</button>
      </form>
    </main>
  )
}
