import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEvaluation } from '../context/EvaluationContext'

const baseInfoSchema = z.object({
  ngoName: z.string().min(2),
  nationalId: z.string().min(8),
  registrationNumber: z.string().min(3),
})

const activitiesSchema = z.object({
  volunteers: z.coerce.number().min(0),
  projectsCompleted: z.coerce.number().min(0),
  beneficiaries: z.coerce.number().min(0),
})

const financeSchema = z.object({
  revenue: z.coerce.number().min(0),
  expenses: z.coerce.number().min(0),
  reserves: z.coerce.number().min(0),
})

export function EvaluationForm() {
  const [step, setStep] = useState(0)
  const { data, setData } = useEvaluation()

  const baseForm = useForm({ resolver: zodResolver(baseInfoSchema), defaultValues: data.baseInfo })
  const actForm = useForm({ resolver: zodResolver(activitiesSchema), defaultValues: data.activities })
  const finForm = useForm({ resolver: zodResolver(financeSchema), defaultValues: data.finance })

  const steps = ['Base Info', 'Activities', 'Finance']

  const next = async () => {
    if (step === 0) {
      const ok = await baseForm.trigger()
      if (!ok) return
      setData((d) => ({ ...d, baseInfo: baseForm.getValues() as any }))
    }
    if (step === 1) {
      const ok = await actForm.trigger()
      if (!ok) return
      setData((d) => ({ ...d, activities: actForm.getValues() as any }))
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submitAll = async () => {
    const ok = await finForm.trigger()
    if (!ok) return
    setData((d) => ({ ...d, finance: finForm.getValues() as any }))
    alert('Submitted for Review!')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        {steps.map((label, i) => (
          <div key={label} className={`flex-1 text-center ${i === step ? 'font-semibold' : 'text-slate-500'}`}>
            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${i <= step ? 'bg-emerald-500 text-white' : 'bg-slate-200'}`}>{i + 1}</div>
            <div className="text-sm mt-1">{label}</div>
          </div>
        ))}
      </div>

      {step === 0 && (
        <form className="card p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">NGO Name</label>
              <input className="mt-1 w-full border rounded px-3 py-2" {...baseForm.register('ngoName')} />
              {baseForm.formState.errors.ngoName && <p className="text-red-600 text-sm">{baseForm.formState.errors.ngoName.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">National ID</label>
              <input className="mt-1 w-full border rounded px-3 py-2" {...baseForm.register('nationalId')} />
              {baseForm.formState.errors.nationalId && <p className="text-red-600 text-sm">{baseForm.formState.errors.nationalId.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Registration Number</label>
              <input className="mt-1 w-full border rounded px-3 py-2" {...baseForm.register('registrationNumber')} />
              {baseForm.formState.errors.registrationNumber && <p className="text-red-600 text-sm">{baseForm.formState.errors.registrationNumber.message as string}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">License Renewal</label>
              <input type="file" className="mt-1 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Meeting Minutes</label>
              <input type="file" className="mt-1 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium">Member List</label>
              <input type="file" className="mt-1 w-full" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="bg-slate-900 text-white rounded px-4 py-2" onClick={next}>Next</button>
          </div>
        </form>
      )}

      {step === 1 && (
        <form className="card p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Volunteers</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...actForm.register('volunteers')} />
            </div>
            <div>
              <label className="block text-sm font-medium">Projects Completed</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...actForm.register('projectsCompleted')} />
            </div>
            <div>
              <label className="block text-sm font-medium">Beneficiaries</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...actForm.register('beneficiaries')} />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button type="button" className="rounded px-4 py-2 border" onClick={back}>Back</button>
            <button type="button" className="bg-slate-900 text-white rounded px-4 py-2" onClick={next}>Next</button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="card p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Revenue</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...finForm.register('revenue')} />
            </div>
            <div>
              <label className="block text-sm font-medium">Expenses</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...finForm.register('expenses')} />
            </div>
            <div>
              <label className="block text-sm font-medium">Reserves</label>
              <input type="number" className="mt-1 w-full border rounded px-3 py-2" {...finForm.register('reserves')} />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button type="button" className="rounded px-4 py-2 border" onClick={back}>Back</button>
            <button type="button" className="bg-emerald-600 text-white rounded px-4 py-2" onClick={submitAll}>Submit for Review</button>
          </div>
        </form>
      )}
    </div>
  )
}

