'use client'
import { useForm } from 'react-hook-form'

interface FormPqr {
  email: string
  descripcion: string
}

export default function Pqr() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormPqr>()

  const onSubmit = (data: FormPqr) => {
    alert('Radicado PQR-2024-0001')
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-azul mb-4">Peticiones, Quejas y Reclamos</h1>
      {isSubmitSuccessful ? (
        <p className="text-verde">Gracias por contactarnos.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
          <div>
            <label className="block mb-1">Correo electrónico</label>
            <input className="border p-2 w-full" type="email" {...register('email', { required: true })} />
            {errors.email && <span className="text-red-600">Requerido</span>}
          </div>
          <div>
            <label className="block mb-1">Descripción</label>
            <textarea className="border p-2 w-full" rows={4} {...register('descripcion', { required: true })}></textarea>
            {errors.descripcion && <span className="text-red-600">Requerido</span>}
          </div>
          <button type="submit" className="px-4 py-2 bg-azul text-white rounded">Enviar</button>
        </form>
      )}
    </main>
  )
}
