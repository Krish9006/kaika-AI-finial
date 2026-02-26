import { User, MessageCircle, Sparkles } from "lucide-react";

const features = [
    {
        icon: <User className="w-5 h-5 text-primary" />,
        title: "Self Awareness",
        description: "Understand your patterns and behaviors through guided introspection."
    },
    {
        icon: <MessageCircle className="w-5 h-5 text-primary" />,
        title: "Guided Reflection",
        description: "Talk through your thoughts with a compassionate AI companion."
    },
    {
        icon: <Sparkles className="w-5 h-5 text-primary" />,
        title: "Find Clarity",
        description: "Cut through the noise to discover your true north and purpose."
    }
];

export default function Features() {
    return (
        <section className="py-16 px-6 md:px-16 bg-surface border-y border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                            <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-serif font-semibold text-foreground mb-1">{feature.title}</h3>
                                <p className="text-foreground/55 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
