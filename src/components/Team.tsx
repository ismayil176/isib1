import { motion } from 'motion/react';
import { BriefcaseBusiness, Code2, Megaphone, ShieldCheck } from 'lucide-react';

const teamMembers = [
  {
    name: 'İbrahim',
    role: 'Project Manager',
    image: '/team/ibrahim.jpeg',
    bio:
      'Layihələrin planlanması, prioritetləndirilməsi və icra prosesinin koordinasiyasına cavabdehdir. Müştəri ilə kommunikasiyanın və iş axınının səmərəli idarə olunmasını təmin edir. Kibertəhlükəsizlik üzrə bilikləri isə layihələrə əlavə təhlükəsizlik baxışı qazandırır.',
    tags: ['Layihə idarəetməsi', 'Müştəri koordinasiyası', 'Təhlükəsizlik baxışı'],
    accent: 'from-cyan-500 to-blue-600',
    icon: <BriefcaseBusiness className="h-5 w-5" />,
  },
  {
    name: 'Samir',
    role: 'Digital Marketing & Social Media Specialist',
    image: '/team/samir.jpeg',
    bio:
      'Instagram və TikTok üçün kontent planlaması, postların hazırlanması və vizual axının idarə olunmasına fokuslanır. Brendin sosial media təqdimatını daha sistemli, peşəkar və davamlı şəkildə quraraq marketinq kommunikasiyasını gücləndirir.',
    tags: ['Instagram & TikTok', 'Kontent strategiyası', 'Rəqəmsal marketinq'],
    accent: 'from-violet-500 to-fuchsia-600',
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    name: 'İsmayıl',
    role: 'Full Stack Developer • AI Chatbot & Avtomatlaşdırma',
    image: '/team/ismayil.jpeg',
    bio:
      'Veb layihələrin front-end və back-end hissələrində çalışır, funksional və dayanıqlı həllər qurur. Eyni zamanda AI chatbot və avtomatlaşdırma həlləri hazırlayır. Kibertəhlükəsizlik üzrə baza bilikləri isə development prosesinə daha təhlükəsizlik yönümlü yanaşma əlavə edir.',
    tags: ['Full Stack', 'AI Chatbot', 'Avtomatlaşdırma', 'Təhlükəsizlik yanaşması'],
    accent: 'from-emerald-500 to-teal-600',
    icon: <Code2 className="h-5 w-5" />,
  },
];

export default function Team() {
  return (
    <section id="komanda" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Komandamız
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Layihələri nəticəyə çevirən əsas heyət
          </h2>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            ISIB Zed daxilində layihə idarəetməsi, development, marketinq və kibertəhlükəsizlik istiqamətləri vahid komandada birləşir.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={`${member.name} portreti`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t ${member.accent} opacity-50 blur-3xl`} />
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{member.role}</p>
                  </div>
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-white shadow-lg`}>
                    {member.icon}
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-7 text-slate-600 sm:text-base">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
