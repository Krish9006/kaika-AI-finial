"use client";

import { useState } from "react";

export default function Trust() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Built with care, privacy, and respect</h2>

                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 md:p-6 inline-block">
                        <p className="text-amber-900/80 font-medium text-sm md:text-base flex items-center gap-3 text-left">
                            ⚠️ <span className="text-left"><strong>Disclaimer:</strong> Kaika AI is a tool for self-reflection, not a medical device or replacement for therapy.</span>
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
                    {/* Privacy Card */}
                    <div className="bg-indigo-50/30 p-6 md:p-10 rounded-[2.5rem] border border-indigo-100/50 hover:border-indigo-200 transition-all hover:shadow-lg group">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-xl font-bold mb-6">🔒</div>
                        <h3 className="font-bold text-xl md:text-2xl mb-6 text-slate-900">Privacy First</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Your data belongs to you — delete it anytime</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Privacy-first design, no selling personal data</li>
                        </ul>
                    </div>

                    {/* Ethics Card */}
                    <div className="bg-emerald-50/30 p-6 md:p-10 rounded-[2.5rem] border border-emerald-100/50 hover:border-emerald-200 transition-all hover:shadow-lg group">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-xl font-bold mb-6">❤️</div>
                        <h3 className="font-bold text-xl md:text-2xl mb-6 text-slate-900">Ethical & Human</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Grounded in evidence-based reflection practices</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Option to combine AI with human support (coming later)</li>
                        </ul>
                    </div>
                </div>

                {/* Expandable Section */}
                <div className="text-center max-w-xl mx-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors text-sm"
                    >
                        <span>How Kaika handles your data</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Data Principles</h4>
                                <ul className="space-y-2 text-slate-600 font-medium text-sm">
                                    <li className="flex items-center gap-2">✅ Your reflections are private.</li>
                                    <li className="flex items-center gap-2">✅ No ads.</li>
                                    <li className="flex items-center gap-2">✅ No data resale.</li>
                                    <li className="flex items-center gap-2">✅ Full deletion available.</li>
                                </ul>
                                <p className="mt-4 text-slate-500 text-sm italic">Ethical design is a foundation, not a feature.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
