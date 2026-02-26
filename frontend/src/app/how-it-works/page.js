import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* Simple Navbar */}
            <nav className="flex justify-between items-center px-6 py-6 md:px-12">
                <Link href="/" className="font-serif font-bold text-xl tracking-tight">Kaika AI</Link>
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/about" className="hover:text-primary">About</Link>
                    <Link href="/login" className="bg-foreground text-background px-5 py-2 rounded-full hover:bg-primary transition-colors">Start Now</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold block mb-6">
                    The Process
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                    How Kaika AI guides you to <span className="italic">clarity.</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                    A simple, proven framework designed to help you understand yourself better every single day.
                </p>
            </section>

            {/* Steps Container */}
            <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto space-y-32">

                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-secondary font-serif text-6xl font-bold mb-6 opacity-50">01</div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Baseline Assessment</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                            We start by understanding where you are right now. A comprehensive set of questions helps us map your current emotional landscape, values, and goals.
                        </p>
                        <ul className="space-y-4 text-foreground/80">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                Identify core values
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                Set initial intentions
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                Clarify immediate stressors
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-gradient-to-br from-surface-alt to-background rounded-[3rem] p-12 relative overflow-hidden h-[500px] flex items-center justify-center border border-secondary/30">
                        <Image
                            src="/problem-ill.png"
                            alt="Assessment Illustration"
                            fill
                            className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-foreground rounded-[3rem] p-12 relative overflow-hidden h-[500px] flex items-center justify-center">
                        {/* Mock UI of Chat */}
                        <div className="w-3/4 space-y-4">
                            <div className="bg-primary p-4 rounded-2xl rounded-bl-sm text-background/90 text-sm self-start w-3/4">
                                How did that interaction make you feel?
                            </div>
                            <div className="bg-background p-4 rounded-2xl rounded-br-sm text-foreground text-sm self-end ml-auto w-3/4 shadow-lg">
                                I felt unseen, like my opinion didn't matter in the meeting.
                            </div>
                            <div className="bg-primary p-4 rounded-2xl rounded-bl-sm text-background/90 text-sm self-start w-3/4">
                                That is a heavy feeling. Does this remind you of past experiences?
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-secondary font-serif text-6xl font-bold mb-6 opacity-50">02</div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Daily Reflection</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                            Engage in meaningful conversations with our AI guide. Unlike a journal, it listens and asks the right follow-up questions to help you go deeper.
                        </p>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            It's a judgment-free zone where you can be completely honest about your fears, dreams, and frustrations.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-secondary font-serif text-6xl font-bold mb-6 opacity-50">03</div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Growth Tracking</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                            See your progress over time. We track key emotional metrics and highlight patterns you might miss, showing you exactly how far you've come.
                        </p>
                        <Link href="/signup" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors shadow-xl shadow-foreground/10">
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="order-1 md:order-2 bg-gradient-to-bl from-surface-alt to-background rounded-[3rem] p-12 relative overflow-hidden h-[500px] flex items-center justify-center border border-secondary/30">
                        <Image
                            src="/bloom-ill.png"
                            alt="Growth Illustration"
                            fill
                            className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 md:px-12 bg-foreground text-background text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Ready to find peace?</h2>
                    <p className="text-background/70 text-lg mb-12">
                        Your journey to a clearer, calmer mind starts with a single step. Join currently waitlisted members.
                    </p>
                    <Link href="/signup" className="inline-block bg-secondary text-foreground px-10 py-5 rounded-full font-bold text-lg hover:bg-surface transition-colors shadow-2xl">
                        Get Started Today
                    </Link>
                </div>
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full border-[100px] border-background/10"></div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
