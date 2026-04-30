export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
        We generate the pipeline.<br />You close the revenue.
      </h1>
      <p className="mt-6 text-xl text-slate-600 max-w-2xl">
        Performance-driven sales outsourcing. We handle cold outreach, lead qualification, and appointment setting so your team can focus on closing.
      </p>
      <div className="mt-10 flex gap-4">
        <a href="/contact" className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
          Schedule Consultation
        </a>
        <a href="/services" className="px-8 py-4 bg-white text-slate-900 font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 transition">
          View Services
        </a>
      </div>
    </div>
  );
}
