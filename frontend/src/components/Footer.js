import Image from "next/image";

export default function Footer({ onOpenModal }) {
    return (
        <footer className="bg-foreground py-8 text-background border-t border-primary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                    <div>
                        <span className="font-serif font-bold text-xl tracking-tight text-background">Kaika AI</span>
                        <p className="text-background/50 text-sm mt-1">Begin your journey to inner peace.</p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-background/70">
                        <p className="font-semibold text-background/90">Join the community</p>
                        <ul className="space-y-1">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Privacy First</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Guided Growth</li>
                        </ul>
                    </div>

                    <button
                        onClick={onOpenModal}
                        className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full font-bold text-sm shadow-xl shadow-secondary/20 transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
                    >
                        Join Early Access
                    </button>
                </div>

                <div className="border-t border-primary/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/40">
                    <div className="flex items-center gap-4">
                        <span>© 2026 Kaika AI</span>
                        <a href="#" className="hover:text-background transition-colors">Privacy</a>
                        <a href="#" className="hover:text-background transition-colors">Terms</a>
                    </div>
                    <a href="/b2b" className="hover:text-background transition-colors flex items-center gap-1 group text-secondary/70 font-semibold">
                        Launch a Pilot <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

