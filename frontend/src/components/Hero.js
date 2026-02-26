import Image from "next/image";
import Link from "next/link";

export default function Hero({ onOpenModal }) {
    return (
        <section className="relative flex flex-col overflow-hidden min-h-screen bg-background">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3 md:px-16 bg-foreground shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background/20">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-serif font-bold text-lg tracking-wide text-background">Kaika AI</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm text-background/70 font-medium">
                    <a href="#how-it-works" className="hover:text-secondary transition-colors">How it Works</a>
                    <a href="#about" className="hover:text-secondary transition-colors">About</a>
                </div>

                <Link href="/signup" className="bg-secondary text-foreground px-5 py-2 rounded-full text-sm font-bold hover:bg-secondary/80 transition-all shadow-md active:scale-95">
                    Get Started
                </Link>
            </nav>

            {/* Background accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[5%] left-[-5%] w-[35vw] h-[35vw] bg-secondary/8 rounded-full blur-3xl" />
            </div>

            {/* Main Content */}
            <div className="max-w-6xl w-full mx-auto px-6 md:px-16 pt-32 pb-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10 relative flex-1">

                {/* Left: Text */}
                <div className="flex-1 text-left">
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/12 bg-surface text-xs uppercase tracking-[0.2em] text-foreground font-bold shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                            Sentience & Serenity
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-semibold text-foreground mb-6 leading-[1.1]">
                        Finally Find<br />
                        <span className="italic text-primary">Peace Of Mind</span>
                    </h1>

                    <p className="text-base md:text-lg text-foreground/60 mb-10 max-w-md leading-relaxed">
                        A deeper path to clarity and purpose. Compassionate AI that helps you understand yourself.
                    </p>

                    <div className="flex gap-3 flex-wrap mb-12">
                        <button
                            onClick={onOpenModal}
                            className="bg-foreground text-background px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary transition-all shadow-lg active:scale-95"
                        >
                            Join Early Access
                        </button>
                        <a href="#how-it-works" className="px-8 py-3.5 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all">
                            See How It Works
                        </a>
                    </div>

                    {/* Trust bar */}
                    <div className="flex items-center gap-5 text-sm text-foreground/50">
                        <span className="flex items-center gap-1.5"><span className="text-secondary">★★★★★</span> 4.9 Rating</span>
                        <span className="w-px h-4 bg-foreground/15"></span>
                        <span>500+ Early Adopters</span>
                        <span className="w-px h-4 bg-foreground/15"></span>
                        <span>100% Private</span>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-shrink-0 w-full max-w-[260px] md:max-w-[300px]">
                    <div className="relative w-full aspect-[3/4] rounded-t-[10rem] overflow-hidden border-[5px] border-background shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                        <Image src="/bloom-ill.png" alt="Peace of Mind" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    );
}
