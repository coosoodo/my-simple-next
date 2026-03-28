// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAGE LINE | 현명한 선택, 명확한 길',
  description: '데이터 기반의 통찰력과 전략적 기술로 비즈니스의 성공을 설계하는 파트너, 세이지라인입니다.',
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300 selection:bg-emerald-500/30">
      
      {/* 1. 프리미엄 네비게이션 */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050a14]/90 backdrop-blur-xl">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <div className="group flex items-center space-x-3 cursor-pointer">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#050a14]">
                <div className="h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">SAGE LINE</span>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {['Vision', 'Business', 'Technology', 'Contact'].map(item => (
              <a key={item} href="#" className="hover:text-emerald-400 transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
          <a
            href="/signup"
            className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
          >
            회원가입
          </a>
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
            
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative overflow-hidden rounded-full bg-white px-12 py-5 text-sm font-black text-black transition-all hover:bg-emerald-400">
                무료 상담 신청하기
              </button>
              <button className="text-sm font-bold tracking-widest text-slate-300 border-b border-slate-700 pb-1 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                VIEW OUR VISION →
              </button>
            </div>
          </div>
        </section>

        {/* 3. 브랜드 철학 (Sage & Line) 카드 */}
        <section className="container mx-auto max-w-7xl px-8 py-24 border-t border-white/5">
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
      </main>

      {/* 4. 푸터 */}
      <footer className="bg-[#03070e] border-t border-white/5 py-20 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <div className="text-3xl font-black text-white tracking-tighter mb-4">SAGE LINE</div>
              <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
                데이터로 세상을 읽고, 전략으로 미래를 씁니다. <br />
                귀사의 가장 현명한 비즈니스 파트너가 되겠습니다.
              </p>
            </div>
            <div className="flex space-x-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
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