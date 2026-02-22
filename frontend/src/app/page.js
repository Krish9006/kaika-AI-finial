"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HighlightCard from "@/components/HighlightCard";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero onOpenModal={openModal} />
      <Features />
      <HighlightCard />
      <Services />
      <Process />
      <Testimonials />
      {/* 
      <Problem />
      <Differentiation />
      <HowItWorks />
      <WhoItIsFor />
      <Trust />
      */}
      <Footer onOpenModal={openModal} />

      <EarlyAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
