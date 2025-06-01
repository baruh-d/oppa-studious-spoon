import { Hero } from '@/components/sections/Hero/Hero';
import { ServicesSection } from '@/components/sections/Services/Services';
import { PartnersSection } from '@/components/sections/Partners';
import { CTASection } from '@/components/sections/CTA';
import { ContactSection } from '@/components/sections/contact/Contact';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ServicesSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}