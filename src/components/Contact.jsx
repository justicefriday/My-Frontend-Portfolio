import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !/\S+@\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message) e.message = 'Message required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Simulate success
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="card max-w-2xl w-full mx-auto">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <div>
          <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full p-3 rounded border bg-transparent" />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        </div>
        <div>
          <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full p-3 rounded border bg-transparent" />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>
        <div>
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message" className="w-full p-3 rounded border bg-transparent h-32" />
          {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="py-2 px-4 bg-brand text-white rounded">Send</button>
          {sent && <div className="text-green-500">Message sent — thanks!</div>}
        </div>

        <div className="pt-4 border-t mt-4">
          <p className="text-sm">Find me on</p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.linkedin.com/in/fridayudojustice" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/justicefriday?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:fridayudojustice@gmail.com">Email</a>
          </div>
        </div>
      </form>
    </div>
  )
}
