import Image from "next/image";

export default function Problem() {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        You’re not broken. <span className="text-slate-400">You’re overwhelmed.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Many people feel stuck not because they lack ability — but because they lack space to reflect. <br className="hidden md:block" />
                        Between constant noise, expectations, and survival mode, it’s easy to lose sight of what actually matters. <br />
                        <span className="text-indigo-600 font-medium">Kaika exists to help you slow down, listen inward, and reconnect with your direction.</span>
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Large Card */}
                    <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group overflow-hidden relative min-h-[320px] md:min-h-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">The Productivity Trap</h3>
                                <p className="text-base text-slate-500 leading-relaxed max-w-md z-20 relative">
                                    We are obsessed with doing more, but we rarely ask <em>why</em>. Endless output without purpose leads to high-functioning emptiness.
                                </p>
                            </div>
                        </div>
                        {/* Illustration Overlay */}
                        <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 md:w-64 md:h-64 mix-blend-multiply opacity-20 md:opacity-90 pointer-events-none transition-opacity duration-500">
                            <Image
                                src="/problem-ill.png"
                                alt="Chaos vs Order"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Tall Card */}
                    <div className="md:row-span-2 bg-indigo-600 p-6 md:p-8 rounded-[2rem] shadow-xl text-white flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                        <div className="relative z-10 hidden md:block">
                            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20" />
                                    <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full mb-2" />
                                <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">The Solution is Silence.</h3>
                            <p className="text-indigo-100 text-base leading-relaxed">
                                You don't need another app to track your habits. You need a space to reflect on your life.
                            </p>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 hover:border-indigo-200 transition-all group">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl mb-3">🌫️</div>
                        <h3 className="text-lg font-bold mb-1">Mental Fog</h3>
                        <p className="text-sm text-slate-500">Disconnected from your own authentic voice.</p>
                    </div>

                    {/* Small Card 2 */}
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 hover:border-indigo-200 transition-all group">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-3">🔄</div>
                        <h3 className="text-lg font-bold mb-1">Burnout Cycle</h3>
                        <p className="text-sm text-slate-500">Stuck in a loop of exhaustion and recovery.</p>
                    </div>

                </div>
            </div>
        </section >
    );
}
