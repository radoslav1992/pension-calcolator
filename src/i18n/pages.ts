import type { Lang } from '../lib/routes';

export interface Section {
  h: string;
  ps: string[];
}

export interface AboutT {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: Section[];
  ctaTitle: string;
  ctaBody: string;
  ctaBtn: string;
}

export const aboutT: Record<Lang, AboutT> = {
  bg: {
    metaTitle: 'За нас — Пенсионен калкулатор',
    metaDescription:
      'Кой стои зад Пенсионния калкулатор, как изчисляваме прогнозите и защо информацията е безплатна и независима.',
    h1: 'За нас',
    lead: 'Пенсионен калкулатор е независим информационен сайт, който помага на хората в България да планират пенсионирането си — безплатно, разбираемо и без регистрация.',
    sections: [
      {
        h: 'Нашата мисия',
        ps: [
          'Пенсионните правила в България се променят почти всяка година — възраст, стаж, коефициенти, параметри на бюджета на ДОО. Официалната информация е разпръсната в закони и институционални сайтове и често е трудна за разчитане.',
          'Нашата цел е да преведем тези правила на човешки език и да ги превърнем в инструменти, с които всеки може да си отговори на два въпроса: кога мога да се пенсионирам и колко ще получавам.',
        ],
      },
      {
        h: 'Как изчисляваме',
        ps: [
          'Калкулаторът стъпва на формулите от Кодекса за социално осигуряване (чл. 68, 68а, 70 и 9а) и на актуалните параметри за 2026 г. — среден и минимален осигурителен доход, тежест на осигурителния стаж и графика за нарастване на възрастта.',
          'Всички изчисления се извършват във вашия браузър. Не изпращаме и не съхраняваме въведените от вас данни.',
        ],
      },
      {
        h: 'Какво не сме',
        ps: [
          'Не сме държавна институция и не сме свързани с НОИ, НАП или пенсионните дружества. Резултатите са ориентировъчни прогнози, а не официални изчисления и не представляват финансов или правен съвет. За обвързваща справка се обърнете към НОИ с данните от осигурителното си досие.',
        ],
      },
      {
        h: 'Актуалност на данните',
        ps: [
          'Параметрите се актуализират при всяка промяна в Закона за бюджета на държавното обществено осигуряване и свързаното законодателство. Датата на последната актуализация е посочена на всяка страница. Ако забележите неточност — пишете ни през страницата за контакт.',
        ],
      },
    ],
    ctaTitle: 'Изчислете своята пенсия',
    ctaBody:
      'Четири безплатни калкулатора: дата на пенсиониране, държавна пенсия, втори стълб и недостигащ стаж.',
    ctaBtn: 'Към калкулатора',
  },
  en: {
    metaTitle: 'About us — Pension Calculator',
    metaDescription:
      'Who is behind the Pension Calculator, how we calculate estimates, and why the information is free and independent.',
    h1: 'About us',
    lead: 'Pension Calculator is an independent information site that helps people in Bulgaria plan their retirement — free, clear, and with no registration.',
    sections: [
      {
        h: 'Our mission',
        ps: [
          'Bulgarian pension rules change almost every year — age, service, coefficients, social-insurance budget parameters. Official information is scattered across laws and institutional websites and is often hard to read.',
          'Our goal is to translate those rules into plain language and turn them into tools that answer two questions: when can I retire, and how much will I receive.',
        ],
      },
      {
        h: 'How we calculate',
        ps: [
          'The calculator follows the formulas of the Social Insurance Code (Art. 68, 68a, 70 and 9a) and the current 2026 parameters — average and minimum insurable income, service weight, and the age-increase schedule.',
          'All calculations run in your browser. We do not transmit or store the data you enter.',
        ],
      },
      {
        h: 'What we are not',
        ps: [
          'We are not a state institution and are not affiliated with NOI, NRA or the pension companies. Results are indicative estimates, not official calculations, and do not constitute financial or legal advice. For a binding figure, contact NOI with your insurance record.',
        ],
      },
      {
        h: 'Keeping data current',
        ps: [
          'Parameters are updated with every change to the State Social Insurance Budget Act and related legislation. The date of the last update is shown on each page. If you spot an inaccuracy, let us know via the contact page.',
        ],
      },
    ],
    ctaTitle: 'Calculate your pension',
    ctaBody:
      'Four free calculators: retirement date, state pension, second pillar and missing service.',
    ctaBtn: 'Go to calculator',
  },
};

export interface ContactT {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  emailLabel: string;
  emailNote: string;
  noiLabel: string;
  noiNote: string;
  formTitle: string;
  fName: string;
  fEmail: string;
  fMsg: string;
  fSend: string;
  thanks: string;
  privacyNote: string;
}

export const contactT: Record<Lang, ContactT> = {
  bg: {
    metaTitle: 'Контакти — Пенсионен калкулатор',
    metaDescription:
      'Свържете се с екипа на Пенсионен калкулатор — въпроси, сигнали за неточности и предложения.',
    h1: 'Контакти',
    lead: 'Имате въпрос, забелязали сте неточност или искате да предложите нова функция? Пишете ни — отговаряме в рамките на 2 работни дни.',
    emailLabel: 'Електронна поща',
    emailNote: 'За общи въпроси, сигнали за неточности и партньорства.',
    noiLabel: 'Официална информация — НОИ',
    noiNote:
      'За обвързващи справки по вашето осигурително досие се обърнете към Националния осигурителен институт.',
    formTitle: 'Форма за връзка',
    fName: 'Име',
    fEmail: 'Имейл',
    fMsg: 'Съобщение',
    fSend: 'Изпрати',
    thanks: 'Благодарим ви! Съобщението е изпратено — ще се свържем с вас възможно най-скоро.',
    privacyNote:
      'Изпращайки формата, се съгласявате данните ви да бъдат използвани единствено за отговор на запитването. Повече в политиката за поверителност.',
  },
  en: {
    metaTitle: 'Contact — Pension Calculator',
    metaDescription:
      'Get in touch with the Pension Calculator team — questions, error reports and suggestions.',
    h1: 'Contact',
    lead: 'Have a question, spotted an inaccuracy, or want to suggest a feature? Write to us — we reply within 2 business days.',
    emailLabel: 'Email',
    emailNote: 'For general questions, error reports and partnerships.',
    noiLabel: 'Official information — NOI',
    noiNote:
      'For binding statements based on your insurance record, contact the National Social Security Institute.',
    formTitle: 'Contact form',
    fName: 'Name',
    fEmail: 'Email',
    fMsg: 'Message',
    fSend: 'Send',
    thanks: 'Thank you! Your message has been sent — we will get back to you as soon as possible.',
    privacyNote:
      'By submitting the form you agree that your data will be used solely to answer your enquiry. See the privacy policy for details.',
  },
};

export interface PrivacyT {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  updated: string;
  lead: string;
  sections: Section[];
}

export const privacyT: Record<Lang, PrivacyT> = {
  bg: {
    metaTitle: 'Политика за поверителност — Пенсионен калкулатор',
    metaDescription:
      'Как Пенсионен калкулатор обработва лични данни, какви бисквитки използва и какви са правата ви по GDPR.',
    h1: 'Политика за поверителност',
    updated: 'Последна актуализация: 1 юли 2026 г.',
    lead: 'Тази политика обяснява какви данни обработва сайтът Пенсионен калкулатор, с каква цел и какви права имате съгласно Общия регламент за защита на данните (GDPR).',
    sections: [
      {
        h: '1. Кой отговаря за данните',
        ps: [
          'Администратор на данните е екипът на Пенсионен калкулатор. За всички въпроси, свързани с лични данни, можете да се свържете с нас на info@pensionen-kalkulator.bg или през страницата за контакт.',
        ],
      },
      {
        h: '2. Данни, които НЕ събираме',
        ps: [
          'Всички изчисления — възраст, стаж, доходи, суми по партиди — се извършват изцяло във вашия браузър. Тези данни не се изпращат към наши сървъри, не се съхраняват и не са достъпни за нас или за трети страни.',
        ],
      },
      {
        h: '3. Данни, които събираме',
        ps: [
          'Форма за контакт: име, имейл и текст на съобщението — използваме ги единствено за да отговорим на запитването ви и ги изтриваме до 12 месеца след приключването му.',
          'Технически данни: при зареждане на сайта сървърът обработва IP адрес и данни за браузъра в журнални файлове за срок до 30 дни — единствено за сигурност и отстраняване на проблеми.',
        ],
      },
      {
        h: '4. Бисквитки и локално съхранение',
        ps: [
          'Задължителни: запазваме избора ви на език и решението ви за бисквитките в локалното хранилище на браузъра. Те не съдържат лични данни и не напускат устройството ви.',
          'Аналитични и рекламни: при дадено съгласие сайтът може да използва Google Analytics и Google AdSense, които поставят бисквитки за измерване на трафика и показване на реклами. Google може да използва данните съгласно собствената си политика за поверителност — можете да управлявате рекламните си настройки на adssettings.google.com.',
          'Можете да оттеглите съгласието си по всяко време, като изчистите бисквитките на браузъра си — банерът за съгласие ще се появи отново.',
        ],
      },
      {
        h: '5. Правно основание',
        ps: [
          'Обработваме данни на основание съгласие (чл. 6, пар. 1, б. „а" GDPR) за аналитичните и рекламните бисквитки, легитимен интерес (б. „е") за сигурността на сайта и изпълнение на искане (б. „б") при отговор на запитвания.',
        ],
      },
      {
        h: '6. Вашите права',
        ps: [
          'Имате право на достъп, коригиране, изтриване, ограничаване на обработката, преносимост и възражение, както и право на жалба до Комисията за защита на личните данни (КЗЛД), бул. „Проф. Цветан Лазаров" № 2, София 1592, www.cpdp.bg.',
        ],
      },
      {
        h: '7. Промени в политиката',
        ps: [
          'При съществени промени ще актуализираме датата в началото на страницата. Съветваме ви да преглеждате политиката периодично.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Privacy policy — Pension Calculator',
    metaDescription:
      'How Pension Calculator processes personal data, what cookies it uses and your rights under GDPR.',
    h1: 'Privacy policy',
    updated: 'Last updated: 1 July 2026',
    lead: 'This policy explains what data the Pension Calculator site processes, for what purpose, and what rights you have under the General Data Protection Regulation (GDPR).',
    sections: [
      {
        h: '1. Who is responsible for your data',
        ps: [
          'The data controller is the Pension Calculator team. For any questions about personal data, contact us at info@pensionen-kalkulator.bg or via the contact page.',
        ],
      },
      {
        h: '2. Data we do NOT collect',
        ps: [
          'All calculations — age, service, income, account balances — run entirely in your browser. This data is never sent to our servers, is not stored, and is not accessible to us or any third party.',
        ],
      },
      {
        h: '3. Data we collect',
        ps: [
          'Contact form: name, email and message text — used solely to answer your enquiry and deleted within 12 months of its resolution.',
          'Technical data: when the site loads, the server processes your IP address and browser details in log files for up to 30 days — solely for security and troubleshooting.',
        ],
      },
      {
        h: '4. Cookies and local storage',
        ps: [
          'Essential: we store your language choice and cookie decision in your browser’s local storage. These contain no personal data and never leave your device.',
          'Analytics and advertising: with your consent, the site may use Google Analytics and Google AdSense, which set cookies to measure traffic and serve ads. Google may use this data under its own privacy policy — you can manage your ad settings at adssettings.google.com.',
          'You can withdraw consent at any time by clearing your browser cookies — the consent banner will reappear.',
        ],
      },
      {
        h: '5. Legal basis',
        ps: [
          'We process data on the basis of consent (Art. 6(1)(a) GDPR) for analytics and advertising cookies, legitimate interest (Art. 6(1)(f)) for site security, and performance of a request (Art. 6(1)(b)) when answering enquiries.',
        ],
      },
      {
        h: '6. Your rights',
        ps: [
          'You have the right of access, rectification, erasure, restriction of processing, portability and objection, as well as the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (CPDP), 2 Prof. Tsvetan Lazarov Blvd., Sofia 1592, www.cpdp.bg.',
        ],
      },
      {
        h: '7. Changes to this policy',
        ps: [
          'For material changes we will update the date at the top of this page. We advise you to review the policy periodically.',
        ],
      },
    ],
  },
};
