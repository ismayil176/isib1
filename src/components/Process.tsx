import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Tələblərin analizi',
    description: 'Biznes ehtiyaclarınızı və hədəflərinizi öyrənərək ən uyğun rəqəmsal həlli planlaşdırırıq.',
  },
  {
    number: '02',
    title: 'Dizayn və planlama',
    description: 'Sayt, chatbot və ya avtomatlaşdırma arxitekturasını qurur, istifadəçi təcrübəsini optimallaşdırırıq.',
  },
  {
    number: '03',
    title: 'İnkişaf və inteqrasiya',
    description: 'Təsdiqlənmiş plan əsasında sistemi hazırlayır, mövcud iş axınlarınıza inteqrasiya edirik.',
  },
  {
    number: '04',
    title: 'Test və təhvil',
    description: 'Layihəni mobil, masaüstü və performans baxımından test edib tam işlək vəziyyətdə təqdim edirik.',
  },
];

export default function Process() {
  return (
    <section id="proses" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">İş prosesi</h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Layihənizin ideyadan real məhsula çevrilməsi üçün tətbiq etdiyimiz peşəkar və ardıcıl iş prosesi.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index !== steps.length - 1 && (
                <div className="absolute left-[60%] top-8 hidden h-px w-[80%] bg-slate-200 xl:block" />
              )}

              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl font-bold text-blue-600 shadow-sm">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="leading-7 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
