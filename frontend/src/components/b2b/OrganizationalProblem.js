export default function OrganizationalProblem() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-block px-3 py-1 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-bold mb-6">
                        The Challenge
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The hidden cost of <span className="text-red-500">misalignment.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Burnout isn't just about workload—it's about a lack of meaning.
                        When employees feel disconnected from their purpose, engagement drops and turnover rises.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {/* Stat Card 1 */}
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group">
                        <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                            <span className="text-4xl">📉</span>
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">48%</div>
                        <div className="text-lg font-bold text-indigo-600 mb-4">Feeling Burned Out</div>
                        <p className="text-slate-500 font-medium leading-relaxed">Employees reporting high levels of exhaustion and detachment.</p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200 transform md:-translate-y-4">
                        <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <div className="text-5xl font-bold text-white mb-2 tracking-tight">2.5x</div>
                        <div className="text-lg font-bold text-indigo-100 mb-4">Higher Retention</div>
                        <p className="text-indigo-100/80 font-medium leading-relaxed">For employees who find meaning and purpose in their daily work.</p>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group">
                        <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                            <span className="text-4xl">🎯</span>
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">60%</div>
                        <div className="text-lg font-bold text-emerald-600 mb-4">Seeking Clarity</div>
                        <p className="text-slate-500 font-medium leading-relaxed">Workforce actively looking for more direction and alignment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
