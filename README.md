# ISIB Zed - Publish-ready Vite layihəsi

Bu layihə real domenə bağlanıb yayımlanması üçün hazırlanıb.

## Edilən əsas düzəlişlər

- `Müraciət et` düymələri email əvəzinə birbaşa telefon nömrəsinə yönləndirildi.
- Logo yeni brend vizualı ilə yeniləndi.
- Mobil görünüş yaxşılaşdırıldı.
- Komanda bölməsi əlavə olundu.
- İsmayıl üçün AI chatbot və avtomatlaşdırma rolu komanda bölməsində əlavə olundu.
- `WEB SAYT • AI CHATBOT • AVTOMATLAŞDIRMA • KİBERTƏHLÜKƏSİZLİK` hissəsi daha səliqəli badge-lər şəklinə salındı.
- SEO üçün `title`, `description`, canonical, Open Graph, JSON-LD schema əlavə edildi.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `logo-mark.png` və `og-cover.png` əlavə edildi.
- Fayl adı konflikti yaradan `Cta.tsx` / `CTA.tsx` problemi aradan qaldırıldı.

## Lokal işə salmaq

```bash
npm install
npm run build
npm run dev
```

## Domen və indeksləmə üçün son addımlar

1. Saytı hostingə deploy et.
2. Domeni `https://isibzed.com` olaraq bağla.
3. Google Search Console-da domain property əlavə et.
4. `https://isibzed.com/sitemap.xml` sitemap-ini Search Console-a göndər.
5. `/#xidmetler`, `/#komanda`, `/#ustunlukler`, `/#proses`, `/#elaqe` ayrıca səhifə kimi indekslənmir; bunlar ana səhifənin hissələridir.

## Qeyd

Əgər domen `www.isibzed.com` ilə də açılacaqsa, canonical və hosting redirect-lərini əsas domenə (`https://isibzed.com/`) yönləndir.


## Cloudflare Pages üçün qeyd

Əgər Cloudflare Pages-də build zamanı dependency install xətası alırdınsa, səbəb `package-lock.json` içində private registry linkləri olması idi. Bu paket indi public npm registry ilə uyğunlaşdırılıb.

Cloudflare Pages ayarları:

```bash
Build command: npm run build
Build output directory: dist
```

## Firebase Hosting ilə deploy

```bash
npm install
npm run build
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

`firebase.json` hazır əlavə olunub. Sadəcə öz Firebase project-ini seçib domeni bağlamaq qalır.
