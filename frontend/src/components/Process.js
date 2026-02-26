export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Discover Your Baseline",
            description: "Take our assessment to understand your core values and current state of mind."
        },
        {
            number: "02",
            title: "Daily Reflection",
            description: "Receive personalized prompts that help you process emotions in just 5 minutes a day."
        },
        {
            number: "03",
            title: "Track Your Growth",
            description: "Visualize your journey with weekly insights and see how your mindset evolves."
        }
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-16 bg-background">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3 block">How to Use Kaika AI</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                        Start your journey <span className="italic text-primary">in 3 steps</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-surface rounded-2xl p-7 border border-border hover:shadow-md transition-all hover:-translate-y-0.5 relative overflow-hidden">
                            <span className="absolute top-5 right-6 text-6xl font-serif font-bold text-foreground/5 select-none leading-none">{step.number}</span>
                            <div className="w-9 h-9 bg-foreground rounded-xl flex items-center justify-center mb-5">
                                <span className="text-secondary text-xs font-bold">{step.number}</span>
                            </div>
                            <h3 className="text-base font-serif font-semibold text-foreground mb-2">{step.title}</h3>
                            <p className="text-foreground/55 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <button className="bg-foreground text-background px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary transition-all shadow-lg active:scale-95">
                        Start Your Journey
                    </button>
                </div>

            </div>
        </section>
    );
}
