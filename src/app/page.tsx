export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
        We generate the pipeline.<br />You close the revenue.
      </h1>
      <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
        Performance-driven sales outsourcing. We handle cold outreach, lead qualification, and appointment setting so your team can focus on closing.
      </p>
      <div className="mt-10 flex gap-4">
        <a href="/contact" className="px-8 py-4 bg-[#ff2e2e] text-white font-semibold rounded-lg hover:bg-[#e62828] transition">
          Schedule Consultation
        </a>
        <a href="/services" className="px-8 py-4 bg-transparent text-white font-semibold border border-neutral-700 rounded-lg hover:border-neutral-500 transition">
          View Services
        </a>
      </div>
    </div>
  );
}
