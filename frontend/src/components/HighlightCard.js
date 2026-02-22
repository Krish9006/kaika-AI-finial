import Image from "next/image";

export default function HighlightCard() {
    return (
        <section className="py-16 px-6 md:px-16 bg-[#F3EFE9]">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#2D1B2D] rounded-3xl p-8 md:p-14 w-full text-white relative overflow-hidden flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                    {/* Arch Image — correct wellness illustration */}
                    <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-t-[8rem] overflow-hidden border-4 border-white/10 flex-shrink-0 shadow-xl">
                        <Image
                            src="/hero-ill.png"
                            alt="Inner Peace"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2D]/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left z-10">
                        <div className="w-10 h-0.5 bg-[#D4B483] mb-7" />
                        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-5 leading-[1.3] text-white">
                            "The clarity I found here was unlike anything else.<br className="hidden md:block" />
                            It felt like coming home to myself."
                        </h2>
                        <p className="text-[#D4B483] font-semibold tracking-widest uppercase text-xs mb-1">Maria, 64</p>
                        <p className="text-white/50 text-sm mb-8">Kaika AI Early Adopter</p>

                        <button className="px-7 py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-[#2D1B2D] transition-all tracking-wide">
                            Read Her Story
                        </button>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#4A2B4A]/25 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-0 right-[20%] w-48 h-48 bg-[#D4B483]/5 rounded-full blur-2xl pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
