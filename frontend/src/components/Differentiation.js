"use client";

import { useState } from "react";
import Image from "next/image";

export default function Differentiation() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden px-6 md:px-12">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid lg:grid-cols-2 gap-20 items-center mb-16 lg:mb-24">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-tight">
                            Why Kaika AI is <br />
                            <span className="text-indigo-600">different.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium max-w-2xl mx-auto lg:mx-0">
                            Kaika doesn’t give answers. It helps you discover your own.
                        </p>

                        <ul className="space-y-6 text-left max-w-lg mx-auto lg:mx-0">
                            {[
                                { title: "Purpose Discovery", desc: "Built specifically for purpose discovery, not general Q&A.", color: "bg-blue-500" },
                                { title: "Psychology & Ikigai", desc: "Guided by Ikigai + psychology, not generic advice.", color: "bg-amber-500" },
                                { title: "Long-term Learning", desc: "Learns from your reflections over time, not one-off prompts.", color: "bg-green-500" },
                                { title: "Action Oriented", desc: "Focused on action and alignment, not endless introspection.", color: "bg-purple-500" }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-0.5">{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Illustration Area */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center group shadow-2xl delay-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-pink-50/50" />
                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-center">
                            <div className="relative w-full h-full max-w-sm max-h-sm flex items-center justify-center">
                                <Image
                                    src="/bloom-ill.png"
                                    alt="Kaika Blooming"
                                    fill
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-16 left-0 right-0 text-center">
                            <p className="text-lg lg:text-xl font-serif font-medium text-slate-900 drop-shadow-sm bg-white/60 px-6 py-2 rounded-full inline-block backdrop-blur-sm border border-white/40">"A slow, deliberate blooming."</p>
                        </div>
                    </div>
                </div>

                {/* Expandable Section */}
                <div className="text-center max-w-2xl mx-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group"
                    >
                        <span>How this is different from ChatGPT or other AI tools</span>
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="bg-indigo-50/50 p-6 rounded-2xl text-left border border-indigo-100">
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    Kaika AI is designed specifically for long-term reflection — not one-off answers.
                                    It remembers patterns, values, and emotional shifts over time, helping you notice misalignment before burnout happens.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
