import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function CTA() {
  return (
    <section id="elaqe" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-center md:rounded-[3rem] md:p-16"
        >
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-[128px] mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500 opacity-50 blur-[128px] mix-blend-multiply" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100">
              <Phone className="h-4 w-4" />
              Birbaşa əlaqə: {siteConfig.phoneDisplay}
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">Layihənizi bizimlə müzakirə edin</h2>
            <p className="mb-10 text-base leading-8 text-slate-300 sm:text-lg">
              Sizin üçün uyğun sayt, AI chatbot və ya rəqəmsal avtomatlaşdırma həllini hazırlayaq. “Müraciət et” düyməsi artıq birbaşa nömrəyə zəng yönləndirir.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500"
              >
                Müraciət et
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.emailHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10"
              >
                Email göndər
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
