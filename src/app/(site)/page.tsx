// src/app/page.tsx (서버 컴포넌트)
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/lib/supabase-server';
import Reveal from '@/components/Reveal';
import HeroMockup from '@/components/HeroMockup';
import {
  ChevronRight,
  CandlestickChart,
  ShieldCheck,
  BellRing,
  Workflow,
  LineChart,
  Zap,
  Check,
  Minus,
  Sparkles,
  Webhook,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'SAGE LINE | 현명한 선택, 명확한 길' },
  description:
    '키움증권 REST API 기반 주식 자동매매 프로그램 부엉이 트레이더 — AI 매수의견 판정, 외부 매매신호 연동, 손절·익절·트레일링 스탑까지. 데이터 기반의 통찰력과 전략적 기술로 개인 투자자의 성공을 설계하는 파트너, 세이지라인입니다.',
};

const FULL_FEATURES = [
  'AI 매수의견 판정 — 매수 직전 ChatGPT · Gemini 재검증',
  '조건검색식 · 사용자 정의 · 단일종목 자동매매',
  '조건식 라이브러리와 베팅 · 주문 전략 편집기',
  '외부 프로그램 매매신호 수신 (REST API)',
  '분봉 · 일봉 · 업종 차트와 기술적 지표',
  '지수 이동평균 조건식 · 시간외단일가 · VI 조회',
  '자동매매 수익률 조회 · 매매제한 현황',
  'Discord · Telegram 실시간 알림',
];

const LITE_FEATURES = [
  '키움 조건검색식 기반 자동매매에 집중한 경량 설계',
  '손절 · 익절 · 트레일링 스탑 · 분할 매수/매도',
  '매매 설정별 당일청산 — 단타와 스윙을 한 계좌에서',
  '대체거래소(NXT) 프리마켓 · 애프터마켓 매수 시간대',
  '하이브리드 모드 — HTS 매수 종목도 감시 · 자동매매 편입',
  '계좌별 주문 폭주 방지 하드리밋 · 이상 시세 가드',
  '권리이벤트 감지 시 해당 종목 자동매매 자동 중지',
  '국내 업종지수 · 나스닥 · S&P500 · 환율 · WTI 지표',
  'Telegram 실시간 알림 · 매매 통계와 성과 분석',
];

const COMPARISON: { label: string; full: string | boolean; lite: string | boolean }[] = [
  { label: '조건검색식 자동매매', full: true, lite: true },
  { label: '손절 · 익절 · 트레일링 스탑', full: true, lite: true },
  { label: 'AI 매수의견 판정', full: true, lite: false },
  { label: '외부 프로그램 신호 연동 (REST API)', full: true, lite: false },
  { label: '사용자 정의 전략 · 수식 편집기', full: true, lite: false },
  { label: '차트 · 기술적 지표', full: true, lite: false },
  { label: '하이브리드 모드 (HTS 매수 종목 편입)', full: false, lite: true },
  { label: '실시간 감시 종목', full: '190종목', lite: '190종목' },
  { label: '알림', full: 'Discord + Telegram', lite: 'Telegram' },
  { label: '권장 사용자', full: '파워 트레이더', lite: '입문 · 실전 겸용' },
];

type UpdateGroup = {
  product: string;
  version: string;
  date: string;
  href: string;
  badgeClass: string;
  dotClass: string;
  linkClass: string;
  items: { title: string; desc: string }[];
};

const UPDATES: UpdateGroup[] = [
  {
    product: '부엉이 트레이더 프로',
    version: 'v2.3.0',
    date: '2026. 8. 15.',
    href: '/manual/1',
    badgeClass: 'bg-teal-500/10 text-teal-600',
    dotClass: 'bg-teal-500',
    linkClass: 'text-teal-600 hover:text-teal-700',
    items: [
      {
        title: 'AI 매수의견 판정',
        desc: '조건검색식이 편입한 종목을 최초매수 직전에 ChatGPT · Gemini에게 한 번 더 묻습니다. 바로 쓸 수 있는 프롬프트 5종과, 매수는 그대로 두고 판정만 기록하는 Shadow 모드를 제공합니다.',
      },
      {
        title: '외부 매매신호 API — 이제 매도까지',
        desc: '외부 프로그램이 매수뿐 아니라 매도 시점도 지정할 수 있습니다. 수량과 가격은 외부가 아니라 지정한 주문전략이 그대로 결정합니다.',
      },
      {
        title: '지수 조건식 강화',
        desc: '코스피지수20MA · 코스닥지수20MA 변수가 추가되었습니다. 지수 값을 받지 못한 동안에는 그 값을 쓰는 조건이 통과하지 않습니다.',
      },
      {
        title: '실시간 감시 190종목',
        desc: '키움 API 한도 확대에 맞춰 계좌당 감시 종목을 90개에서 190개로 늘렸습니다.',
      },
    ],
  },
  {
    product: '부엉이 트레이더 라이트',
    version: 'v1.5.6',
    date: '2026. 8. 15.',
    href: '/manual-lite/1',
    badgeClass: 'bg-navy-500/10 text-navy-600',
    dotClass: 'bg-navy-500',
    linkClass: 'text-navy-600 hover:text-navy-700',
    items: [
      {
        title: '대체거래소(NXT) 시간대 지원',
        desc: '프리마켓 · 애프터마켓을 버튼 한 번으로 넣습니다. 매수 시간대를 여러 개 지정할 수 있고, 시간 입력이 24시간제로 바뀌었습니다.',
      },
      {
        title: '매매 설정별 당일청산',
        desc: '단타 전략은 항상 청산, 스윙 전략은 청산 안 함. 성격이 다른 전략을 한 계좌에서 함께 굴릴 수 있습니다. 감시 목록에서 종목별 청산 예정 시각도 보입니다.',
      },
      {
        title: '하이브리드 모드 기본 적용',
        desc: 'HTS · MTS에서 직접 산 종목도 감시 목록에 표시됩니다. 자동매매를 맡길지는 편입 버튼으로 직접 정합니다.',
      },
      {
        title: '상단 지표 직접 선택',
        desc: 'KOSPI200 · 대형주 같은 국내 업종지수에 나스닥 · S&P500 · 원달러 환율 · WTI 유가가 더해졌습니다.',
      },
    ],
  },
];

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={16} className="mx-auto text-teal-500" />;
  if (value === false) return <Minus size={16} className="mx-auto text-slate-300" />;
  return <span className="text-xs font-medium text-slate-600">{value}</span>;
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  if (code) redirect(`/auth/callback?code=${code}`);

  const supabase = await createSupabaseServerClient();
  await supabase.auth.getUser();

  return (
    <div className="flex flex-col text-slate-600 selection:bg-teal-500/30">

      <main className="flex-grow">
        {/* 1. Hero 섹션 */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-28 lg:pt-52 lg:pb-36">
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-navy-500/5 blur-[120px]" />

          <div className="container mx-auto max-w-5xl text-center">
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>Data-Driven Strategy Partner</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-sm shadow-teal-500/30">
                100% 무료
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-slate-900 leading-[1.05]">
              현명한 선택,<br />
              <span className="bg-gradient-to-r from-navy-600 via-navy-500 to-teal-500 bg-clip-text text-transparent">
                명확한 길.
              </span>
            </h1>

            <p className="mt-12 text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-slate-900 font-semibold italic">SAGELINE</span>은
              기관의 영역이었던 알고리즘 자동매매를<br className="hidden md:block" />
              개인 투자자의 책상 위로 가져왔습니다.
              <span className="text-teal-600 font-medium"> 부엉이 트레이더</span>와 함께 시작하세요.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10"
              >
                제품 살펴보기
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/boards/free"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-slate-600 hover:border-teal-500/40 hover:text-teal-600 transition-all duration-300"
              >
                커뮤니티
              </Link>
            </div>

            <Reveal delay={200} className="mt-24">
              <HeroMockup />
            </Reveal>
          </div>
        </section>

        {/* 2. Products 섹션 */}
        <section id="products" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
              <span>Our Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              누구나 쓸 수 있는 <span className="text-teal-600">퀀트 투자</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              키움증권 REST API 기반의 주식 자동매매 프로그램. <br className="hidden md:block" />
              투자 스타일에 맞는 부엉이를 선택하세요.
            </p>
          </Reveal>

          {/* 무료 다운로드 하이라이트 */}
          <Reveal className="mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/[0.08] via-white to-navy-500/[0.06] px-8 py-10 md:px-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-teal-600 mb-5">
                    100% Free
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                    네이버 카페에서 <span className="text-teal-600">무료로 다운로드</span>
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed">
                    별도의 결제나 구독 없이, <span className="font-semibold text-slate-700">모든 기능을 무료로</span> 사용할 수 있습니다.
                    지금 바로 내려받아 자동매매를 시작하세요.
                  </p>
                </div>
                <a
                  href="https://cafe.naver.com/sageline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-[#02b152] transition-all duration-300 shadow-lg shadow-[#03C75A]/20"
                >
                  네이버 카페에서 무료 다운로드
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* 부엉이 트레이더 프로 */}
            <Reveal id="owl-trader" className="group relative h-full scroll-mt-24 rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-600">
                All-in-One
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl">🦉</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더 프로</h3>
                  <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mt-1">Owl Trader Pro</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                자동매매부터 차트 · 기술 지표, 실시간 시세, 조건검색까지 갖춘 종합 트레이딩 스위트입니다.
                코딩 없이 조건식 편집기만으로 나만의 매매 전략을 설계하고 자동으로 실행합니다.
                여기에 매수 직전 AI에게 의견을 묻는 판정 단계와, 외부 프로그램의 신호를 받는 REST API가 더해졌습니다.
              </p>
              <ul className="space-y-3 mb-8">
                {FULL_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-teal-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/manual/1"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-600 hover:text-teal-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            {/* 부엉이 트레이더 라이트 */}
            <Reveal id="owl-trader-lite" delay={150} className="group relative h-full scroll-mt-24 rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-navy-500/30 hover:shadow-lg hover:shadow-navy-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-navy-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-600">
                Light &amp; Fast
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-navy-500/10 flex items-center justify-center text-3xl">🪶</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더 라이트</h3>
                  <p className="text-xs text-navy-600 font-bold uppercase tracking-widest mt-1">Owl Trader Lite</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                조건검색식 자동매매의 핵심만 담아 가볍고 빠르게 새로 설계한 버전입니다.
                복잡한 기능은 덜어내고, 계좌를 지키는 매매 전략에 집중했습니다.
                이제 대체거래소 시간대와 HTS에서 직접 산 종목까지 같은 화면에서 관리합니다.
              </p>
              <ul className="space-y-3 mb-8">
                {LITE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-navy-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/manual-lite/1"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-navy-600 hover:text-navy-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* 제품 비교 테이블 */}
          <Reveal className="rounded-3xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">기능 비교</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-teal-600">프로</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-navy-600">라이트</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 text-sm font-medium text-slate-700">{row.label}</td>
                      <td className="px-6 py-4 text-center"><ComparisonCell value={row.full} /></td>
                      <td className="px-6 py-4 text-center"><ComparisonCell value={row.lite} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* 3. 최신 업데이트 섹션 */}
        <section id="updates" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
              <span>Latest Update</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              부엉이는 <span className="text-teal-600">계속 자랍니다</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              사용자들이 장중에 겪은 일들을 그대로 반영합니다. <br className="hidden md:block" />
              최근 릴리즈에서 새로 더해진 기능입니다.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {UPDATES.map((group, gi) => (
              <Reveal
                key={group.product}
                delay={gi * 150}
                className="h-full rounded-3xl border border-slate-100 bg-white p-8 md:p-10"
              >
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black text-slate-900">{group.product}</h3>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-black tracking-wide ${group.badgeClass}`}>
                    {group.version}
                  </span>
                  <span className="text-xs text-slate-400">{group.date}</span>
                </div>

                <ol className="relative space-y-6 border-l border-slate-100 pl-6">
                  {group.items.map((item) => (
                    <li key={item.title} className="relative">
                      <span className={`absolute -left-[1.9rem] top-1.5 h-2 w-2 rounded-full ${group.dotClass}`} />
                      <p className="text-sm font-bold text-slate-800 mb-1.5">{item.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </li>
                  ))}
                </ol>

                <Link
                  href={group.href}
                  className={`mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors group/link ${group.linkClass}`}
                >
                  설명서에서 자세히 보기
                  <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. Technology 섹션 */}
        <section id="technology" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-navy-500/20 bg-navy-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-navy-600 mb-8">
              <span>Core Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              감정을 배제하고, <span className="text-navy-700">시스템이 매매합니다</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              실시간 시장 데이터를 기반으로 감정을 배제하고 원칙대로 매매하는 시스템의 핵심 기술입니다.
            </p>
          </Reveal>

          {/* 벤토 그리드 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 전략 자동화 엔진 — 대형 카드 */}
            <Reveal className="md:col-span-2 md:row-span-2 rounded-3xl border border-slate-100 bg-white p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <Workflow size={22} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">전략 자동화 엔진</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-10 max-w-lg">
                키움 조건검색식 신호를 실시간으로 받아 매수·매도 주문까지 사람의 개입 없이 실행합니다.
                코딩 없이 편집기만으로 전략을 완성합니다.
              </p>
              <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
                {['조건검색 신호', '전략 필터', '자동 주문', '체결 알림'].map((step, i, arr) => (
                  <React.Fragment key={step}>
                    <span className="rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-xs font-bold text-teal-700">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ChevronRight size={14} className="text-slate-300" />}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">24시간</p>
                  <p className="mt-1 text-xs text-slate-500">시장 감시</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">0줄</p>
                  <p className="mt-1 text-xs text-slate-500">필요한 코딩</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">실시간</p>
                  <p className="mt-1 text-xs text-slate-500">신호 → 주문</p>
                </div>
              </div>
            </Reveal>

            {/* 리스크 관리 */}
            <Reveal delay={100} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">리스크 관리</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-5">
                계좌를 지키는 매도 전략을 시스템이 대신 지켜봅니다.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['손절', '익절', '트레일링 스탑', '분할매매', '이익보존'].map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">{t}</span>
                ))}
              </div>
            </Reveal>

            {/* 차트 · 기술 지표 */}
            <Reveal delay={200} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-navy-500/30 hover:shadow-xl hover:shadow-navy-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500/10 to-blue-500/10 text-navy-600">
                <CandlestickChart size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">차트 · 기술 지표</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                분봉 · 일봉 · 업종 차트와 피벗 · 볼린저밴드 · 일목균형표 등 기술적 지표로 시장의 흐름을 읽습니다.
              </p>
            </Reveal>

            {/* AI 매수의견 판정 — 신규 */}
            <Reveal delay={100} className="md:col-span-2 rounded-3xl border border-slate-100 bg-white p-8 md:p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <Sparkles size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">AI 매수의견 판정</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-6 max-w-xl">
                조건검색식은 숫자만 봅니다. 조건은 맞지만 이미 꼭대기까지 올라버린 종목도 똑같이 편입되죠.
                부엉이 트레이더 프로는 최초매수 직전에 한 번 더 묻습니다.
                <span className="font-semibold text-slate-700"> 판정만 기록하고 매수는 그대로 두는 Shadow 모드</span>로 먼저 관찰해 볼 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['ChatGPT', 'Gemini', '프롬프트 프리셋 5종', '23가지 변수', 'Shadow 모드', '일일 호출 한도'].map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">{t}</span>
                ))}
              </div>
            </Reveal>

            {/* 외부 신호 연동 — 신규 */}
            <Reveal delay={200} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-navy-500/30 hover:shadow-xl hover:shadow-navy-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500/10 to-blue-500/10 text-navy-600">
                <Webhook size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">외부 신호 연동</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                직접 만든 프로그램이나 다른 분석 도구가 REST API로 매수 · 매도 시점을 지시합니다.
                얼마나 어떻게 사고팔지는 기존 주문전략이 그대로 결정합니다.
              </p>
            </Reveal>

            {/* 실시간 알림 — 와이드 카드 */}
            <Reveal delay={100} className="md:col-span-3 rounded-3xl border border-slate-100 bg-white p-8 md:p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:max-w-sm flex-shrink-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                    <BellRing size={22} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">실시간 알림</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    체결, 신호 포착, 전략 상태 변화를 Discord와 Telegram으로 즉시 전달합니다.
                    자리를 비워도 매매 현황을 놓치지 않습니다.
                  </p>
                </div>
                <div className="flex-grow space-y-2" aria-hidden="true">
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-[#5865F2]/10 px-2 py-1 font-black text-[#5865F2]">Discord</span>
                    <span className="font-bold text-slate-600">[체결] 매수 주문 체결 — 10주 · 09:32:05</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-[#229ED9]/10 px-2 py-1 font-black text-[#229ED9]">Telegram</span>
                    <span className="font-bold text-slate-600">[신호] 조건검색식 &lsquo;거래량 급증&rsquo; 신규 편입 감지</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-teal-500/10 px-2 py-1 font-black text-teal-600">전략</span>
                    <span className="font-bold text-slate-600">[익절] 목표 수익률 도달 — 전량 매도 완료 (+3.2%)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Vision 섹션 */}
        <section id="vision" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="rounded-3xl bg-gradient-to-br from-teal-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
                <LineChart size={22} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4">Sage — 지혜</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">지혜로운 데이터 분석</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                정보의 홍수 속에서 현상을 꿰뚫어 보는 통찰력을 제공합니다.
                뉴스와 시세, 수급의 흐름을 데이터로 읽어 소음이 아닌 신호에 집중합니다.
              </p>
            </Reveal>
            <Reveal delay={150} className="rounded-3xl bg-gradient-to-br from-navy-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-500/10 text-navy-600">
                <Zap size={22} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy-600 mb-4">Line — 원칙</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">흔들리지 않는 매매 원칙</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                공포와 탐욕 대신 미리 정한 원칙이 매매합니다.
                진입부터 청산까지, 전략이 그린 명확한 선을 시스템이 끝까지 지킵니다.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 6. CTA 섹션 */}
        <section className="border-t border-slate-100">
          <div className="container mx-auto max-w-5xl px-6 md:px-8 py-28 text-center">
            <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-20">
              <div className="absolute top-0 left-1/2 -z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[100px]" />
              <div className="relative z-10">
                <div className="text-5xl mb-8">🦉</div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                  부엉이는 밤에도 <span className="text-teal-300">시장을 지켜봅니다</span>
                </h2>
                <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light mb-12">
                  네이버 카페에서 <span className="font-semibold text-teal-300">무료로 다운로드</span>하고 <span className="font-semibold text-teal-300">모든 기능을 무료로</span> 사용하세요. <br className="hidden md:block" />
                  커뮤니티에서 최신 소식과 전략을 사용자들과 나눠보세요.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://cafe.naver.com/sageline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-[#02b152] transition-all duration-300"
                  >
                    네이버 카페 바로가기
                  </a>
                  <Link
                    href="/boards/free"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-white/10 transition-all duration-300"
                  >
                    커뮤니티
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
