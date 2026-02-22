"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { BookOpen, BarChart2, Sparkles, LogOut, Sun, Target, Heart } from "lucide-react";

export default function Dashboard() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F3EFE9]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-[#2D1B2D] border-r-[#2D1B2D] border-b-transparent border-l-transparent"></div>
                    <p className="text-[#2D1B2D]/50 text-sm font-medium">Loading your journey…</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    const greeting = () => {
        const h = new Date().getHours();
        if (h < 12) return "Good morning";
        if (h < 17) return "Good afternoon";
        return "Good evening";
    };

    const cards = [
        {
            icon: <Sun className="w-5 h-5 text-[#D4B483]" />,
            title: "Daily Reflection",
            desc: "Start your day with a guided reflection to set your intentions.",
            cta: "Begin →",
            bg: "bg-[#2D1B2D]",
            textColor: "text-white",
            subColor: "text-white/60",
            ctaColor: "text-[#D4B483]",
        },
        {
            icon: <BookOpen className="w-5 h-5 text-[#4A2B4A]" />,
            title: "Meditation Log",
            desc: "Track your meditation sessions and see your progress over time.",
            cta: "View Log →",
            bg: "bg-white",
            textColor: "text-[#2D1B2D]",
            subColor: "text-[#2D1B2D]/60",
            ctaColor: "text-[#4A2B4A]",
        },
        {
            icon: <Sparkles className="w-5 h-5 text-[#4A2B4A]" />,
            title: "AI Insights",
            desc: "AI-generated insights based on your recent journal entries.",
            cta: "Explore →",
            bg: "bg-white",
            textColor: "text-[#2D1B2D]",
            subColor: "text-[#2D1B2D]/60",
            ctaColor: "text-[#4A2B4A]",
        },
        {
            icon: <Target className="w-5 h-5 text-[#4A2B4A]" />,
            title: "Today's Goals",
            desc: "Set small, meaningful intentions for your day ahead.",
            cta: "Set Goals →",
            bg: "bg-white",
            textColor: "text-[#2D1B2D]",
            subColor: "text-[#2D1B2D]/60",
            ctaColor: "text-[#4A2B4A]",
        },
        {
            icon: <Heart className="w-5 h-5 text-[#4A2B4A]" />,
            title: "Mood Check-in",
            desc: "A 2-minute check-in to understand how you are feeling right now.",
            cta: "Check In →",
            bg: "bg-white",
            textColor: "text-[#2D1B2D]",
            subColor: "text-[#2D1B2D]/60",
            ctaColor: "text-[#4A2B4A]",
        },
        {
            icon: <BarChart2 className="w-5 h-5 text-[#4A2B4A]" />,
            title: "Weekly Progress",
            desc: "Visualize how your mindset and habits have evolved this week.",
            cta: "See Progress →",
            bg: "bg-white",
            textColor: "text-[#2D1B2D]",
            subColor: "text-[#2D1B2D]/60",
            ctaColor: "text-[#4A2B4A]",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F3EFE9] text-[#2D1B2D]">

            {/* Navbar */}
            <nav className="bg-[#2D1B2D] px-6 md:px-12 py-3.5 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-serif font-bold text-lg text-white">Kaika AI</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#D4B483]" />
                        <span className="text-white/80 text-sm font-medium">{user.name}</span>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm font-medium"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="hidden md:block">Logout</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4B483] font-bold mb-2 block">Your Dashboard</span>
                    <h1 className="text-3xl md:text-4xl font-serif font-medium text-[#2D1B2D]">
                        {greeting()}, <span className="italic text-[#4A2B4A]">{user.name}</span> 🌸
                    </h1>
                    <p className="text-[#2D1B2D]/55 mt-2 text-base">Here's your journey at a glance.</p>
                </div>

                {/* Stats Strip */}
                <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 mb-10 grid grid-cols-3 divide-x divide-[#E5E0D8]">
                    {[
                        { label: "Day Streak", value: "7 🔥" },
                        { label: "Reflections Done", value: "12" },
                        { label: "Clarity Score", value: "84%" },
                    ].map((stat, i) => (
                        <div key={i} className="px-6 first:pl-0 last:pr-0 text-center">
                            <p className="text-2xl font-serif font-bold text-[#2D1B2D]">{stat.value}</p>
                            <p className="text-xs uppercase tracking-wider text-[#2D1B2D]/45 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`${card.bg} rounded-2xl p-7 border border-[#E5E0D8] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] flex items-center justify-center mb-5 border border-[#E5E0D8]">
                                {card.icon}
                            </div>
                            <h3 className={`font-serif text-lg font-semibold ${card.textColor} mb-2`}>{card.title}</h3>
                            <p className={`${card.subColor} text-sm leading-relaxed mb-5 flex-1`}>{card.desc}</p>
                            <button className={`${card.ctaColor} font-bold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity text-left`}>
                                {card.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Quote section */}
                <div className="mt-10 bg-[#2D1B2D] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-6">
                    <div className="w-12 h-0.5 bg-[#D4B483] flex-shrink-0 hidden md:block" />
                    <p className="font-serif italic text-white/80 text-lg text-center md:text-left">
                        "The journey of a thousand miles begins with a single step."
                    </p>
                    <span className="text-[#D4B483] text-xs font-bold tracking-widest uppercase flex-shrink-0">— Lao Tzu</span>
                </div>

            </main>
        </div>
    );
}
