import type { Lang } from '../lib/routes';

export interface CommonT {
  brand: string;
  siteName: string;
  navAbout: string;
  navContact: string;
  back: string;
  readMore: string;
  relatedTitle: string;
  footLinks: string[];
  smallPrint: string;
  cookieText: string;
  cookieOk: string;
  cookieNo: string;
  langLabel: string;
  skipToContent: string;
  notFoundTitle: string;
  notFoundBody: string;
  notFoundCta: string;
}

export const common: Record<Lang, CommonT> = {
  bg: {
    brand: 'Пенсионен калкулатор',
    siteName: 'Пенсионен калкулатор',
    navAbout: 'За нас',
    navContact: 'Контакти',
    back: 'Към калкулатора',
    readMore: 'Прочети',
    relatedTitle: 'Свързани ръководства',
    footLinks: [
      'Калкулатор',
      'За нас',
      'Контакти',
      'Поверителност',
      'Ръководство 2026',
      'Проверка на стаж',
      'УПФ или НОИ',
    ],
    smallPrint:
      'Информацията на сайта е с ориентировъчен характер и не представлява финансов или правен съвет. © 2026 Пенсионен калкулатор.',
    cookieText:
      'Използваме бисквитки за запазване на предпочитанията ви и за анализ на трафика. Приемайки, се съгласявате с политиката ни за поверителност.',
    cookieOk: 'Приемам',
    cookieNo: 'Отказвам',
    langLabel: 'Език',
    skipToContent: 'Към съдържанието',
    notFoundTitle: 'Страницата не е намерена',
    notFoundBody:
      'Страницата, която търсите, не съществува или е преместена. Проверете адреса или се върнете към калкулатора.',
    notFoundCta: 'Към калкулатора',
  },
  en: {
    brand: 'Pension Calculator',
    siteName: 'Pension Calculator',
    navAbout: 'About',
    navContact: 'Contact',
    back: 'Back to calculator',
    readMore: 'Read more',
    relatedTitle: 'Related guides',
    footLinks: [
      'Calculator',
      'About',
      'Contact',
      'Privacy',
      '2026 guide',
      'Check your service',
      'UPF or NOI',
    ],
    smallPrint:
      'Information on this site is indicative and does not constitute financial or legal advice. © 2026 Pension Calculator.',
    cookieText:
      'We use cookies to remember your preferences and analyse traffic. By accepting you agree to our privacy policy.',
    cookieOk: 'Accept',
    cookieNo: 'Decline',
    langLabel: 'Language',
    skipToContent: 'Skip to content',
    notFoundTitle: 'Page not found',
    notFoundBody:
      'The page you are looking for does not exist or has been moved. Check the address or go back to the calculator.',
    notFoundCta: 'Go to calculator',
  },
};

export const locales: Record<Lang, string> = { bg: 'bg-BG', en: 'en-GB' };
export const ogLocales: Record<Lang, string> = { bg: 'bg_BG', en: 'en_GB' };
