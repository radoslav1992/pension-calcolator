export type Lang = 'bg' | 'en';

export type PageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'guide2026'
  | 'guideService'
  | 'guideUpf';

/**
 * Canonical path for every page in every language. Bulgarian (the default
 * locale) lives at the root with transliterated slugs; English under /en/.
 * Used for navigation, canonical URLs and hreflang alternates.
 */
export const routes: Record<PageId, Record<Lang, string>> = {
  home: { bg: '/', en: '/en/' },
  about: { bg: '/za-nas/', en: '/en/about/' },
  contact: { bg: '/kontakti/', en: '/en/contact/' },
  privacy: { bg: '/poveritelnost/', en: '/en/privacy/' },
  guide2026: { bg: '/pensionirane-2026/', en: '/en/retirement-2026/' },
  guideService: { bg: '/proverka-na-stazh/', en: '/en/check-service/' },
  guideUpf: { bg: '/upf-ili-noi/', en: '/en/upf-or-noi/' },
};

export const otherLang = (lang: Lang): Lang => (lang === 'bg' ? 'en' : 'bg');

/** Footer link order used across the whole site. */
export const footerPageIds: PageId[] = [
  'home',
  'about',
  'contact',
  'privacy',
  'guide2026',
  'guideService',
  'guideUpf',
];
