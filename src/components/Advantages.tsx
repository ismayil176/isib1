import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  {
    title: "Peşəkar Komanda",
    description: "İllərin təcrübəsinə malik mütəxəssislərimiz hər bir layihəyə fərdi və detallı yanaşır."
  },
  {
    title: "Vaxtında Təhvil",
    description: "Zamanın dəyərini bilirik. Bütün layihələri əvvəlcədən təyin olunmuş qrafikə tam uyğun təhvil veririk."
  },
  {
    title: "Daimi Dəstək",
    description: "Layihə bitdikdən sonra da texniki dəstək, yenilənmə və inkişaf üçün hər zaman yanınızdayıq."
  },
  {
    title: "İnnovativ Yanaşma",
    description: "Ən son texnologiyaları və qlobal trendləri izləyərək biznesinizə rəqabət üstünlüyü qazandırırıq."
  }
];

export default function Advantages() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Niyə Məhz Bizi Seçməlisiniz?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Biz sadəcə xidmət göstərmirik, sizin rəqəmsal tərəfdaşınıza çevrilirik. Uğurlu nəticələr əldə etmək üçün şəffaflıq, keyfiyyət və davamlı inkişaf prinsiplərinə əsaslanırıq.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{adv.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-blue-600/20 absolute -top-12 -right-12 blur-3xl w-96 h-96"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Komanda işi" 
              className="rounded-2xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
