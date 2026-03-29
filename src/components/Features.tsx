import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Landing page və korporativ saytlar',
    desc: 'Sürətli, estetik və satış yönümlü quruluş.',
  },
  {
    title: 'Müştəri cavablarını avtomatlaşdıran sistemlər',
    desc: 'FAQ, lead toplama və yönləndirmə axını.',
  },
  {
    title: 'Təkrarlanan işləri sadələşdirən həllər',
    desc: 'Formlar, bildirişlər və daxili proses axınları.',
  },
  {
    title: 'Rəqəmsal sistemlər üçün təhlükəsizlik',
    desc: 'Risklərin azaldılması və ilkin qoruma yanaşması.',
  },
];

export default function Features() {
  return (
    <section id="ustunlukler" className="overflow-hidden bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Rəqəmsal sistemlərinizin gücü</h2>
            <p className="mb-8 text-base leading-8 text-slate-300 sm:text-lg">
              Sürətli, təhlükəsiz və avtomatlaşdırılmış həllərlə biznesinizin səmərəliliyini artırırıq. Hər bir detal sizin uğurunuz üçün düşünülüb.
            </p>

            <div className="grid gap-5 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-400" />
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-7 text-slate-300 sm:text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 blur-lg" />
            <video
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative h-[280px] w-full rounded-3xl object-cover shadow-2xl sm:h-[380px] lg:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
