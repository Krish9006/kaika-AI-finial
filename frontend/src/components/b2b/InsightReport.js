
import Image from "next/image";

export default function InsightReport() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <div className="order-2 lg:order-1 relative flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square">
                        <Image
                            src="/report.png"
                            alt="Kaika Insight Report Dashboard"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <span className="text-purple-600 font-bold tracking-wide uppercase text-sm py-1 px-3 bg-purple-50 border border-purple-100 rounded-full">Deep Insights</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-8 tracking-tight">
                        See what’s actually <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">happening.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                        Traditional engagement surveys ask "Are you happy?". Kaika asks "Are you aligned?". The difference is actionable data on why people stay or leave.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Alignment Heatmaps</strong>
                                <span className="text-slate-500">See which departments feel most purposeful and connected.</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Burnout Early Warning</strong>
                                <span className="text-slate-500">Identify teams at risk of fatigue before they quit.</span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Values Gap Analysis</strong>
                                <span className="text-slate-500">Compare company values vs. actual employee experience.</span>
                            </div>
                        </li>
                    </ul>

                    <button className="mt-12 text-indigo-600 font-bold flex items-center gap-2 text-lg group">
                        View Sample Report PDF <span>→</span>
                    </button>
                </div>

            </div>
        </section>
    );
}
