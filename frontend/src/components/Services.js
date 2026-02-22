import Image from "next/image";

const services = [
    {
        title: "1-on-1 Coaching",
        description: "Personalized guidance to help you navigate life's challenges.",
        image: "/b2b-hero-ill.png"
    },
    {
        title: "Mindfulness Sessions",
        description: "Learn techniques to stay present and reduce anxiety.",
        image: "/bloom-ill.png"
    },
    {
        title: "Group Workshops",
        description: "Connect with others on a similar journey of self-discovery.",
        image: "/hero-ill.png"
    }
];

export default function Services() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4B483] font-bold mb-3 block">Our Offerings</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#2D1B2D]">
                        Paths to <span className="italic text-[#4A2B4A]">Inner Peace</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-[#F3EFE9] rounded-2xl overflow-hidden border border-[#E5E0D8] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2D]/20 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-serif font-semibold text-[#2D1B2D] mb-2">{service.title}</h3>
                                <p className="text-[#2D1B2D]/60 text-sm leading-relaxed mb-4">{service.description}</p>
                                <button className="text-[#4A2B4A] font-bold text-xs tracking-widest uppercase hover:text-[#2D1B2D] transition-colors flex items-center gap-1.5 group/btn">
                                    Learn More <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
