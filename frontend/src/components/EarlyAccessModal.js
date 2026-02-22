"use client";

import { useState } from 'react';

export default function EarlyAccessModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send to backend here
        setTimeout(() => {
            setSubmitted(true);
        }, 800);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {!submitted ? (
                    <>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            What joining early access means
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Kaika AI is currently in private development. Early access members help shape the product while receiving exclusive benefits.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="text-indigo-600">✨</span> You’ll receive:
                                </h3>
                                <ul className="space-y-2.5 text-slate-600 text-sm md:text-base">
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                                        Early access to Kaika AI before public launch
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                                        Guided purpose & mental clarity reflections
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                                        Opportunity to test new features first
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                                        Optional feedback sessions with the Kaika team
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                                        Priority access when paid plans launch
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
                                <h3 className="font-semibold text-rose-900 mb-3 text-sm uppercase tracking-wide">What it is not:</h3>
                                <ul className="space-y-2 text-rose-800/80 text-sm font-medium">
                                    <li className="flex items-center gap-2">❌ Not therapy or medical treatment</li>
                                    <li className="flex items-center gap-2">❌ No forced daily usage</li>
                                    <li className="flex items-center gap-2">❌ No pressure to “fix yourself”</li>
                                </ul>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-all"
                            >
                                Join Early Access
                            </button>
                            <p className="text-center text-xs text-slate-400 font-medium">
                                You can leave anytime. We don’t sell data. Ever.
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Welcome to Kaika AI</h2>
                        <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                            Thank you for joining early access. We’ll reach out when:
                        </p>
                        <div className="text-left bg-slate-50 p-5 rounded-xl text-sm text-slate-700 font-medium mb-8 max-w-sm mx-auto border border-slate-100">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">🌱 Early testing opens</li>
                                <li className="flex items-center gap-2">✨ New reflections are available</li>
                                <li className="flex items-center gap-2">🗣 We need your voice to shape Kaika AI</li>
                            </ul>
                        </div>
                        <div className="text-slate-500 mb-8 italic">
                            <p>Until then, take care of your mind — gently.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
