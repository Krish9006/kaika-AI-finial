import { useState } from 'react';

const QUESTIONS = [
    {
        id: 1,
        question: "How do you feel about your current direction in life?",
        options: [
            "I feel completely lost.",
            "I have some idea, but I'm doubtful.",
            "I know where I'm going, but I'm exhausted.",
            "I feel aligned and energized."
        ]
    },
    {
        id: 2,
        question: "What drains your energy the most right now?",
        options: [
            "Performing at work without purpose.",
            "Social expectations and noise.",
            "Overthinking every decision.",
            "Not having enough time for myself."
        ]
    },
    {
        id: 3,
        question: "If you could change one thing tomorrow, what would it be?",
        options: [
            "More clarity on my purpose.",
            "More calmness in my day.",
            "Better alignment in my career.",
            "Just a break from everything."
        ]
    }
];

export default function SurveyModal({ isOpen, onClose, onOpenEarlyAccess }) {
    const [step, setStep] = useState('intro'); // intro, question, reflection
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    if (!isOpen) return null;

    const handleStart = () => {
        setStep('question');
    };

    const handleAnswer = (answer) => {
        setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 300);
        } else {
            setTimeout(() => {
                setStep('reflection');
            }, 300);
        }
    };

    const handleFinish = () => {
        onClose();
        onOpenEarlyAccess(); // Loop back to Early Access as per workflow
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {step === 'intro' && (
                    <div className="text-center animate-in fade-in zoom-in duration-300">
                        <span className="inline-block text-4xl mb-6">🌿</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            A quiet moment to reflect — just for you
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-lg mx-auto">
                            This short survey helps you explore your sense of purpose, direction, and mental well-being.
                        </p>

                        <div className="bg-indigo-50/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                            <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">What to expect:</h3>
                            <ul className="space-y-3 text-slate-600 font-medium">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    ⏱ 5–7 minutes (condensed for preview)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    💭 Reflective questions (not clinical)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    🔒 Anonymous unless you choose otherwise
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={handleStart}
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-full shadow-xl shadow-slate-900/20 active:scale-95 transition-all text-lg"
                        >
                            Begin the Reflection
                        </button>
                        <p className="mt-6 text-xs text-slate-400 font-medium">
                            This is not therapy or a psychological assessment.
                        </p>
                    </div>
                )}

                {step === 'question' && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-indigo-600 font-bold text-sm tracking-wide bg-indigo-50 px-3 py-1 rounded-full">
                                QUESTION {currentQuestionIndex + 1} OF {QUESTIONS.length}
                            </span>
                            <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                            {QUESTIONS[currentQuestionIndex].question}
                        </h3>

                        <div className="space-y-3">
                            {QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(option)}
                                    className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200 font-medium text-slate-700 hover:text-indigo-900 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{option}</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">→</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'reflection' && (
                    <div className="text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Thank you for reflecting.
                        </h2>

                        <div className="text-left bg-slate-50 p-8 rounded-2xl mb-8 border border-slate-100">
                            <p className="text-slate-600 mb-4 font-medium">Based on your responses, you may be:</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-center gap-2">🔹 Seeking clearer direction</li>
                                <li className="flex items-center gap-2">🔹 Navigating transition or misalignment</li>
                                <li className="flex items-center gap-2">🔹 Looking for meaning beyond productivity</li>
                            </ul>
                            <p className="mt-6 text-slate-900 font-bold border-t border-slate-200 pt-4">
                                You’re not alone — and nothing is “wrong” with you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={handleFinish}
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-all"
                            >
                                Join Early Access to Go Deeper
                            </button>
                            <button
                                onClick={onClose}
                                className="text-slate-500 font-medium hover:text-slate-800 transition-colors text-sm"
                            >
                                Close without joining
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
