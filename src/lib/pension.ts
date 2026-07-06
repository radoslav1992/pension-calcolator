/**
 * Pension math shared between build-time rendering (default values in the
 * static HTML) and the client-side calculator script.
 *
 * Rules follow the Bulgarian Social Insurance Code (КСО) as of 2026:
 *   - Art. 68  — retirement age / required service schedule
 *   - Art. 68a — early retirement (0.4% reduction per month, permanent)
 *   - Art. 70  — state pension formula (avg income × coefficient × 1.35%/year)
 *   - Art. 9a  — purchasing up to 5 years of missing service
 */

export const PARAMS = {
  /** National average insurable income, EUR/month (2026). */
  avgIncome: 1150,
  /** Minimum insurable income for the self-insured, EUR/month (2026). */
  minIncome: 620.2,
  /** Accrual per year of service (Art. 70). */
  accrual: 0.0135,
  /** Fixed BGN per EUR conversion rate. */
  BGN: 1.95583,
  /** Year whose budget parameters the calculator uses. */
  thisYear: 2026,
} as const;

export type Gender = 'm' | 'f';

export interface CalcState {
  gender: Gender;
  birthYear: number;
  serviceNow: number;
  svcYears: number;
  coefRaw: number;
  curAge: number;
  retAge: number;
  balance: number;
  salary: number;
  yieldRaw: number;
  missingMonths: number;
  earlyMonths: number;
  basePension: number;
}

/** Default slider positions (mirrors the design prototype). */
export const DEFAULTS: CalcState = {
  gender: 'f',
  birthYear: 1975,
  serviceNow: 25,
  svcYears: 37,
  coefRaw: 120,
  curAge: 45,
  retAge: 65,
  balance: 12000,
  salary: 1200,
  yieldRaw: 40,
  missingMonths: 24,
  earlyMonths: 6,
  basePension: 800,
};

/** Required retirement age (in years, fractional) for a given calendar year. */
export function reqAge(year: number, g: Gender): number {
  if (g === 'm') return Math.min(65, 64.75 + (year - 2026) / 12);
  if (year < 2029) return 62.5 + (year - 2026) / 6;
  return Math.min(65, 63 + (year - 2029) * 0.25);
}

/** Required insurance service (in years, fractional) for a given calendar year. */
export function reqSvc(year: number, g: Gender): number {
  return g === 'f'
    ? Math.min(37, 36.8333 + (year - 2026) * (1 / 6))
    : Math.min(40, 39.8333 + (year - 2026) * (1 / 6));
}

export interface Tab1Result {
  showYear: number;
  svcOk: boolean;
  ageAtRetirement: number;
  reqAgeVal: number;
  reqSvcVal: number;
  projSvc: number;
}

/** Tab 1 — earliest retirement year under the Art. 68 schedule. */
export function computeTab1(s: Pick<CalcState, 'gender' | 'birthYear' | 'serviceNow'>): Tab1Result {
  const { gender, birthYear, serviceNow } = s;
  let retYear: number | null = null;
  for (let y = 2026; y <= birthYear + 72; y++) {
    const age = y - birthYear;
    const svc = serviceNow + Math.max(0, y - 2026);
    if (age >= reqAge(y, gender) && svc >= reqSvc(y, gender)) {
      retYear = y;
      break;
    }
  }
  const fallbackYear = birthYear + 67;
  const showYear = retYear ?? fallbackYear;
  const svcOk = retYear !== null && retYear < fallbackYear;
  return {
    showYear,
    svcOk,
    ageAtRetirement: showYear - birthYear,
    reqAgeVal: reqAge(showYear, gender),
    reqSvcVal: reqSvc(showYear, gender),
    projSvc: serviceNow + Math.max(0, showYear - 2026),
  };
}

export interface Tab2Result {
  pension: number;
  coef: number;
  bars: { year: number; v: number; h: number }[];
}

/** Tab 2 — state pension estimate (Art. 70) plus a 6-year deferral chart. */
export function computeTab2(s: Pick<CalcState, 'svcYears' | 'coefRaw'>): Tab2Result {
  const coef = s.coefRaw / 100;
  const pension = PARAMS.avgIncome * coef * PARAMS.accrual * s.svcYears;
  const bars: { year: number; v: number; h: number }[] = [];
  let maxV = 0;
  for (let k = 0; k <= 5; k++) {
    const v = PARAMS.avgIncome * Math.pow(1.04, k) * coef * PARAMS.accrual * (s.svcYears + k);
    maxV = Math.max(maxV, v);
    bars.push({ year: PARAMS.thisYear + k, v, h: 0 });
  }
  for (const b of bars) b.h = Math.max(8, Math.round((b.v / maxV) * 70));
  return { pension, coef, bars };
}

export interface Tab3Result {
  fv: number;
  totalContrib: number;
  growth: number;
  years: number;
  monthly: number;
  rate: number;
}

/** Tab 3 — universal pension fund (2nd pillar) projection. */
export function computeTab3(
  s: Pick<CalcState, 'curAge' | 'retAge' | 'balance' | 'salary' | 'yieldRaw'>,
): Tab3Result {
  const r = s.yieldRaw / 1000; // slider 10..70 -> 1%..7%
  const n = Math.max(0, s.retAge - s.curAge);
  const yearlyContrib = s.salary * 0.05 * 12;
  const fvBalance = s.balance * Math.pow(1 + r, n);
  const fvContrib = n > 0 ? yearlyContrib * ((Math.pow(1 + r, n) - 1) / r) : 0;
  const fv = fvBalance + fvContrib;
  const totalContrib = s.balance + yearlyContrib * n;
  return {
    fv,
    totalContrib,
    growth: Math.max(0, fv - totalContrib),
    years: n,
    monthly: fv / 210, // lifetime annuity over ~17.5 expected payout years
    rate: r,
  };
}

export interface Tab4Result {
  perMonth: number;
  buyCost: number;
  redPct: number;
  reduced: number;
}

/** Tab 4 — cost of purchased service (Art. 9a) and early-retirement reduction (Art. 68a). */
export function computeTab4(
  s: Pick<CalcState, 'missingMonths' | 'earlyMonths' | 'basePension'>,
): Tab4Result {
  const perMonth = PARAMS.minIncome * 0.198;
  return {
    perMonth,
    buyCost: s.missingMonths * perMonth,
    redPct: s.earlyMonths * 0.4,
    reduced: s.basePension * (1 - (s.earlyMonths * 0.4) / 100),
  };
}

export interface FmtStrings {
  yearsShort: string;
  months: string;
}

/** Locale-aware number/currency/duration formatters. */
export function makeFormatters(locale: string, t: FmtStrings) {
  const eur = (v: number, dec?: number) =>
    '€' +
    v.toLocaleString(locale, {
      maximumFractionDigits: dec ?? 0,
      minimumFractionDigits: dec ?? 0,
    });
  const bgn = (v: number) =>
    (v * PARAMS.BGN).toLocaleString(locale, { maximumFractionDigits: 0 }) + ' лв.';
  const fmtYM = (x: number) => {
    let y = Math.floor(x);
    let m = Math.round((x - y) * 12);
    if (m === 12) {
      y += 1;
      m = 0;
    }
    return m === 0 ? `${y} ${t.yearsShort}` : `${y} ${t.yearsShort} ${m} ${t.months}`;
  };
  return { eur, bgn, fmtYM };
}
