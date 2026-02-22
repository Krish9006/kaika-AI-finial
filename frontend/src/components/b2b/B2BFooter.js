export default function B2BFooter() {
    return (
        <footer className="bg-white border-t border-slate-100 py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Kaika AI</span>
                        <span className="text-slate-300">|</span>
                        <span>For Organizations</span>
                    </div>

                    <div className="flex gap-6 text-slate-400">
                        <span>© 2024 Kaika AI</span>
                        <a href="/" className="hover:text-indigo-600 transition-colors">Back to Home</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
