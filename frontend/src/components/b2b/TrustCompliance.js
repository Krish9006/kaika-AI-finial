export default function TrustCompliance() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm py-1 px-3 bg-emerald-50 border border-emerald-100 rounded-full">Security & Privacy</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6 tracking-tight">
                        Enterprise-Grade Trust
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Built for compliance. Designed for trust. Your data is safe, private, and yours.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 border border-slate-100">🔒</div>
                        <h3 className="font-bold text-slate-900 mb-2">SOC 2 Ready</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Infrastructure designed for highest compliance standards.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 border border-slate-100">🛡️</div>
                        <h3 className="font-bold text-slate-900 mb-2">Anonymity First</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Data is aggregated. Individual responses are never exposed.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 border border-slate-100">🇪🇺</div>
                        <h3 className="font-bold text-slate-900 mb-2">GDPR Compliant</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Full sovereignty and data deletion support.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 border border-slate-100">🤝</div>
                        <h3 className="font-bold text-slate-900 mb-2">Ethical AI</h3>
                        <p className="text-slate-500 text-sm leading-relaxed"> We never train on corporate data without explicit consent.</p>
                    </div>
                </div>

                {/* Compact CTA */}
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Ready to start a pilot?</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10 text-lg">
                        Join forward-thinking organizations using Kaika to build more purposeful teams.
                    </p>
                    <button className="bg-white text-slate-900 hover:bg-indigo-50 px-8 py-3.5 rounded-full font-bold shadow-lg relative z-10">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
