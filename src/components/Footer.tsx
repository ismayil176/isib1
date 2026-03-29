import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt={`${siteConfig.name} logo`}
                className="h-14 w-auto rounded-xl object-cover shadow-sm"
              />
            </div>
            <p className="max-w-md leading-7 text-slate-600">
              Web saytlar, AI chatbotlar, avtomatlaşdırma və kibertəhlükəsizlik həlləri ilə biznesinizi gələcəyə daşıyırıq.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Bölmələr</h3>
            <ul className="space-y-3">
              <li><a href="#xidmetler" className="text-slate-600 transition-colors hover:text-blue-600">Xidmətlər</a></li>
              <li><a href="#komanda" className="text-slate-600 transition-colors hover:text-blue-600">Komanda</a></li>
              <li><a href="#ustunlukler" className="text-slate-600 transition-colors hover:text-blue-600">Üstünlüklər</a></li>
              <li><a href="#elaqe" className="text-slate-600 transition-colors hover:text-blue-600">Əlaqə</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Əlaqə</h3>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.emailHref} className="text-slate-600 transition-colors hover:text-blue-600">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="text-slate-600 transition-colors hover:text-blue-600">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.domain} className="text-slate-600 transition-colors hover:text-blue-600">
                  {siteConfig.plainDomain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Bütün hüquqlar qorunur.</p>
          <p>Layihələr üçün web, AI və təhlükəsizlik həlləri.</p>
        </div>
      </div>
    </footer>
  );
}
