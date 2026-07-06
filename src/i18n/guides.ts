import type { Lang, PageId } from '../lib/routes';
import type { Section } from './pages';

export interface GuideT {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  meta: string;
  lead: string;
  factsTitle?: string;
  facts?: { k: string; v: string }[];
  steps?: { n: string; h: string; body: string }[];
  sections: Section[];
  ctaTitle: string;
  ctaBody: string;
  ctaBtn: string;
  related: { label: string; page: PageId }[];
}

export type GuideId = 'guide2026' | 'guideService' | 'guideUpf';

/** ISO dates used for Article structured data. */
export const guideDates: Record<GuideId, { published: string; modified: string }> = {
  guide2026: { published: '2026-01-05', modified: '2026-07-01' },
  guideService: { published: '2026-01-05', modified: '2026-07-01' },
  guideUpf: { published: '2026-01-05', modified: '2026-07-01' },
};

export const guides: Record<GuideId, Record<Lang, GuideT>> = {
  guide2026: {
    bg: {
      metaTitle: 'Пенсиониране през 2026: пълно ръководство — възраст, стаж, документи',
      metaDescription:
        'Всичко за пенсионирането в България през 2026 г.: изисквания за възраст и стаж, формулата на НОИ, документи за кандидатстване, ранно и отложено пенсиониране.',
      kicker: 'Ръководство',
      h1: 'Пенсиониране през 2026: пълно ръководство',
      meta: 'Актуализирано: юли 2026 · Четене: 6 мин',
      lead: 'Кога имате право на пенсия, как се изчислява тя, какви документи са нужни и какви са възможностите за по-ранно или отложено пенсиониране — всичко важно за 2026 г. на едно място.',
      factsTitle: 'Накратко — условия за 2026 г.',
      facts: [
        { k: 'Жени — възраст и стаж', v: '62 г. 6 м. / 36 г. 10 м.' },
        { k: 'Мъже — възраст и стаж', v: '64 г. 9 м. / 39 г. 10 м.' },
        { k: 'Без пълен стаж', v: '67 г. + 15 г. действителен стаж' },
        { k: 'Тежест на година стаж', v: '1,35% от дохода' },
      ],
      sections: [
        {
          h: 'Кой има право на пенсия през 2026 г.',
          ps: [
            'Правото на пенсия за осигурителен стаж и възраст по чл. 68 от КСО се придобива при едновременно изпълнени две условия: навършена възраст и натрупан осигурителен стаж. През 2026 г. жените се пенсионират при 62 години и 6 месеца възраст и 36 години и 10 месеца стаж, а мъжете — при 64 години и 9 месеца възраст и 39 години и 10 месеца стаж.',
            'Изискванията нарастват всяка календарна година: стажът достига тавана си от 37 години за жените и 40 години за мъжете през 2027 г., а възрастта се изравнява на 65 години за мъжете през 2029 г. и за жените през 2037 г. Меродавни са условията в годината, в която подавате заявлението.',
          ],
        },
        {
          h: 'Ако стажът не достига',
          ps: [
            'Който няма изискуемия стаж, може да се пенсионира при навършени 67 години с минимум 15 години действителен осигурителен стаж (чл. 68, ал. 3). „Действителен" означава време, през което реално сте работили и сте били осигурявани — закупеният стаж не се брои към тези 15 години.',
            'Друга възможност е закупуването на до 5 години недостигащ стаж или периоди на висше образование — вижте калкулатора за недостигащ стаж, за да прецените дали инвестицията си струва.',
          ],
        },
        {
          h: 'Как се изчислява пенсията',
          ps: [
            'Формулата по чл. 70 от КСО: средният осигурителен доход за страната за 12-те месеца преди отпускането се умножава по вашия индивидуален коефициент и по 1,35% за всяка година осигурителен стаж. Индивидуалният коефициент отразява съотношението между вашите доходи и средните за страната през целия ви осигурителен живот след 1999 г.',
            'Пример: при индивидуален коефициент 1,20 и 38 години стаж пенсията е среден доход × 1,20 × 51,3%. Ако сте осигурявани в универсален пенсионен фонд, държавната част се намалява пропорционално, но към нея се добавя втора пенсия от УПФ.',
          ],
        },
        {
          h: 'Ранно и отложено пенсиониране',
          ps: [
            'При пълен осигурителен стаж можете да се пенсионирате до 12 месеца преди изискваната възраст, но с трайно намаление от 0,4% за всеки недостигащ месец (чл. 68а) — до 4,8% при цяла година. Намалението остава за цял живот, затова го съпоставете с ползата от по-ранното получаване.',
            'Обратно, за всяка година отработена след придобиване на правото без да получавате пенсия, процентът за година стаж се увеличава — отлагането е един от най-сигурните начини да увеличите пенсията си.',
          ],
        },
        {
          h: 'Документи и кандидатстване',
          ps: [
            'Заявлението (образец УП-1) се подава в териториалното поделение на НОИ по постоянен адрес — лично, чрез упълномощено лице, по пощата или електронно с ПИК/КЕП. Прилагат се документи за осигурителен стаж (трудови книжки, УП-2, УП-3) и за брутното трудово възнаграждение за периодите преди 1999 г.',
            'Пенсията се отпуска от датата на придобиване на правото, ако заявлението е подадено до 2 месеца от нея, или от датата на подаване — ако е по-късно. НОИ се произнася с разпореждане до 4 месеца.',
          ],
        },
        {
          h: 'Пенсиите вече са в евро',
          ps: [
            'От 1 януари 2026 г. България е член на еврозоната. Всички пенсии се изплащат в евро, превалутирани по фиксирания курс 1,95583 лв. за 1 евро. Преизчисляването е служебно — не се изисква никакво действие от пенсионерите.',
          ],
        },
      ],
      ctaTitle: 'Проверете вашата дата',
      ctaBody:
        'Използвайте безплатния калкулатор, за да видите кога точно можете да се пенсионирате и с каква прогнозна пенсия.',
      ctaBtn: 'Към калкулатора',
      related: [
        { label: 'Как да проверя осигурителния си стаж', page: 'guideService' },
        { label: 'УПФ или НОИ: какво да знаете', page: 'guideUpf' },
      ],
    },
    en: {
      metaTitle: 'Retiring in Bulgaria in 2026: the complete guide — age, service, documents',
      metaDescription:
        'Everything about retiring in Bulgaria in 2026: age and service requirements, the NOI formula, application documents, early and deferred retirement.',
      kicker: 'Guide',
      h1: 'Retiring in 2026: the complete guide',
      meta: 'Updated: July 2026 · 6 min read',
      lead: 'When you qualify for a pension, how it is calculated, what documents you need, and your options for retiring earlier or later — everything that matters for 2026 in one place.',
      factsTitle: 'At a glance — 2026 conditions',
      facts: [
        { k: 'Women — age and service', v: '62y 6m / 36y 10m' },
        { k: 'Men — age and service', v: '64y 9m / 39y 10m' },
        { k: 'Without full service', v: 'Age 67 + 15y actual service' },
        { k: 'Weight per year of service', v: '1.35% of income' },
      ],
      sections: [
        {
          h: 'Who qualifies for a pension in 2026',
          ps: [
            'The right to a pension for length of service and age under Art. 68 of the Social Insurance Code requires two conditions at once: reaching the required age and accumulating the required service. In 2026 women retire at 62 years 6 months with 36 years 10 months of service; men at 64 years 9 months with 39 years 10 months.',
            'Requirements rise each calendar year: service caps at 37 years for women and 40 for men in 2027, while the age equalises at 65 for men in 2029 and for women in 2037. The conditions of the year you file your application are the ones that apply.',
          ],
        },
        {
          h: 'If you are short of service',
          ps: [
            'Those without the required service can retire at 67 with at least 15 years of actual insurance service (Art. 68(3)). "Actual" means time you genuinely worked and were insured — purchased service does not count towards those 15 years.',
            'Another option is purchasing up to 5 years of missing service or university study periods — use the missing-service calculator to judge whether the investment pays off.',
          ],
        },
        {
          h: 'How the pension is calculated',
          ps: [
            'The Art. 70 formula: the national average insurable income for the 12 months before granting is multiplied by your individual coefficient and by 1.35% for each year of service. The individual coefficient reflects the ratio of your income to the national average across your insured life after 1999.',
            'Example: with a coefficient of 1.20 and 38 years of service, the pension is average income × 1.20 × 51.3%. If you contribute to a universal pension fund, the state portion is reduced proportionally but a second UPF pension is added on top.',
          ],
        },
        {
          h: 'Early and deferred retirement',
          ps: [
            'With full service you may retire up to 12 months before the required age, at a permanent reduction of 0.4% per missing month (Art. 68a) — up to 4.8% for a full year. The reduction lasts for life, so weigh it against the benefit of earlier payments.',
            'Conversely, each year worked after qualifying without drawing a pension increases the accrual per year of service — deferral is one of the most reliable ways to raise your pension.',
          ],
        },
        {
          h: 'Documents and applying',
          ps: [
            'The application (form UP-1) is filed at the NOI territorial office for your permanent address — in person, via an authorised representative, by post, or electronically with a PIK code or e-signature. Attach documents proving insurance service (employment books, UP-2, UP-3) and gross pay for periods before 1999.',
            'The pension is granted from the date you qualified if you apply within 2 months of it, otherwise from the application date. NOI must rule within 4 months.',
          ],
        },
        {
          h: 'Pensions are now paid in euro',
          ps: [
            'Since 1 January 2026 Bulgaria is a euro-area member. All pensions are paid in euro, converted at the fixed rate of 1.95583 leva per euro. Conversion was automatic — pensioners did not need to take any action.',
          ],
        },
      ],
      ctaTitle: 'Check your date',
      ctaBody:
        'Use the free calculator to see exactly when you can retire and with what estimated pension.',
      ctaBtn: 'Go to calculator',
      related: [
        { label: 'How to check your insurance service', page: 'guideService' },
        { label: 'UPF or NOI: what to know', page: 'guideUpf' },
      ],
    },
  },
  guideService: {
    bg: {
      metaTitle: 'Как да проверя осигурителния си стаж онлайн — ПИК код и справки в НОИ',
      metaDescription:
        'Стъпка по стъпка: как да получите ПИК код от НОИ, как да направите справка за осигурителен стаж и доход онлайн и какво да правите при липсващи периоди.',
      kicker: 'Ръководство',
      h1: 'Как да проверя осигурителния си стаж',
      meta: 'Актуализирано: юли 2026 · Четене: 4 мин',
      lead: 'Преди да планирате пенсионирането си, трябва да знаете точно колко осигурителен стаж имате. Ето как да направите справка онлайн за минути — и какво да правите, ако откриете липсващи периоди.',
      steps: [
        {
          n: '1',
          h: 'Вземете ПИК код от НОИ',
          body: 'Персоналният идентификационен код (ПИК) се издава безплатно и веднага във всяко териториално поделение на НОИ срещу лична карта, или онлайн чрез квалифициран електронен подпис (КЕП). Кодът е безсрочен.',
        },
        {
          n: '2',
          h: 'Влезте в е-услугите на НОИ',
          body: 'Отворете сайта на НОИ (nssi.bg) → „Е-услуги и справки" → „Справки по ЕГН и ПИК на НОИ". Въведете ЕГН и ПИК кода си.',
        },
        {
          n: '3',
          h: 'Изберете справката за стаж и доход',
          body: 'Справката „Осигурителен стаж и доход" показва всичките ви осигурителни периоди след 1997 г. по месеци, осигурители и осигурителен доход — данните, от които НОИ ще изчисли индивидуалния ви коефициент.',
        },
        {
          n: '4',
          h: 'Сверете с документите си',
          body: 'За периоди преди 1997 г. стажът се доказва с трудова книжка и удостоверения УП-2/УП-3 от работодателите. Сравнете записите и потърсете разминавания — по-добре години преди пенсионирането, отколкото в последния момент.',
        },
      ],
      sections: [
        {
          h: 'Какво се брои за осигурителен стаж',
          ps: [
            'Освен времето на работа по трудов договор, за стаж се зачитат и периоди на платена военна служба, отглеждане на дете, получаване на парично обезщетение за безработица (частично), както и времето на самоосигуряване с внесени вноски. Не се зачитат периоди без внесени осигуровки, дори да сте работили.',
            'Внимание: „осигурителен стаж" и „действителен стаж" са различни понятия — закупеният стаж и някои приравнени периоди се броят за първото, но не и за второто. За пенсия на 67 години са нужни 15 години именно действителен стаж.',
          ],
        },
        {
          h: 'Липсващи периоди — какво да правите',
          ps: [
            'Ако откриете липсващ период, първо се обърнете към работодателя (или неговия правоприемник) за издаване на УП-2/УП-3. Ако фирмата вече не съществува, документите се търсят в осигурителния архив на НОИ — подава се заявление и справката е безплатна.',
            'Ако периодът не може да бъде доказан, обмислете закупуване на недостигащ стаж по чл. 9а от КСО — до 5 години, срещу 19,8% от минималния осигурителен доход за самоосигуряващи се на месец. Калкулаторът ни изчислява точната сума.',
          ],
        },
        {
          h: 'Колко често да проверявате',
          ps: [
            'Добра практика е да правите справка веднъж годишно и да пазите копия от трудови договори и фишове. Грешките в данните на осигурителите се коригират много по-лесно, докато фирмата още съществува и документите са налични.',
          ],
        },
      ],
      ctaTitle: 'Знаете ли стажа си? Изчислете пенсията',
      ctaBody:
        'С данните от справката можете да прогнозирате кога се пенсионирате и с каква сума — безплатно и без регистрация.',
      ctaBtn: 'Към калкулатора',
      related: [
        { label: 'Пенсиониране през 2026: пълно ръководство', page: 'guide2026' },
        { label: 'УПФ или НОИ: какво да знаете', page: 'guideUpf' },
      ],
    },
    en: {
      metaTitle: 'How to check your insurance service online — NOI PIK code and statements',
      metaDescription:
        'Step by step: how to get a NOI PIK code, check your insurance service and income online, and what to do about missing periods.',
      kicker: 'Guide',
      h1: 'How to check your insurance service',
      meta: 'Updated: July 2026 · 4 min read',
      lead: 'Before planning retirement you need to know exactly how much insurance service you have. Here is how to check online in minutes — and what to do if you find missing periods.',
      steps: [
        {
          n: '1',
          h: 'Get a PIK code from NOI',
          body: 'The personal identification code (PIK) is issued free of charge, on the spot, at any NOI territorial office against an ID card, or online with a qualified electronic signature. The code does not expire.',
        },
        {
          n: '2',
          h: 'Log in to NOI e-services',
          body: 'Open the NOI website (nssi.bg) → "E-services and enquiries" → "Enquiries by EGN and NOI PIK". Enter your EGN and PIK code.',
        },
        {
          n: '3',
          h: 'Open the service-and-income statement',
          body: 'The "Insurance service and income" statement shows all your insured periods after 1997 by month, employer and insurable income — the data NOI will use to calculate your individual coefficient.',
        },
        {
          n: '4',
          h: 'Cross-check your documents',
          body: 'For periods before 1997, service is proven with your employment book and UP-2/UP-3 certificates from employers. Compare the records and look for gaps — better years before retirement than at the last moment.',
        },
      ],
      sections: [
        {
          h: 'What counts as insurance service',
          ps: [
            'Besides employment under a labour contract, service also includes periods of military service, child-raising leave, partially unemployment benefits, and self-insured periods with paid contributions. Periods without paid contributions do not count, even if you worked.',
            'Note: "insurance service" and "actual service" are different concepts — purchased service and some credited periods count towards the former but not the latter. A pension at 67 requires 15 years of actual service specifically.',
          ],
        },
        {
          h: 'Missing periods — what to do',
          ps: [
            'If you find a missing period, first ask the employer (or its legal successor) to issue UP-2/UP-3 certificates. If the company no longer exists, the documents are kept in NOI’s insurance archive — file a request; the statement is free.',
            'If a period cannot be proven, consider purchasing missing service under Art. 9a — up to 5 years, at 19.8% of the minimum insurable income for the self-insured per month. Our calculator computes the exact amount.',
          ],
        },
        {
          h: 'How often to check',
          ps: [
            'A good practice is to check once a year and keep copies of employment contracts and payslips. Errors in employer-reported data are far easier to correct while the company still exists and documents are available.',
          ],
        },
      ],
      ctaTitle: 'Know your service? Estimate your pension',
      ctaBody:
        'With the data from your statement you can project when you retire and with what amount — free, no registration.',
      ctaBtn: 'Go to calculator',
      related: [
        { label: 'Retiring in 2026: the complete guide', page: 'guide2026' },
        { label: 'UPF or NOI: what to know', page: 'guideUpf' },
      ],
    },
  },
  guideUpf: {
    bg: {
      metaTitle: 'УПФ или НОИ: какво да знаете за втория пенсионен стълб',
      metaDescription:
        'Кой се осигурява в универсален пенсионен фонд, как 5-процентната вноска влияе на държавната пенсия, как се сменя фонд и какви са опциите при пенсиониране.',
      kicker: 'Ръководство',
      h1: 'УПФ или НОИ: какво да знаете за втория стълб',
      meta: 'Актуализирано: юли 2026 · Четене: 5 мин',
      lead: 'Родените след 1959 г. получават пенсия от два източника — НОИ и универсален пенсионен фонд. Как работи вторият стълб, как влияе на държавната пенсия и какъв избор имате?',
      sections: [
        {
          h: 'Как работи универсалният пенсионен фонд',
          ps: [
            'Всички родени след 31 декември 1959 г., осигурени в ДОО, задължително внасят 5% от осигурителния си доход в универсален пенсионен фонд (УПФ) по свой избор. Средствата се натрупват в лична партида и се инвестират от лицензирано пенсионноосигурително дружество под надзора на Комисията за финансов надзор.',
            'За разлика от разходопокривния първи стълб, парите в УПФ са ваша лична собственост — при смърт преди пенсиониране те се наследяват от наследниците ви.',
          ],
        },
        {
          h: 'Как УПФ влияе на държавната пенсия',
          ps: [
            'Тъй като 5% от вноската ви отива във фонда вместо в НОИ, държавната пенсия на осигурените в УПФ се намалява пропорционално — индивидуалният коефициент се коригира с намаляващ множител за периодите на осигуряване във втория стълб.',
            'Идеята е двете пенсии заедно да надхвърлят това, което бихте получили само от НОИ — но резултатът зависи от доходността на фонда, таксите и осигурителната ви история.',
          ],
        },
        {
          h: 'Изборът: УПФ или само НОИ',
          ps: [
            'Имате право да прехвърлите средствата си от УПФ към фонд „Пенсии" на ДОО (Сребърния фонд) и да получавате пълна държавна пенсия — и обратно. Изборът може да се променя, но не по-късно от определен срок преди навършване на пенсионната възраст, затова проверете актуалните срокове в НАП.',
            'Общо правило: колкото по-висока е партидата ви спрямо „загубата" от намалената държавна пенсия, толкова по-изгоден е УПФ. Сравнете двата сценария с нашите калкулатори, преди да решите.',
          ],
        },
        {
          h: 'Такси и доходност',
          ps: [
            'Фондовете събират такса от всяка вноска и годишна инвестиционна такса — размерите са ограничени със закон. Доходността се публикува от КФН на всеки 3 месеца; сравнявайте я за дълги периоди (5–10 години), а не за отделна година.',
            'Можете да смените фонда си веднъж годишно без такса, ако сте недоволни от резултатите — партидата се прехвърля изцяло.',
          ],
        },
        {
          h: 'Какво става при пенсиониране',
          ps: [
            'При навършване на възрастта по чл. 68 имате три опции според размера на партидата: пожизнена допълнителна пенсия, разсрочено изплащане или еднократно изтегляне (при малки суми). Пожизнената пенсия може да включва и гарантиран период или прехвърляне към наследници.',
            'Плащанията от УПФ започват независимо от това дали вече получавате държавна пенсия — двете се отпускат по отделни процедури: държавната от НОИ, а втората — от пенсионното дружество.',
          ],
        },
      ],
      ctaTitle: 'Прогнозирайте втората си пенсия',
      ctaBody:
        'Калкулаторът за втори стълб изчислява бъдещата стойност на партидата ви и месечната пенсия от УПФ.',
      ctaBtn: 'Към калкулатора',
      related: [
        { label: 'Пенсиониране през 2026: пълно ръководство', page: 'guide2026' },
        { label: 'Как да проверя осигурителния си стаж', page: 'guideService' },
      ],
    },
    en: {
      metaTitle: 'UPF or NOI: what to know about the second pension pillar',
      metaDescription:
        'Who contributes to a universal pension fund, how the 5% contribution affects the state pension, how to switch funds and your options at retirement.',
      kicker: 'Guide',
      h1: 'UPF or NOI: understanding the second pillar',
      meta: 'Updated: July 2026 · 5 min read',
      lead: 'People born after 1959 receive a pension from two sources — NOI and a universal pension fund. How does the second pillar work, how does it affect the state pension, and what choice do you have?',
      sections: [
        {
          h: 'How the universal pension fund works',
          ps: [
            'Everyone born after 31 December 1959 and insured under state social insurance mandatorily contributes 5% of insurable income to a universal pension fund (UPF) of their choice. The money accumulates in a personal account and is invested by a licensed pension company supervised by the Financial Supervision Commission.',
            'Unlike the pay-as-you-go first pillar, UPF money is your personal property — if you die before retirement it is inherited by your heirs.',
          ],
        },
        {
          h: 'How the UPF affects your state pension',
          ps: [
            'Because 5% of your contribution goes to the fund instead of NOI, the state pension of UPF members is reduced proportionally — the individual coefficient is adjusted with a reducing multiplier for the periods insured in the second pillar.',
            'The idea is that the two pensions together exceed what you would receive from NOI alone — but the outcome depends on fund returns, fees and your insurance history.',
          ],
        },
        {
          h: 'The choice: UPF or NOI only',
          ps: [
            'You have the right to transfer your UPF funds to the state "Pensions" fund (the Silver Fund) and receive a full state pension — and back. The choice can be changed, but no later than a set period before reaching retirement age, so check the current deadlines with the National Revenue Agency.',
            'Rule of thumb: the higher your account balance relative to the "loss" from the reduced state pension, the more favourable the UPF. Compare both scenarios with our calculators before deciding.',
          ],
        },
        {
          h: 'Fees and returns',
          ps: [
            'Funds charge a fee on each contribution and an annual investment fee — both capped by law. Returns are published by the FSC every 3 months; compare them over long periods (5–10 years), not a single year.',
            'You can switch funds once a year free of charge if you are unhappy with performance — the account transfers in full.',
          ],
        },
        {
          h: 'What happens at retirement',
          ps: [
            'At the Art. 68 retirement age you have three options depending on your balance: a lifetime supplementary pension, scheduled withdrawals, or a lump sum (for small amounts). The lifetime pension can include a guaranteed period or transfer to heirs.',
            'UPF payments start regardless of whether you already receive a state pension — the two are granted under separate procedures: the state one by NOI, the second by the pension company.',
          ],
        },
      ],
      ctaTitle: 'Project your second pension',
      ctaBody:
        'The second-pillar calculator projects your account’s future value and your monthly UPF pension.',
      ctaBtn: 'Go to calculator',
      related: [
        { label: 'Retiring in 2026: the complete guide', page: 'guide2026' },
        { label: 'How to check your insurance service', page: 'guideService' },
      ],
    },
  },
};
