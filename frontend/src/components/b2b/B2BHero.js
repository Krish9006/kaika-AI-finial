
import Image from "next/image";

export default function B2BHero() {
    return (
        <section className="relative flex flex-col pt-20 pb-12 px-6 md:px-12 overflow-hidden bg-white/50 backdrop-blur-3xl min-h-[auto] lg:min-h-[110vh]">

            {/* Subtle Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-50/50 rounded-full blur-[100px]" />
            </div>

            {/* Navigation - Aligned with Content */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 bg-white/70 backdrop-blur-xl rounded-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-sm border border-white/60">
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-black/5 shadow-sm">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900">Kaika AI</span>
                </div>

                <div className="hidden md:flex items-center gap-10 bg-slate-50/80 px-10 py-3 rounded-full border border-slate-200/50 backdrop-blur-md shadow-sm">
                    <a href="#pilot" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">The Pilot</a>
                    <a href="#insights" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Insights</a>
                    <a href="#security" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Security</a>
                </div>

                <button className="bg-slate-900 text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95">
                    Contact Sales
                </button>
            </nav>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center md:px-0 mt-8 mb-8 lg:mb-0">

                {/* Left: Typography */}
                <div className="block w-full text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 relative">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 animate-ping"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600">Now Accepting Pilot Partners</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] !text-left">
                        Align your workforce. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Prevent burnout</span> before it starts.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium !text-left">
                        Kaika AI gives your organization deep, anonymized insights into employee purpose and well-being — helping you retain top talent through meaning, not just perks.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1 active:scale-95 flex items-center gap-2 justify-center">
                            Inquire for Pilot
                        </button>
                        <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center gap-2 justify-center">
                            View Sample Report
                        </button>
                    </div>

                    <div className="mt-8 flex items-center justify-start gap-6 text-sm font-semibold text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs">👥</span>
                            For HR Leaders
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs">🔒</span>
                            Privacy-First Aggregation
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs">🌱</span>
                            Ikigai-Based Framework
                        </div>
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-[2000px] mt-10 lg:mt-0">
                    {/* Main 3D Illustration */}
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                        <Image
                            src="/b2b-hero-ill.png"
                            alt="Organizational Harmony Illustration"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
