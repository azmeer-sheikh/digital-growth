export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white mb-1">Digital Growth Strategy</p>
            <p className="text-xs">Transforming businesses through strategic digital solutions</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs">© 2026 Digital Growth Strategy. All rights reserved.</p>
            <p className="text-xs mt-1 text-orange-400">Powered by innovation and driven by results</p>
          </div>
        </div>
      </div>
    </footer>
  );
}