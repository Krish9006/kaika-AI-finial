export const HeroIllustration = () => (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="200" fill="url(#grad1)" className="animate-[pulse_4s_infinite]" />
        <circle cx="350" cy="350" r="150" fill="url(#grad2)" className="animate-[pulse_5s_infinite]" />

        {/* Abstract Mind Shapes */}
        <path d="M150 250 C150 150 350 150 350 250 C350 350 150 350 150 250" stroke="#4f46e5" strokeWidth="2" strokeDasharray="10 10" className="animate-[spin_20s_linear_infinite] origin-center opacity-30" />
        <path d="M180 250 C180 180 320 180 320 250 C320 320 180 320 180 250" stroke="#f59e0b" strokeWidth="2" className="animate-[spin_15s_linear_infinite_reverse] origin-center opacity-40" />

        {/* Central Clarity Graphic */}
        <g transform="translate(250, 250)">
            <circle r="40" fill="white" className="drop-shadow-lg" />
            <path d="M-15 0 L-5 10 L15 -10" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating Particles */}
        <circle cx="100" cy="100" r="5" fill="#4f46e5" className="animate-[bounce_3s_infinite]" />
        <circle cx="400" cy="400" r="8" fill="#f59e0b" className="animate-[bounce_4s_infinite_delay-100]" />
        <circle cx="400" cy="100" r="6" fill="#10b981" className="animate-[bounce_5s_infinite_delay-200]" />
    </svg>
);

export const ProblemIllustration = () => (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
        {/* Chaos Lines */}
        <path d="M50 150 Q100 50 150 150 T250 150 T350 150" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite]" />
        <path d="M50 100 Q150 200 250 100 T350 100" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

        {/* Noise Particles */}
        {[...Array(10)].map((_, i) => (
            <circle key={i} cx={Math.random() * 400} cy={Math.random() * 300} r={Math.random() * 8 + 2} fill={["#ef4444", "#3b82f6", "#10b981"][i % 3]} opacity="0.2" className="animate-pulse" />
        ))}
    </svg>
);

export const BloomingIllustration = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path fill="#FCE7F3" d="M41.5,-51.3C52.1,-43.6,58.3,-30.1,62.8,-15.7C67.3,-1.3,70.1,14,64.3,26.1C58.5,38.2,44.1,47,30.3,51.8C16.5,56.7,3.3,57.5,-11.2,58.8C-25.7,60.1,-41.5,61.9,-53.6,54.7C-65.7,47.5,-74.1,31.3,-74.6,15.1C-75.1,-1.1,-67.7,-17.3,-56.9,-29.4C-46.1,-41.5,-31.9,-49.5,-18.3,-51.7C-4.7,-53.9,8.3,-50.3,21,-47.9" transform="translate(100 100) scale(1.1)" />
        <path fill="#fee2e2" d="M36.2,-44.6C45.3,-35.1,50.1,-22.1,52.3,-8.6C54.5,4.9,54.1,18.9,48.2,30.9C42.3,42.9,30.9,52.9,17.9,56.5C4.9,60.1,-9.7,57.3,-22.7,51.3C-35.7,45.3,-47.1,36.1,-52.6,24.4C-58.1,12.7,-57.7,-1.5,-51.9,-13.2C-46.1,-24.9,-34.9,-34.1,-23.6,-42.1C-12.3,-50.1,-0.9,-56.9,9.8,-55.8" transform="translate(100 100)" />
        <circle cx="100" cy="100" r="15" fill="#ec4899" className="animate-pulse" />
    </svg>
);
