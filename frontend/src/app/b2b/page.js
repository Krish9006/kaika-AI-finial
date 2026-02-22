import B2BHero from "@/components/b2b/B2BHero";
import OrganizationalProblem from "@/components/b2b/OrganizationalProblem";
import PilotProgram from "@/components/b2b/PilotProgram";
import InsightReport from "@/components/b2b/InsightReport";
import TrustCompliance from "@/components/b2b/TrustCompliance";
import Footer from "@/components/Footer";

export default function B2BPage() {
    return (
        <main className="bg-white text-slate-900 overflow-x-hidden">
            <B2BHero />
            <OrganizationalProblem />
            <PilotProgram />
            <InsightReport />
            <TrustCompliance />
            <Footer />
        </main>
    );
}
