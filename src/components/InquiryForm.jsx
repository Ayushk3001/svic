'use client';
import { useState } from 'react';

export default function InquiryForm({ d }) {
  const [formData, setFormData] = useState({ name: '', phone: '', course: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setSuccess(true);
    setFormData({ name: '', phone: '', course: '' });
    setTimeout(() => setSuccess(false), 8000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {success && (
        <div className="border border-emerald-200 bg-emerald-50 p-4 text-xs font-bold leading-relaxed text-emerald-800">
          {d.contact.form_success}
        </div>
      )}
      <div>
        <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-slate-600">{d.contact.form_name}</label>
        <input 
          type="text" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/15" 
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-slate-600">{d.contact.form_phone}</label>
        <input 
          type="tel" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/15" 
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-slate-600">{d.contact.form_course}</label>
        <select 
          value={formData.course}
          onChange={(e) => setFormData({...formData, course: e.target.value})}
          className="w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-amber-500/15"
        >
          <option value="">-- {d.contact.form_select_placeholder} --</option>
          <option value="typing">{d.contact.course_options.typing}</option>
          <option value="shorthand">{d.contact.course_options.shorthand}</option>
          <option value="computers">{d.contact.course_options.computers}</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="w-full cursor-pointer bg-slate-950 px-4 py-4 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition hover:bg-amber-500 hover:text-slate-950"
      >
        {d.contact.form_submit}
      </button>
    </form>
  );
}
