export default function PilotProgram() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm py-1 px-3 bg-indigo-50 border border-indigo-100 rounded-full">How it Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6 tracking-tight">
                        A low-friction pilot. <br />High-impact insights.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 -z-10" />

                    {/* Step 1 */}
                    <div className="relative group">
                        <div className="w-24 h-24 mx-auto bg-white rounded-[2rem] flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-lg shadow-indigo-100 border border-slate-100 mb-8 relative z-10">
                            1
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-indigo-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Deploy Questionnaire</h3>
                        <p className="text-slate-600 leading-relaxed text-center px-4 font-medium">
                            Share a private, secure link with your team. Employees take the 5-minute guided Kaika reflection to explore their personal purpose.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                        <div className="w-24 h-24 mx-auto bg-white rounded-[2rem] flex items-center justify-center text-2xl font-bold text-purple-600 shadow-lg shadow-purple-100 border border-slate-100 mb-8 relative z-10">
                            2
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-purple-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Employees Reflect</h3>
                        <p className="text-slate-600 leading-relaxed text-center px-4 font-medium">
                            Each employee receives immediate, private feedback on their "Ikigai" alignment—giving them value instantly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                        <div className="w-24 h-24 mx-auto bg-white rounded-[2rem] flex items-center justify-center text-2xl font-bold text-emerald-600 shadow-lg shadow-emerald-100 border border-slate-100 mb-8 relative z-10">
                            3
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-emerald-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Receive HR Report</h3>
                        <p className="text-slate-600 leading-relaxed text-center px-4 font-medium">
                            We aggregate the data (anonymously) to show you the "Purpose Pulse" of your org: where people are aligned, and where they are burning out.
                        </p>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold shadow-lg shadow-slate-200/50">
                        See detailed pilot breakdown
                    </button>
                </div>
            </div>
        </section>
    );
}
