"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/utils/api";

export default function SignupPage() {
    const { signup } = useAuth();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await signup(name, email, password);
            // Redirect handled in signup function
        } catch (err) {
            setError(err.message || "Signup failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#F3EFE9] text-[#2D1B2D]">

            {/* Left: Content/Image Area */}
            <div className="md:w-1/2 bg-[#2D1B2D] text-white p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Background Illustration */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/hero-ill.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="z-10">
                    <Link href="/" className="font-serif font-bold text-2xl tracking-tight">
                        Kaika AI
                    </Link>
                </div>

                <div className="z-10 max-w-md mt-12 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                        Begin your journey to <span className="text-[#D4B483] italic">inner peace.</span>
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Join a community of people dedicated to understanding themselves deeper, one reflection at a time.
                    </p>

                    <div className="flex items-center gap-4 text-sm font-medium text-[#D4B483]">
                        <span className="flex items-center gap-2">
                            ✓ Privacy First
                        </span>
                        <span className="flex items-center gap-2">
                            ✓ Guided Growth
                        </span>
                    </div>
                </div>

                <div className="z-10 text-xs text-white/30 mt-12 md:mt-0">
                    © 2026 Kaika AI
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4A2B4A] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            </div>

            {/* Right: Signup Form */}
            <div className="md:w-1/2 p-8 md:p-16 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-serif font-bold mb-8 text-[#2D1B2D]">Create Account</h2>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-[#2D1B2D]/70 mb-2 uppercase tracking-wide">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-4 rounded-xl border border-[#2D1B2D]/20 bg-white focus:border-[#2D1B2D] focus:ring-0 outline-none transition-all placeholder-[#2D1B2D]/30"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2D1B2D]/70 mb-2 uppercase tracking-wide">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full px-4 py-4 rounded-xl border border-[#2D1B2D]/20 bg-white focus:border-[#2D1B2D] focus:ring-0 outline-none transition-all placeholder-[#2D1B2D]/30"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2D1B2D]/70 mb-2 uppercase tracking-wide">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-4 rounded-xl border border-[#2D1B2D]/20 bg-white focus:border-[#2D1B2D] focus:ring-0 outline-none transition-all placeholder-[#2D1B2D]/30"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#2D1B2D] hover:bg-[#4A2B4A] text-white font-bold py-4 rounded-full shadow-xl shadow-[#2D1B2D]/10 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {isLoading ? (
                                <span className="animate-pulse">Creating Account...</span>
                            ) : (
                                "Start Your Journey"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-[#2D1B2D]/60 font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#2D1B2D] hover:text-[#4A2B4A] font-bold underline decoration-2 underline-offset-4 decoration-[#D4B483]">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
