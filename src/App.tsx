/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Məzmuna keç
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Team />
        <Features />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
