export default function HowItWorks() {
    const steps = [
        { step: "01", title: "Reflect", icon: "🌱", desc: "Guided questions help you explore what you care about and what gives you energy." },
        { step: "02", title: "Synthesize", icon: "✨", desc: "Kaika AI connects patterns using your reflections, values, and the Ikigai framework." },
        { step: "03", title: "Act", icon: "🚀", desc: "Receive small, practical actions to align your daily life with what truly matters." }
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-14">
                    <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3 block">How it Works</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-3">
                        A simple path from<br /><span className="italic text-primary">confusion to clarity</span>
                    </h2>
                    <p className="text-foreground/60 text-base max-w-md">Guided reflection. Personalized synthesis. Practical action.</p>
                </div>

                {/* Steps - Horizontal Row */}
                <div className="flex flex-row items-start gap-0">
                    {steps.map((item, i) => (
                        <div key={i} className="flex flex-row items-center flex-1">
                            {/* Step Card */}
                            <div className="flex flex-col items-start flex-1">
                                <div className="relative w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center shadow-lg mb-5">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-foreground rounded-full flex items-center justify-center font-bold text-[10px] border-2 border-background">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed pr-6">{item.desc}</p>
                            </div>

                            {/* Arrow connector between steps */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:flex items-center justify-center w-10 flex-shrink-0 mt-[-40px]">
                                    <span className="text-secondary text-2xl">→</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
