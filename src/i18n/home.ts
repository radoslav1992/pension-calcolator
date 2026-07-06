import type { Lang } from '../lib/routes';

export interface HomeT {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  tabs: string[];
  gender: string;
  male: string;
  female: string;
  birthYear: string;
  serviceSoFar: string;
  yearsShort: string;
  serviceHint: string;
  serviceTotal: string;
  coef: string;
  coefHint: string;
  curAge: string;
  retAge: string;
  balance: string;
  salary: string;
  yield: string;
  missingMonths: string;
  missingHint: string;
  earlyMonths: string;
  basePension: string;
  r1Title: string;
  reqAge: string;
  reqService: string;
  projService: string;
  r2Title: string;
  formula: string;
  fAvgIncome: string;
  fCoef: string;
  fAccrual: string;
  deferChart: string;
  r3Title: string;
  upfFv: string;
  upfContrib: string;
  upfGrowth: string;
  upfYears: string;
  upfNote: string;
  r4Title: string;
  buyPerMonth: string;
  reduction: string;
  reducedPension: string;
  buyNote: string;
  s1Title: string;
  s1Intro: string;
  pillars: { n: string; title: string; body: string }[];
  s2Title: string;
  s2Intro: string;
  thYear: string;
  thWAge: string;
  thWSvc: string;
  thMAge: string;
  thMSvc: string;
  s3Title: string;
  s3Body1: string;
  s3Formula: string;
  s3Body2: string;
  s4Title: string;
  s4Body1: string;
  s4Body2: string;
  faqTitle: string;
  faq: [string, string][];
  guidesTitle: string;
  guides: { tag: string; title: string; desc: string }[];
  sources: string;
  dataNote: string;
  mNever: string;
  mEarly: string;
  atAge: string;
  months: string;
  disclaimer: string;
}

export const homeT: Record<Lang, HomeT> = {
  bg: {
    metaTitle: 'Пенсионен калкулатор 2026 — кога и с колко се пенсионирам в България',
    metaDescription:
      'Безплатен пенсионен калкулатор за България: кога можете да се пенсионирате, прогноза за държавна пенсия от НОИ, втори стълб (УПФ) и цена за закупуване на недостигащ стаж по правилата за 2026 г.',
    title: 'Планирай пенсията си',
    subtitle:
      'Изчисли кога можеш да се пенсионираш и колко ще получаваш — по правилата на КСО за 2026 г. Всички суми са в евро.',
    tabs: ['Кога се пенсионирам?', 'Държавна пенсия (НОИ)', 'Втори стълб (УПФ)', 'Недостигащ стаж'],
    gender: 'Пол',
    male: 'Мъж',
    female: 'Жена',
    birthYear: 'Година на раждане',
    serviceSoFar: 'Осигурителен стаж досега',
    yearsShort: 'г.',
    serviceHint: 'Приема се, че продължавате да работите без прекъсване.',
    serviceTotal: 'Общ осигурителен стаж',
    coef: 'Индивидуален коефициент',
    coefHint:
      'Съотношение между вашия доход и средния осигурителен доход за страната. При доход, равен на средния, коефициентът е 1.00.',
    curAge: 'Възраст',
    retAge: 'Пенсиониране на',
    balance: 'Натрупана сума по партидата',
    salary: 'Месечен осигурителен доход',
    yield: 'Годишна доходност',
    missingMonths: 'Недостигащ стаж',
    missingHint:
      'Можете да закупите до 5 години стаж (обучение или недостигащ стаж) — чл. 9а от КСО.',
    earlyMonths: 'По-ранно пенсиониране с',
    basePension: 'Очаквана пълна пенсия',
    r1Title: 'Най-ранна година за пенсиониране',
    reqAge: 'Изисквана възраст',
    reqService: 'Изискван стаж',
    projService: 'Вашият стаж тогава',
    r2Title: 'Прогнозна месечна пенсия',
    formula: 'Как се изчислява',
    fAvgIncome: 'Среден осиг. доход',
    fCoef: 'Инд. коефициент',
    fAccrual: 'Тежест на стажа',
    deferChart: 'Ако отложите пенсионирането',
    r3Title: 'Прогнозна пенсия от УПФ',
    upfFv: 'Прогнозна сума при пенсиониране',
    upfContrib: 'Бъдещи вноски (5%)',
    upfGrowth: 'Доход от инвестиции',
    upfYears: 'Години до пенсия',
    upfNote:
      'Пожизнена пенсия при очаквано изплащане ~17,5 години. Вноската в УПФ е 5% от осигурителния доход.',
    r4Title: 'Цена за закупуване на стаж',
    buyPerMonth: 'Цена за 1 месец стаж',
    reduction: 'Намаление при ранно пенсиониране',
    reducedPension: 'Намалена пенсия',
    buyNote:
      'Закупуването се внася върху минималния осигурителен доход за самоосигуряващи се (19,8%). Ранната пенсия се намалява с 0,4% за всеки месец и остава намалена пожизнено.',
    s1Title: 'Как работи пенсионната система в България',
    s1Intro:
      'Българският пенсионен модел стъпва на три стълба. Комбинацията от тях определя общия ви доход след пенсиониране.',
    pillars: [
      {
        n: 'Първи стълб',
        title: 'Държавно обществено осигуряване (НОИ)',
        body: 'Задължително разходопокривно осигуряване. Пенсията се изчислява от осигурителния стаж, индивидуалния коефициент и средния осигурителен доход за страната.',
      },
      {
        n: 'Втори стълб',
        title: 'Универсален пенсионен фонд (УПФ)',
        body: 'Задължителна лична партида за родените след 31.12.1959 г. Вноската е 5% от осигурителния доход и се инвестира от лицензиран частен пенсионен фонд.',
      },
      {
        n: 'Трети стълб',
        title: 'Доброволно пенсионно осигуряване',
        body: 'Допълнителни лични вноски с данъчно облекчение до 10% от годишната данъчна основа. Средствата се изплащат по избрана от вас схема.',
      },
    ],
    s2Title: 'Условия за пенсиониране по години',
    s2Intro:
      'Възрастта за пенсиониране по чл. 68 от КСО нараства плавно — до 65 години за мъжете през 2029 г. и за жените през 2037 г. Изискваният стаж достига 37 години за жените и 40 години за мъжете през 2027 г.',
    thYear: 'Година',
    thWAge: 'Жени — възраст',
    thWSvc: 'Жени — стаж',
    thMAge: 'Мъже — възраст',
    thMSvc: 'Мъже — стаж',
    s3Title: 'Как се изчислява държавната пенсия',
    s3Body1:
      'Месечната пенсия за осигурителен стаж и възраст се получава, като средният осигурителен доход за страната за 12-те месеца преди пенсионирането се умножи по вашия индивидуален коефициент и по 1,35% за всяка година осигурителен стаж (чл. 70 от КСО).',
    s3Formula:
      'Пенсия = среден осигурителен доход × индивидуален коефициент × 1,35% × години стаж',
    s3Body2:
      'Индивидуалният коефициент сравнява вашия осигурителен доход със средния за страната — доход, два пъти по-висок от средния, дава коефициент около 2,00. За всяка година отложено пенсиониране след придобиване на правото пенсията се увеличава допълнително.',
    s4Title: 'Недостигащ стаж и ранно пенсиониране',
    s4Body1:
      'Ако не ви достига стаж, можете да закупите до 5 години — време на обучение във висше училище или недостигащ стаж по чл. 9а от КСО. Вноската е 19,8% върху минималния осигурителен доход за самоосигуряващите се за всеки закупен месец и се заплаща еднократно при отпускане на пенсията.',
    s4Body2:
      'Пенсиониране до 12 месеца преди изискваната възраст е възможно при пълен осигурителен стаж, но пенсията се намалява с 0,4% за всеки недостигащ месец — и остава намалена пожизнено (чл. 68а от КСО). Затова решението за ранно пенсиониране трябва да се съпостави с очакваната продължителност на получаване.',
    faqTitle: 'Често задавани въпроси',
    faq: [
      [
        'При какви условия мога да се пенсионирам през 2026 г.?',
        'Жените се пенсионират при навършени 62 години и 6 месеца възраст и 36 години и 10 месеца осигурителен стаж, а мъжете — при 64 години и 9 месеца възраст и 39 години и 10 месеца стаж.',
      ],
      [
        'Какво става, ако нямам достатъчно стаж?',
        'Ако не отговаряте на изискванията за стаж, придобивате право на пенсия при навършване на 67 години и минимум 15 години действителен осигурителен стаж.',
      ],
      [
        'Мога ли да се пенсионирам по-рано?',
        'Да — до 12 месеца преди изискваната възраст, ако имате пълен осигурителен стаж. Пенсията се намалява с 0,4% за всеки месец по-ранно отпускане и остава намалена пожизнено.',
      ],
      [
        'Какво е индивидуален коефициент?',
        'Съотношението между вашия месечен осигурителен доход и средния за страната за същия период. Изчислява се от НОИ на база данните от осигурителното ви досие след 1999 г.',
      ],
      [
        'Кой се осигурява в универсален пенсионен фонд?',
        'Всички родени след 31 декември 1959 г., които са осигурени в ДОО. Вноската е 5% от осигурителния доход, натрупва се в лична партида и е наследяема при определени условия.',
      ],
      [
        'Мога ли да закупя осигурителен стаж?',
        'Да — до 5 години за периоди на висше образование или недостигащ стаж. Цената е 19,8% от минималния осигурителен доход за самоосигуряващите се за всеки закупен месец.',
      ],
      [
        'В евро или в левове се изплащат пенсиите?',
        'От 1 януари 2026 г. България е член на еврозоната и пенсиите се изплащат в евро. Сумите бяха превалутирани по фиксирания курс 1,95583 лева за евро.',
      ],
    ],
    guidesTitle: 'Ръководства',
    guides: [
      {
        tag: 'Ръководство',
        title: 'Пенсиониране през 2026: пълно ръководство',
        desc: 'Условия, формула, документи и срокове — всичко важно за пенсионирането тази година.',
      },
      {
        tag: 'Ръководство',
        title: 'Как да проверя осигурителния си стаж',
        desc: 'ПИК код от НОИ, онлайн справки и какво да правите при липсващи периоди.',
      },
      {
        tag: 'Ръководство',
        title: 'УПФ или НОИ: какво да знаете',
        desc: 'Как вторият стълб влияе на държавната пенсия и какъв избор имате.',
      },
    ],
    sources:
      'Правна рамка: Кодекс за социално осигуряване — чл. 68, 68а, 70 и 9а; данни на НОИ и НСИ. Параметрите в калкулатора са за 2026 г. и се актуализират ежегодно със Закона за бюджета на държавното обществено осигуряване.',
    dataNote:
      'Средният осигурителен доход ({value}) е по официални данни на НОИ за периода {period} — последна актуализация на {date}',
    mNever:
      'При тези данни стажът не достига — възможно е пенсиониране на 67 г. с минимум 15 г. действителен стаж.',
    mEarly: 'Възможно е и пенсиониране до 1 година по-рано с намаление 0,4% на месец.',
    atAge: 'на възраст',
    months: 'м.',
    disclaimer:
      'Калкулаторът дава ориентировъчна прогноза по параметрите за 2026 г. (чл. 68 и чл. 70 от КСО) и не представлява официално изчисление. За точна справка използвайте персоналния калкулатор на НОИ с данните от вашето осигурително досие.',
  },
  en: {
    metaTitle: 'Bulgarian Pension Calculator 2026 — when can you retire and how much will you get',
    metaDescription:
      'Free pension calculator for Bulgaria: find out when you can retire, estimate your NOI state pension, second pillar (UPF) and the cost of purchasing missing service under the 2026 rules.',
    title: 'Plan your pension',
    subtitle:
      'Find out when you can retire in Bulgaria and how much you will receive — under the 2026 Social Insurance Code rules. All amounts in euro.',
    tabs: ['When can I retire?', 'State pension (NOI)', '2nd pillar (UPF)', 'Missing service'],
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    birthYear: 'Year of birth',
    serviceSoFar: 'Insurance service so far',
    yearsShort: 'yrs',
    serviceHint: 'Assumes you keep working without interruption.',
    serviceTotal: 'Total insurance service',
    coef: 'Individual coefficient',
    coefHint:
      'Ratio of your income to the national average insurable income. Earning the national average gives a coefficient of 1.00.',
    curAge: 'Current age',
    retAge: 'Retire at',
    balance: 'Current account balance',
    salary: 'Monthly insurable income',
    yield: 'Annual return',
    missingMonths: 'Missing service',
    missingHint:
      'You may purchase up to 5 years of service (study years or shortfall) — Art. 9a of the Code.',
    earlyMonths: 'Retiring early by',
    basePension: 'Expected full pension',
    r1Title: 'Earliest retirement year',
    reqAge: 'Required age',
    reqService: 'Required service',
    projService: 'Your service by then',
    r2Title: 'Estimated monthly pension',
    formula: 'How it is calculated',
    fAvgIncome: 'Avg. insurable income',
    fCoef: 'Individual coefficient',
    fAccrual: 'Service weight',
    deferChart: 'If you defer retirement',
    r3Title: 'Projected UPF pension',
    upfFv: 'Projected balance at retirement',
    upfContrib: 'Future contributions (5%)',
    upfGrowth: 'Investment growth',
    upfYears: 'Years to retirement',
    upfNote:
      'Lifetime annuity over ~17.5 expected payout years. The UPF contribution is 5% of insurable income.',
    r4Title: 'Cost to purchase service',
    buyPerMonth: 'Cost per month of service',
    reduction: 'Early retirement reduction',
    reducedPension: 'Reduced pension',
    buyNote:
      'Purchase is paid on the minimum insurable income for the self-insured (19.8%). An early pension is reduced by 0.4% per month, for life.',
    s1Title: 'How the Bulgarian pension system works',
    s1Intro:
      'The Bulgarian pension model rests on three pillars. Together they determine your total income after retirement.',
    pillars: [
      {
        n: 'First pillar',
        title: 'State social insurance (NOI)',
        body: 'Mandatory pay-as-you-go insurance. The pension is calculated from your length of service, individual coefficient and the national average insurable income.',
      },
      {
        n: 'Second pillar',
        title: 'Universal pension fund (UPF)',
        body: 'A mandatory personal account for everyone born after 31 Dec 1959. The contribution is 5% of insurable income, invested by a licensed private pension fund.',
      },
      {
        n: 'Third pillar',
        title: 'Voluntary pension insurance',
        body: 'Additional personal contributions with tax relief of up to 10% of the annual tax base. Funds are paid out under a scheme you choose.',
      },
    ],
    s2Title: 'Retirement requirements by year',
    s2Intro:
      'The retirement age under Art. 68 of the Social Insurance Code rises gradually — to 65 for men in 2029 and for women in 2037. The required service reaches 37 years for women and 40 years for men in 2027.',
    thYear: 'Year',
    thWAge: 'Women — age',
    thWSvc: 'Women — service',
    thMAge: 'Men — age',
    thMSvc: 'Men — service',
    s3Title: 'How the state pension is calculated',
    s3Body1:
      'The monthly pension for length of service and age is obtained by multiplying the national average insurable income for the 12 months before retirement by your individual coefficient and by 1.35% for each year of insurance service (Art. 70 of the Code).',
    s3Formula:
      'Pension = average insurable income × individual coefficient × 1.35% × years of service',
    s3Body2:
      'The individual coefficient compares your insurable income to the national average — earning twice the average gives a coefficient of about 2.00. Each year you defer retirement after qualifying increases the pension further.',
    s4Title: 'Missing service and early retirement',
    s4Body1:
      'If you are short of service, you may purchase up to 5 years — university study periods or a service shortfall under Art. 9a of the Code. The price is 19.8% of the minimum insurable income for the self-insured for each purchased month, paid once when the pension is granted.',
    s4Body2:
      'Retiring up to 12 months before the required age is possible with full service, but the pension is reduced by 0.4% for each missing month — and stays reduced for life (Art. 68a). Weigh early retirement against the expected payout period.',
    faqTitle: 'Frequently asked questions',
    faq: [
      [
        'What are the retirement conditions in 2026?',
        'Women retire at 62 years 6 months of age with 36 years 10 months of insurance service; men at 64 years 9 months with 39 years 10 months of service.',
      ],
      [
        'What if I don’t have enough service?',
        'If you do not meet the service requirement, you qualify for a pension at age 67 with at least 15 years of actual insurance service.',
      ],
      [
        'Can I retire early?',
        'Yes — up to 12 months before the required age if you have full service. The pension is reduced by 0.4% per month of early retirement, permanently.',
      ],
      [
        'What is the individual coefficient?',
        'The ratio of your monthly insurable income to the national average over the same period. NOI calculates it from your insurance record after 1999.',
      ],
      [
        'Who contributes to a universal pension fund?',
        'Everyone born after 31 December 1959 who is insured under state social insurance. The 5% contribution accumulates in a personal, inheritable account.',
      ],
      [
        'Can I purchase insurance service?',
        'Yes — up to 5 years for university study periods or missing service. The price is 19.8% of the minimum insurable income for the self-insured per purchased month.',
      ],
      [
        'Are pensions paid in euro or leva?',
        'Since 1 January 2026 Bulgaria is a member of the euro area and pensions are paid in euro, converted at the fixed rate of 1.95583 leva per euro.',
      ],
    ],
    guidesTitle: 'Guides',
    guides: [
      {
        tag: 'Guide',
        title: 'Retiring in 2026: the complete guide',
        desc: 'Conditions, formula, documents and deadlines — everything that matters this year.',
      },
      {
        tag: 'Guide',
        title: 'How to check your insurance service',
        desc: 'Getting a NOI PIK code, online statements, and fixing missing periods.',
      },
      {
        tag: 'Guide',
        title: 'UPF or NOI: what to know',
        desc: 'How the second pillar affects your state pension and what choice you have.',
      },
    ],
    sources:
      'Legal framework: Social Insurance Code — Art. 68, 68a, 70 and 9a; NOI and NSI data. Calculator parameters are for 2026 and are updated annually with the State Social Insurance Budget Act.',
    dataNote:
      'The average insurable income ({value}) uses official NOI data for the period {period} — last updated on {date}.',
    mNever:
      'With these inputs the service requirement is not met — retirement is possible at 67 with at least 15 years of actual service.',
    mEarly: 'Retirement up to 1 year earlier is also possible, with a 0.4% reduction per month.',
    atAge: 'at age',
    months: 'mo',
    disclaimer:
      'This calculator gives an indicative estimate based on 2026 parameters (Art. 68 and Art. 70 of the Social Insurance Code) and is not an official calculation. For an exact figure use the NOI personal calculator with your insurance record.',
  },
};
