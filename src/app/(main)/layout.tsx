import { SpiralWrapper } from '@/components/ui/SpiralWrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopContactBar } from '@/components/layout/TopContactBar';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | OPPA Services',
    default: 'OPPA Services | ICT Solutions Provider'
  },
  description: 'Leading ICT System Integrator delivering cost-effective, future-proof solutions across Africa',
  keywords: ['ICT', 'Audio Visual', 'Security Systems', 'Networking', 'Kenya'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-oppa-light min-h-screen`}>
        <SpiralWrapper>
          <TopContactBar />
          <Navigation />
          <main className="pt-24 relative z-10"> {/* Content above spiral */}
            {children}
          </main>
          <Footer />
        </SpiralWrapper>
      </body>
    </html>
  );
}