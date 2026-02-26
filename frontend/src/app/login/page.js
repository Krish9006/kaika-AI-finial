"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/utils/api";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">

      {/* Left: Content/Image Area (Same as Signup for consistency) */}
      <div className="md:w-1/2 bg-foreground text-background p-12 flex flex-col justify-between relative overflow-hidden">
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
            Welcome back to <span className="text-secondary italic">clarity.</span>
          </h1>
          <p className="text-background/70 text-lg leading-relaxed mb-8">
            Continue your journey of self-discovery and find your peace of mind.
          </p>
        </div>

        <div className="z-10 text-xs text-background/30 mt-12 md:mt-0">
          © 2026 Kaika AI
        </div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </div>

      {/* Right: Login Form */}
      <div className="md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 md:text-left">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-foreground/60">Enter your details to sign in.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-foreground/70 mb-2 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-4 rounded-xl border border-foreground/20 bg-surface focus:border-foreground focus:ring-0 outline-none transition-all placeholder-foreground/30"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-foreground/70 uppercase tracking-wide">Password</label>
                <Link href="/forgot-password" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-4 rounded-xl border border-foreground/20 bg-surface focus:border-foreground focus:ring-0 outline-none transition-all placeholder-foreground/30"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-foreground hover:bg-primary text-background font-bold py-4 rounded-full shadow-xl shadow-foreground/10 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-foreground/60 font-medium">
            Don't have an account?{" "}
            <Link href="/signup" className="text-foreground hover:text-primary font-bold underline decoration-2 underline-offset-4 decoration-secondary">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
