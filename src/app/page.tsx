export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Taymar Solutions</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-lg">
        Modern, professional business solutions tailored to your unique needs.
      </p>
      <div className="mt-8">
        <a href="/contact" className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
