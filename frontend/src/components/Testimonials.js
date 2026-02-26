import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah J.",
        role: "Designer",
        content: "Kaika AI helped me break through a creative block I've had for years. The questions it asked were so insightful.",
        stars: 5
    },
    {
        name: "Michael T.",
        role: "Founder",
        content: "It feels like talking to a wise friend who knows exactly what to say to help you find your own answers.",
        stars: 5
    },
    {
        name: "Elena R.",
        role: "Student",
        content: "I use it every morning to set my intentions. It's grounded me in a way no other app has.",
        stars: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-16 bg-surface">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3 block">Community Stories</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                        Heal, grow, and <span className="italic text-primary">thrive.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-background border border-border p-7 rounded-2xl hover:shadow-md transition-all hover:-translate-y-0.5">
                            <div className="flex gap-0.5 mb-4 text-secondary">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground/75 leading-relaxed mb-6 font-serif text-base italic">
                                &ldquo;{t.content}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold text-sm">{t.name}</p>
                                    <p className="text-foreground/45 text-xs uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
