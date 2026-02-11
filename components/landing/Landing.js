"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import LandingHeader from "./LandingHeader";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import FeaturesSection from "./FeaturesSection";
import ProductFeaturesSection from "./ProductFeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import DashboardPreviewSection from "./DashboardPreviewSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import LandingFooter from "./LandingFooter";
import SuzukaMotionPath from "@/components/common/SuzukaMotionPath";
import ChatBubbleMotionPath from "../common/ChatBubbleMotionPath";

export default function Landing() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const [visible, setVisible] = useState({
    hero: true,
    features: false,
    how: false,
    testimonials: false,
    pricing: false,
    faq: false,
    cta: false,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    const observe = (ref, key) => {
      if (!ref?.current) return;
      const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible((v) => ({ ...v, [key]: true }));
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );
      ob.observe(ref.current);
      observers.push(ob);
    };
    observe(heroRef, "hero");
    observe(featuresRef, "features");
    observe(howRef, "how");
    observe(testimonialsRef, "testimonials");
    observe(pricingRef, "pricing");
    observe(faqRef, "faq");
    observe(ctaRef, "cta");
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleGetStarted = () => {
    if (user) router.push("/dashboard");
    else router.push("/signup");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans antialiased">
      <LandingHeader scrolled={scrolled} loading={loading} user={user} />

      <main className="">
        <div ref={heroRef}>
          <HeroSection visible={visible.hero} onGetStarted={handleGetStarted} />
        </div>

        {/* <SuzukaMotionPath />
        <ChatBubbleMotionPath /> */}

        <ProblemSection />

        <FeaturesSection innerRef={featuresRef} />

        <ProductFeaturesSection />

        <HowItWorksSection innerRef={howRef} />

        <DashboardPreviewSection />

        <TestimonialsSection innerRef={testimonialsRef} />

        <PricingSection innerRef={pricingRef} onGetStarted={handleGetStarted} />

        <CTASection innerRef={ctaRef} onGetStarted={handleGetStarted} />

        <FAQSection innerRef={faqRef} />

        <LandingFooter />
      </main>
    </div>
  );
}
