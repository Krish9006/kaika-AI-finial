export default function WhoItIsFor() {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Visual "Persona" Cards */}
                {/* Left Side: Visual "Persona" Cards */}
                <div className="order-2 lg:order-1 relative min-h-[500px] lg:h-[600px] w-full flex flex-col lg:block items-center justify-center mt-12 lg:mt-0">
                    {/* Decorative Orbit - Hidden on mobile to reduce clutter, or kept minimal */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden lg:flex">
                        <div className="w-[500px] h-[500px] border border-slate-100 rounded-full opacity-60" />
                        <div className="w-[350px] h-[350px] border border-slate-100 rounded-full opacity-60" />
                    </div>

                    {/* Persona Cards - Premium Layout */}
                    <div className="relative w-full h-full max-w-[500px] flex flex-col gap-6 lg:block">

                        {/* Creators: Top-Left */}
                        <div className="relative lg:absolute lg:top-6 lg:left-0 bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 w-full max-w-sm lg:max-w-[220px] z-20 hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 mx-auto">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl shadow-inner shadow-blue-100">🎨</div>
                                <p className="font-bold text-slate-900 text-base">Creators</p>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">Blocked by perfectionism.</p>
                        </div>

                        {/* Seekers: Center (Mobile: Order 2) */}
                        <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-200/40 border border-indigo-50 z-30 w-full max-w-sm lg:w-72 text-center hover:scale-105 transition-transform duration-500 hover:shadow-indigo-500/20 mx-auto order-first lg:order-none">
                            <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl text-white mb-6 shadow-xl shadow-indigo-600/30">
                                ✨
                            </div>
                            <p className="font-bold text-2xl text-slate-900 mb-2">Seekers</p>
                            <p className="text-base text-slate-600 font-medium leading-relaxed">People ready to align with their life's work.</p>
                        </div>

                        {/* Founders: Bottom-Right */}
                        <div className="relative lg:absolute lg:bottom-6 lg:right-0 bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 w-full max-w-sm lg:max-w-[220px] z-20 hover:scale-105 transition-transform duration-500 delay-100 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-100 mx-auto">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center text-xl shadow-inner shadow-purple-100">🚀</div>
                                <p className="font-bold text-slate-900 text-base">Founders</p>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">Driven by purpose, not just metrics.</p>
                        </div>

                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 text-slate-900 tracking-tight leading-[0.95]">
                        Kaika AI is for you if…
                    </h2>
                    <div className="space-y-4 max-w-lg mx-auto lg:mx-0 text-left">
                        {[
                            "You feel stuck or misaligned in your career or life.",
                            "You’re successful on paper, but unfulfilled inside.",
                            "You’re navigating a life or career transition.",
                            "You want meaning — not just motivation."
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-5 p-5 rounded-3xl bg-slate-50 border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all group cursor-default">
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    ✓
                                </div>
                                <p className="text-lg text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-base mt-8 italic font-medium">
                        Especially useful for students, early-career professionals, and people in transition.
                    </p>
                </div>

            </div>
        </section>
    );
}
