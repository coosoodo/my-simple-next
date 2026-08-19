import React from 'react';

const STRATEGIES = [
  { name: '단타 눌림목 매수', active: true },
  { name: '거래량 급증 포착', active: true },
  { name: '장초반 갭 상승', active: false },
];

const FILLS = [
  { time: '09:32:05', side: '매수', name: '반도체 대장주', qty: '10주', profit: null, ai: true },
  { time: '10:14:23', side: '매도', name: '2차전지 소재', qty: '24주', profit: '+3.2%', ai: false },
  { time: '11:02:47', side: '매수', name: 'AI 플랫폼', qty: '15주', profit: null, ai: true },
];

/** 히어로 섹션용 부엉이 트레이더 대시보드 목업 (장식용) */
export default function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-4xl" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-teal-500/15 via-navy-500/10 to-blue-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 text-left">
        {/* 윈도우 크롬 */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-teal-400/70" />
          <span className="ml-3 text-[11px] font-bold tracking-wide text-slate-400">
            부엉이 트레이더 — 자동매매 대시보드
          </span>
          <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-bold text-teal-600">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            자동매매 실행 중
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
          {/* 사이드바: 전략 목록 */}
          <div className="hidden md:block border-r border-slate-100 bg-slate-50/40 p-4">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">내 전략</p>
            <div className="space-y-2">
              {STRATEGIES.map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-lg bg-white border border-slate-100 px-3 py-2">
                  <span className="text-[11px] font-bold text-slate-600">{s.name}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${s.active ? 'bg-teal-500' : 'bg-slate-300'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* 메인 영역 */}
          <div className="p-5">
            {/* 스탯 타일 */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">오늘 수익률</p>
                <p className="mt-1 text-lg font-black text-teal-600">+2.4%</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">체결</p>
                <p className="mt-1 text-lg font-black text-slate-800">12건</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">감시 종목</p>
                <p className="mt-1 text-lg font-black text-slate-800">8개</p>
              </div>
            </div>

            {/* 미니 차트 */}
            <div className="mb-4 rounded-xl border border-slate-100 p-4">
              <svg viewBox="0 0 400 90" className="h-24 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mock-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#14b8a6" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 70 L30 62 L60 66 L90 50 L120 55 L150 40 L180 46 L210 32 L240 38 L270 24 L300 30 L330 18 L360 22 L400 10 L400 90 L0 90 Z"
                  fill="url(#mock-area)"
                />
                <path
                  d="M0 70 L30 62 L60 66 L90 50 L120 55 L150 40 L180 46 L210 32 L240 38 L270 24 L300 30 L330 18 L360 22 L400 10"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* 체결 로그 */}
            <div className="space-y-2">
              {FILLS.map((f) => (
                <div key={f.time} className="flex items-center gap-3 rounded-lg bg-slate-50/70 px-3 py-2 text-[11px]">
                  <span className="font-mono text-slate-400">{f.time}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-black ${
                      f.side === '매수' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                    }`}
                  >
                    {f.side}
                  </span>
                  <span className="font-bold text-slate-600">{f.name}</span>
                  {f.ai && (
                    <span className="hidden sm:inline rounded bg-teal-500/10 px-1.5 py-0.5 text-[10px] font-black text-teal-600">
                      AI 승인
                    </span>
                  )}
                  <span className="text-slate-400">{f.qty} 체결</span>
                  {f.profit && <span className="ml-auto font-black text-teal-600">{f.profit}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
