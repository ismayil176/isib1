import { motion } from 'motion/react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import NetworkAnimation from './NetworkAnimation';

const highlights = ['WEB SAYT', 'AI CHATBOT', 'AVTOMATLAŞDIRMA', 'KİBERTƏHLÜKƏSİZLİK'];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-50 pb-14 pt-28 sm:pb-16 sm:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 opacity-25">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400 to-transparent blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-[11px] font-semibold tracking-[0.14em] text-slate-700 shadow-sm sm:min-h-0 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Biznesiniz üçün{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                premium görünüşlü
              </span>{' '}
              rəqəmsal həllər.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
              Sürətli, mobil cihazlarda qüsursuz görünən və etibar yaradan web saytlar, AI chatbotlar və avtomatlaşdırma həlləri ilə biznesinizi daha güclü təqdim edin.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
              >
                Müraciət et
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#xidmetler"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-900 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                Xidmətlərə bax
              </a>
            </div>

            <a
              href={siteConfig.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
            >
              <Phone className="h-4 w-4" />
              Birbaşa zəng: {siteConfig.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Təhlükəsizlik düşüncəsi ilə qurulan rəqəmsal həllər
            </div>
            <NetworkAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
