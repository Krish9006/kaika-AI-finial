"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { BookOpen, BarChart2, Sparkles, LogOut, Sun, Target, Heart, Settings, User } from "lucide-react";
import NotificationBell from "@/components/dashboard/NotificationBell";
import ThemeToggle from "@/components/dashboard/ThemeToggle";
import Link from "next/link";

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
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-foreground border-r-foreground border-b-transparent border-l-transparent"></div>
                    <p className="text-foreground/50 text-sm font-medium">Loading your journey…</p>
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
            icon: <Sun className="w-5 h-5 text-secondary" />,
            title: "Daily Reflection",
            desc: "Start your day with a guided reflection to set your intentions.",
            cta: "Begin →",
            bg: "bg-foreground",
            textColor: "text-background",
            subColor: "text-background/60",
            ctaColor: "text-secondary",
        },
        {
            icon: <BookOpen className="w-5 h-5 text-primary" />,
            title: "Meditation Log",
            desc: "Track your meditation sessions and see your progress over time.",
            cta: "View Log →",
            bg: "bg-surface",
            textColor: "text-foreground",
            subColor: "text-foreground/60",
            ctaColor: "text-primary",
        },
        {
            icon: <Sparkles className="w-5 h-5 text-primary" />,
            title: "AI Insights",
            desc: "AI-generated insights based on your recent journal entries.",
            cta: "Explore →",
            bg: "bg-surface",
            textColor: "text-foreground",
            subColor: "text-foreground/60",
            ctaColor: "text-primary",
        },
        {
            icon: <Target className="w-5 h-5 text-primary" />,
            title: "Today's Goals",
            desc: "Set small, meaningful intentions for your day ahead.",
            cta: "Set Goals →",
            bg: "bg-surface",
            textColor: "text-foreground",
            subColor: "text-foreground/60",
            ctaColor: "text-primary",
        },
        {
            icon: <Heart className="w-5 h-5 text-primary" />,
            title: "Mood Check-in",
            desc: "A 2-minute check-in to understand how you are feeling right now.",
            cta: "Check In →",
            bg: "bg-surface",
            textColor: "text-foreground",
            subColor: "text-foreground/60",
            ctaColor: "text-primary",
        },
        {
            icon: <BarChart2 className="w-5 h-5 text-primary" />,
            title: "Weekly Progress",
            desc: "Visualize how your mindset and habits have evolved this week.",
            cta: "See Progress →",
            bg: "bg-surface",
            textColor: "text-foreground",
            subColor: "text-foreground/60",
            ctaColor: "text-primary",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Navbar */}
            <nav className="bg-foreground px-6 md:px-12 py-3.5 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background/20">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-serif font-bold text-lg text-background">Kaika AI</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 bg-surface/10 rounded-full px-4 py-1.5 cursor-pointer hover:bg-surface/20 transition-colors">
                        <Link href="/settings" className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-background border border-foreground">
                                <Image src="/logo.jpeg" alt="Avatar" fill className="object-cover" />
                            </div>
                            <span className="text-background/90 text-sm font-medium">{user.name}</span>
                        </Link>
                    </div>

                    <NotificationBell />
                    <ThemeToggle />

                    <Link href="/settings" className="p-2 text-background/60 hover:text-background transition-colors hover:bg-surface/10 rounded-full">
                        <Settings className="w-5 h-5" />
                    </Link>

                    <button
                        onClick={logout}
                        className="flex items-center gap-1.5 text-background/60 hover:text-background transition-colors text-sm font-medium"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="hidden md:block">Logout</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2 block">Your Dashboard</span>
                    <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                        {greeting()}, <span className="italic text-primary">{user.name}</span> 🌸
                    </h1>
                    <p className="text-foreground/55 mt-2 text-base">Here's your journey at a glance.</p>
                </div>

                {/* Stats Strip */}
                <div className="bg-surface border border-border rounded-2xl p-6 mb-10 grid grid-cols-3 divide-x divide-border">
                    {[
                        { label: "Day Streak", value: "7 🔥" },
                        { label: "Reflections Done", value: "12" },
                        { label: "Clarity Score", value: "84%" },
                    ].map((stat, i) => (
                        <div key={i} className="px-6 first:pl-0 last:pr-0 text-center">
                            <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                            <p className="text-xs uppercase tracking-wider text-foreground/45 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`${card.bg} rounded-2xl p-7 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center mb-5 border border-border">
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
                <div className="mt-10 bg-foreground rounded-2xl p-8 text-background flex flex-col md:flex-row items-center gap-6">
                    <div className="w-12 h-0.5 bg-secondary flex-shrink-0 hidden md:block" />
                    <p className="font-serif italic text-background/80 text-lg text-center md:text-left">
                        "The journey of a thousand miles begins with a single step."
                    </p>
                    <span className="text-secondary text-xs font-bold tracking-widest uppercase flex-shrink-0">— Lao Tzu</span>
                </div>

            </main>
        </div>
    );
}
