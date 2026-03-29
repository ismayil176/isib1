import { motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/site';

const navItems = [
  { href: '#xidmetler', label: 'Xidmətlər' },
  { href: '#komanda', label: 'Komanda' },
  { href: '#ustunlukler', label: 'Üstünlüklər' },
  { href: '#proses', label: 'İş Prosesi' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.name} ana səhifə`}>
          <img
            src="/logo.jpeg"
            alt={`${siteConfig.name} logo`}
            className="h-11 w-auto rounded-xl object-cover shadow-sm sm:h-12"
          />
          <div className="hidden sm:block">
            <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Premium rəqəmsal həllər</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <Phone className="h-4 w-4" />
            Müraciət et
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label={isOpen ? 'Menyunu bağla' : 'Menyunu aç'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-slate-700 transition-colors hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.phoneHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
