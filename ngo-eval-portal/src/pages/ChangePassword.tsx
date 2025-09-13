import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  password: z.string().min(6),
  confirm: z.string().min(6),
  phone: z.string().min(10),
  email: z.string().email(),
  agree: z.boolean().refine((v) => v, { message: 'You must agree' }),
}).refine((v) => v.password === v.confirm, { path: ['confirm'], message: 'Passwords must match' })

type FormValues = z.infer<typeof schema>

export function ChangePasswordPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { agree: false } })

  const onSubmit = () => {
    alert('Password changed and contact info updated!')
    reset()
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Change Password / Contact Info</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input type="password" className="mt-1 w-full border rounded px-3 py-2" {...register('password')} />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input type="password" className="mt-1 w-full border rounded px-3 py-2" {...register('confirm')} />
            {errors.confirm && <p className="text-red-600 text-sm">{errors.confirm.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input className="mt-1 w-full border rounded px-3 py-2" {...register('phone')} />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full border rounded px-3 py-2" {...register('email')} />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register('agree')} /> I commit to accurate information.
        </label>
        {errors.agree && <p className="text-red-600 text-sm">{errors.agree.message}</p>}
        <div className="text-right">
          <button className="bg-slate-900 text-white rounded px-4 py-2">Submit</button>
        </div>
      </form>
    </div>
  )
}

