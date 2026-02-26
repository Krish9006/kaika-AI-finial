import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* Simple Navbar */}
            <nav className="flex justify-between items-center px-6 py-6 md:px-12">
                <Link href="/" className="font-serif font-bold text-xl tracking-tight">Kaika AI</Link>
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/how-it-works" className="hover:text-primary">How it Works</Link>
                    <Link href="/login" className="hover:text-primary">Login</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold block mb-6">
                    Our Mission
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
                    We believe clarity is the foundation of a <span className="italic">meaningful life.</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                    In a world of constant noise, Kaika AI offers a quiet space to hear your own thoughts and find your true direction.
                </p>
            </section>

            {/* Story Section with Arch Image */}
            <section className="py-20 px-6 md:px-12 bg-surface">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative w-full aspect-[4/5] rounded-t-[15rem] overflow-hidden bg-foreground">
                        <Image
                            src="/b2b-hero-ill.png"
                            alt="Our Story"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
                            A sanctuary for your mind.
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
                            <p>
                                Kaika (開花) means "blooming" or "flowering" in Japanese. We chose this name because self-discovery isn't a race—it's a natural unfolding.
                            </p>
                            <p>
                                We built this platform because we saw how technology was being used to distract us, rather than connect us to ourselves. We wanted to build something different.
                            </p>
                            <p>
                                Something kind. Something patient. Something that asks the right questions instead of giving generic answers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 md:px-12 bg-foreground text-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">
                            Our Core Values
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium mt-4">
                            Guiding Principles
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 text-2xl">
                                ❤️
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4">Radical Empathy</h3>
                            <p className="text-background/60 leading-relaxed">
                                We design every interaction with deep respect for the human experience. No judgement, just understanding.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 text-2xl">
                                🛡️
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4">Privacy First</h3>
                            <p className="text-background/60 leading-relaxed">
                                Your thoughts are sacred. We ensure your data is encrypted and never sold to advertisers.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 text-2xl">
                                🌱
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4">Sustainable Growth</h3>
                            <p className="text-background/60 leading-relaxed">
                                We prioritize long-term wellbeing over short-term hacks. Real change takes time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
