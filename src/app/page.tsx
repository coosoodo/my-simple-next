// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import LogoutButton from '@/components/LogoutButton';

export const metadata: Metadata = {
  title: 'SAGE LINE | 현명한 선택, 명확한 길',
  description: '데이터 기반의 통찰력과 전략적 기술로 비즈니스의 성공을 설계하는 파트너, 세이지라인입니다.',
};

export default async function HomePage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  if (code) redirect(`/auth/callback?code=${code}`);

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300 selection:bg-emerald-500/30">
      
      {/* 1. 프리미엄 네비게이션 */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050a14]/90 backdrop-blur-xl">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <a href="/" className="group flex items-center space-x-3 cursor-pointer">
            <div className="relative h-10 w-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                {/* 몸통 전체 */}
                <path d="M6 36 C6 36 8 40 20 40 C32 40 34 36 34 36 L32 20 C32 12 27 7 20 7 C13 7 8 12 8 20 Z" fill="url(#nBody)"/>
                {/* 왼쪽 귀 털 (뾰족하게) */}
                <path d="M11 12 L7 1 L15 10 Z" fill="url(#nGrad)"/>
                <path d="M12 11 L9 3 L15 9 Z" fill="url(#nGrad)" opacity="0.5"/>
                {/* 오른쪽 귀 털 */}
                <path d="M29 12 L33 1 L25 10 Z" fill="url(#nGrad)"/>
                <path d="M28 11 L31 3 L25 9 Z" fill="url(#nGrad)" opacity="0.5"/>
                {/* 얼굴 디스크 */}
                <ellipse cx="20" cy="20" rx="11" ry="10" fill="url(#nFace)"/>
                {/* 눈썹 왼쪽 */}
                <path d="M10 15 C12 12 15 12 17 14" stroke="url(#nGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                {/* 눈썹 오른쪽 */}
                <path d="M30 15 C28 12 25 12 23 14" stroke="url(#nGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                {/* 왼쪽 눈 흰자 */}
                <circle cx="14.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#nGrad)" strokeWidth="1"/>
                {/* 왼쪽 홍채 */}
                <circle cx="14.5" cy="19" r="4" fill="url(#nEye)"/>
                {/* 왼쪽 동공 */}
                <circle cx="14.5" cy="19" r="2" fill="#050a14"/>
                {/* 왼쪽 하이라이트 */}
                <circle cx="15.8" cy="17.5" r="1" fill="white" opacity="0.75"/>
                <circle cx="13.5" cy="20.5" r="0.4" fill="white" opacity="0.35"/>
                {/* 오른쪽 눈 흰자 */}
                <circle cx="25.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#nGrad)" strokeWidth="1"/>
                {/* 오른쪽 홍채 */}
                <circle cx="25.5" cy="19" r="4" fill="url(#nEye)"/>
                {/* 오른쪽 동공 */}
                <circle cx="25.5" cy="19" r="2" fill="#050a14"/>
                {/* 오른쪽 하이라이트 */}
                <circle cx="26.8" cy="17.5" r="1" fill="white" opacity="0.75"/>
                <circle cx="24.5" cy="20.5" r="0.4" fill="white" opacity="0.35"/>
                {/* 부리 */}
                <path d="M20 24 L17.5 28 L20 26.5 L22.5 28 Z" fill="url(#nGrad)"/>
                {/* 날개 왼쪽 */}
                <path d="M8 22 C4 26 3 33 6 37 C8 33 9 27 10 23 Z" fill="url(#nBody)" opacity="0.9"/>
                <path d="M8 24 C5 28 5 34 7 37" stroke="url(#nGrad)" strokeWidth="0.6" strokeLinecap="round" opacity="0.5"/>
                {/* 날개 오른쪽 */}
                <path d="M32 22 C36 26 37 33 34 37 C32 33 31 27 30 23 Z" fill="url(#nBody)" opacity="0.9"/>
                <path d="M32 24 C35 28 35 34 33 37" stroke="url(#nGrad)" strokeWidth="0.6" strokeLinecap="round" opacity="0.5"/>
                {/* 가슴 깃털 */}
                <path d="M13 30 Q20 33 27 30" stroke="url(#nGrad)" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M14 33 Q20 36 26 33" stroke="url(#nGrad)" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35"/>
                <defs>
                  <linearGradient id="nGrad" x1="7" y1="1" x2="33" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399"/>
                    <stop offset="100%" stopColor="#22d3ee"/>
                  </linearGradient>
                  <linearGradient id="nBody" x1="6" y1="7" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.26"/>
                  </linearGradient>
                  <radialGradient id="nFace" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#1a3a4a" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#082030" stopOpacity="0.3"/>
                  </radialGradient>
                  <radialGradient id="nEye" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#6ee7b7"/>
                    <stop offset="60%" stopColor="#0891b2"/>
                    <stop offset="100%" stopColor="#065f80"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* 워드마크 */}
            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-black tracking-[0.08em] text-white group-hover:text-emerald-300 transition-colors duration-300">
                SAGE<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> LINE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">Data-Driven Strategy</span>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {[['Vision', '#vision'], ['Business', '#business'], ['Technology', '#technology']].map(([item, href]) => (
              <a key={item} href={href} className="hover:text-emerald-400 transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-xs text-slate-400 hidden md:block">{user.email}</span>
                <LogoutButton />
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-all duration-300"
                >
                  로그인
                </a>
                <a
                  href="/signup"
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  회원가입
                </a>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* 2. Hero 섹션: 회사소개 핵심 메시지 반영 */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 lg:py-52">
          {/* 동적 배경 효과 */}
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[140px]" />
          
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Data-Driven Strategy Partner</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-[ -0.04em] text-white leading-[1.05]">
              현명한 선택,<br />
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                명확한 길.
              </span>
            </h1>
            
            <p className="mt-12 text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-white font-semibold italic">SAGELINE</span>은 
              데이터 기반의 통찰력과 전략적 기술을 결합하여<br className="hidden md:block" />
              고객의 <span className="text-emerald-400 font-medium">투자 효율성</span>과 성공을 위한 최적의 솔루션을 설계합니다.
            </p>
            

          </div>
        </section>

        {/* 3. Business 섹션 */}
        <section id="business" className="container mx-auto max-w-7xl px-8 py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-8">
              <span>Our Business</span>
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight mb-6">
              누구나 쓸 수 있는 <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">퀀트 투자</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              기관 투자자만의 영역이었던 자동화 알고리즘 매매를 <br className="hidden md:block" />
              개인 투자자도 쉽게 활용할 수 있도록 설계했습니다.
            </p>
          </div>

          {/* 서비스 카드 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-2xl">🦉</div>
                <div>
                  <h3 className="text-xl font-black text-white">부엉이 ATS</h3>
                  <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">Auto Trading System</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                키움증권 REST API 기반의 주식 자동매매 소프트웨어입니다.
                코딩 없이 조건식 편집기만으로 나만의 매매 전략을 설계하고,
                장 시작부터 마감까지 자동으로 실행합니다.
              </p>
              <ul className="space-y-2">
                {['조건검색식 기반 종목 자동 선정', '분할매수·익절·손절·트레일링스탑', '다중 전략 병렬 실행', '자동 스케줄러로 무인 운영'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <h3 className="text-xl font-black text-white">AI 전략 컨설팅</h3>
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest">Strategy Consulting</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                Google Gemini AI와 실시간 시장 데이터를 결합하여
                뉴스·공시·수급 흐름을 분석하고 투자 판단에
                데이터 기반 인사이트를 제공합니다.
              </p>
              <ul className="space-y-2">
                {['실시간 뉴스 감성 분석', '시장 지표 기반 진입 타이밍 포착', '리스크 노출도 자동 산출', '맞춤형 전략 설계 지원'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 대상 고객 */}
          <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 p-10">
            <h3 className="text-2xl font-black text-white mb-8 text-center">이런 분께 적합합니다</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['📈', '바쁜 직장인', '장 시간에 모니터링이 어렵지만\n체계적인 주식 투자를 원하시는 분'],
                ['🎯', '전략형 투자자', '감이 아닌 규칙 기반의\n반복 가능한 매매 시스템을 원하시는 분'],
                ['🔬', '퀀트 입문자', '코딩 없이 데이터 기반\n자동매매를 시작하고 싶으신 분'],
              ].map(([emoji, title, desc]) => (
                <div key={title} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-4xl mb-4">{emoji}</div>
                  <h4 className="text-base font-black text-white mb-2">{title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 브랜드 철학 (Sage & Line) 카드 */}
        <section id="vision" className="container mx-auto max-w-7xl px-8 py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">지혜로운 데이터 분석 (Sage)</h2>
              <p className="text-lg leading-relaxed text-slate-400 font-light">
                정보의 홍수 속에서 현상을 꿰뚫어 보는 통찰력을 제공합니다. 
                우리는 단순한 통계 수치를 넘어 비즈니스의 본질적 가치를 발견하며, 
                경험과 데이터를 융합한 현명한 의사결정의 토대를 마련합니다.
              </p>
            </div>
            <div className="h-64 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-white/5 flex items-center justify-center">
              <span className="text-8xl opacity-10 font-black">SAGE</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 md:order-1 h-64 rounded-3xl bg-gradient-to-bl from-cyan-500/20 to-transparent border border-white/5 flex items-center justify-center">
              <span className="text-8xl opacity-10 font-black">LINE</span>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">명확한 전략적 방향 (Line)</h2>
              <p className="text-lg leading-relaxed text-slate-400 font-light">
                분석된 통찰력은 실행 가능한 명확한 전략적 '라인'으로 이어져야 합니다. 
                복잡한 시장 환경에서도 흔들리지 않는 로드맵을 제시하여 
                고객이 목표 지점에 도달할 수 있도록 가장 효율적인 경로를 가이드합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology 섹션 */}
        <section id="technology" className="container mx-auto max-w-7xl px-8 py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-8">
              <span>Core Technology</span>
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight mb-6">
              데이터가 곧 <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">전략</span>이 됩니다
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              실시간 시장 데이터와 AI 분석을 결합한 자동매매 시스템으로 
              감정 없는 정밀한 투자 전략을 실행합니다.
            </p>
          </div>

          {/* 핵심 기술 카드 */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-emerald-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <div className="h-5 w-5 rounded-full bg-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">자동매매 전략 엔진</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                조건식 기반의 준비·실행 2단계 트리거로 매수·매도 전략을 자동 실행합니다.
                다중 전략 동시 운영, 분할 매수·익절·손절·트레일링 스탑까지 지원합니다.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-cyan-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <div className="h-5 w-5 rounded-full bg-cyan-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">실시간 WebSocket 통신</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                키움증권 REST API와 WebSocket을 통해 체결 데이터를 0.3초 이내로 처리합니다.
                신호등 기반 실시간 연결 상태 모니터링으로 장애를 즉시 감지합니다.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-blue-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <div className="h-5 w-5 rounded-full bg-blue-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">Google Gemini AI 분석</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Google Gemini AI를 활용한 실시간 뉴스 분석으로 시장 흐름을 파악합니다.
                감성 분석 결과를 매매 조건식과 연동하여 데이터 기반 의사결정을 지원합니다.
              </p>
            </div>
          </div>

          {/* 기술 상세 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
              <h3 className="text-2xl font-black text-white mb-6">부엉이 ATS 핵심 기능</h3>
              <ul className="space-y-4">
                {[
                  ['키움 조건검색식 연동', '영웅문 HTS 조건식을 실시간 자동매매 신호로 직접 활용'],
                  ['리스크 관리 시스템', '보유 종목 수 제한, 재매수 차단, 거래 제외 필터 다층 적용'],
                  ['자동 스케줄링', 'Windows 작업 스케줄러 연동으로 장 개장·마감 자동 실행'],
                  ['전략 가져오기/내보내기', 'JSON 형식으로 전략을 백업·이전·공유 가능'],
                  ['다중 계좌·다중 전략', '전략별 독립 계좌 연동, 복수 전략 동시 실행'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <span className="text-sm font-bold text-white">{title}</span>
                      <p className="text-xs text-slate-500 mt-1 font-light">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-4">자동매매 실행 흐름</h3>
                <p className="text-sm text-slate-400 font-light mb-8">조건 충족부터 체결까지, 모든 과정이 자동으로 처리됩니다.</p>
              </div>
              <div className="space-y-3">
                {[
                  '종목 선정 (조건검색식 / 단일종목)',
                  '실시간 시세 수신',
                  '준비조건 → 실행조건 평가',
                  '리스크 필터 검사',
                  '주문 금액 계산 → 주문 전송',
                  '체결 결과 수신 및 포지션 업데이트',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex-shrink-0 h-7 w-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-400">{i + 1}</span>
                    <span className="text-sm text-slate-300 font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. 푸터 */}
      <footer className="bg-[#03070e] border-t border-white/5 py-20 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-shrink-0">
                  <path d="M6 36 C6 36 8 40 20 40 C32 40 34 36 34 36 L32 20 C32 12 27 7 20 7 C13 7 8 12 8 20 Z" fill="url(#fBody)"/>
                  <path d="M11 12 L7 1 L15 10 Z" fill="url(#fGrad)"/>
                  <path d="M12 11 L9 3 L15 9 Z" fill="url(#fGrad)" opacity="0.5"/>
                  <path d="M29 12 L33 1 L25 10 Z" fill="url(#fGrad)"/>
                  <path d="M28 11 L31 3 L25 9 Z" fill="url(#fGrad)" opacity="0.5"/>
                  <ellipse cx="20" cy="20" rx="11" ry="10" fill="url(#fFace)"/>
                  <path d="M10 15 C12 12 15 12 17 14" stroke="url(#fGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <path d="M30 15 C28 12 25 12 23 14" stroke="url(#fGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <circle cx="14.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#fGrad)" strokeWidth="1"/>
                  <circle cx="14.5" cy="19" r="4" fill="url(#fEye)"/>
                  <circle cx="14.5" cy="19" r="2" fill="#050a14"/>
                  <circle cx="15.8" cy="17.5" r="1" fill="white" opacity="0.75"/>
                  <circle cx="25.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#fGrad)" strokeWidth="1"/>
                  <circle cx="25.5" cy="19" r="4" fill="url(#fEye)"/>
                  <circle cx="25.5" cy="19" r="2" fill="#050a14"/>
                  <circle cx="26.8" cy="17.5" r="1" fill="white" opacity="0.75"/>
                  <path d="M20 24 L17.5 28 L20 26.5 L22.5 28 Z" fill="url(#fGrad)"/>
                  <path d="M8 22 C4 26 3 33 6 37 C8 33 9 27 10 23 Z" fill="url(#fBody)" opacity="0.9"/>
                  <path d="M32 22 C36 26 37 33 34 37 C32 33 31 27 30 23 Z" fill="url(#fBody)" opacity="0.9"/>
                  <path d="M13 30 Q20 33 27 30" stroke="url(#fGrad)" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5"/>
                  <path d="M14 33 Q20 36 26 33" stroke="url(#fGrad)" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35"/>
                  <defs>
                    <linearGradient id="fGrad" x1="7" y1="1" x2="33" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399"/>
                      <stop offset="100%" stopColor="#22d3ee"/>
                    </linearGradient>
                    <linearGradient id="fBody" x1="6" y1="7" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.26"/>
                    </linearGradient>
                    <radialGradient id="fFace" cx="50%" cy="50%" r="55%">
                      <stop offset="0%" stopColor="#1a3a4a" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#082030" stopOpacity="0.3"/>
                    </radialGradient>
                    <radialGradient id="fEye" cx="40%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#6ee7b7"/>
                      <stop offset="60%" stopColor="#0891b2"/>
                      <stop offset="100%" stopColor="#065f80"/>
                    </radialGradient>
                  </defs>
                </svg>
                <div className="leading-none">
                  <div className="text-2xl font-black tracking-[0.08em] text-white">
                    SAGE<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> LINE</span>
                  </div>
                  <div className="text-[8px] font-bold tracking-[0.25em] text-slate-600 uppercase mt-0.5">Data-Driven Strategy</div>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
                데이터로 세상을 읽고, 전략으로 미래를 씁니다. <br />
                귀사의 가장 현명한 비즈니스 파트너가 되겠습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Contact</div>
              <a href="mailto:sageline2024@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <span className="text-slate-600">✉</span>
                sageline2024@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="text-slate-600">☎</span>
                <span>010-8067-4532</span>
                <span className="text-xs text-slate-600">담당자 최재혁</span>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-[10px] text-center text-slate-600 font-medium tracking-widest">
            COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}