import { motion } from 'motion/react';
import { Bot, Globe, ShieldCheck, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Web saytlar',
    description: 'Brendinizə uyğun, sürətli və mobil cihazlarda ideal görünən saytlar.',
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'AI chatbot',
    description: 'Müştəri sorğularını cavablayan və satış prosesini sürətləndirən ağıllı həllər.',
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: 'Avtomatlaşdırma',
    description: 'Təkrarlanan işləri sistemləşdirən workflow və inteqrasiya quruluşu.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Kibertəhlükəsizlik',
    description: 'Sayt və əsas xidmətlər üçün ilkin təhlükəsizlik və qoruma yanaşması.',
  },
];

export default function Services() {
  return (
    <section id="xidmetler" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Əsas xidmət istiqamətləri</h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Biznesinizin rəqəmsal transformasiyası və təhlükəsizliyi üçün təqdim etdiyimiz başlıca həllər.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[1.75rem] border border-slate-100 bg-slate-50 p-7 transition-colors duration-300 hover:border-blue-100 hover:bg-blue-50/50 sm:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="leading-7 text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
