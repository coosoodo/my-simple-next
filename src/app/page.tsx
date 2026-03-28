// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SageLine | Data Intelligence',
  description: '데이터로 그리는 비즈니스의 미래, 세이지라인입니다.',
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f172a] text-slate-200 selection:bg-indigo-500/30">
      
      {/* 1. 네비게이션 헤더 (유리 질감 효과) */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20" />
            <span className="text-2xl font-black tracking-tighter text-white">SageLine</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide">
            {['Vision', 'Solution', 'Technology', 'Contact'].map(item => (
              <a key={item} href="#" className="text-slate-400 hover:text-indigo-400 transition-colors duration-200">
                {item}
              </a>
            ))}
            <button className="rounded-full bg-slate-800 px-5 py-2 text-white hover:bg-slate-700 transition">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* 2. Hero 섹션 (그라데이션 및 강조) */}
      <main className="flex-grow">
        <section className="relative overflow-hidden px-6 py-24 lg:py-40">
          {/* 배경 장식 요소 */}
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
          
          <div className="container mx-auto max-w-7xl text-center">
            <div className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-8">
              The Future of Data Analysis
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.1]">
              Predict Your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next Business Line
              </span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              세이지라인은 단순한 분석을 넘어 데이터 사이의 연결 고리를 찾아냅니다. 
              미래를 예측하고 의사결정의 명확한 가이드를 제공합니다.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                무료 진단 시작하기
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-slate-700 text-slate-300 rounded-xl font-bold hover:bg-slate-800 transition">
                기술 문서 보기
              </button>
            </div>
          </div>
        </section>

        {/* 3. 서비스 카드 섹션 (글래스모피즘 스타일) */}
        <section className="container mx-auto max-w-7xl px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="⚡" 
              title="Real-time Stream" 
              description="초단위 데이터 스트림 분석으로 즉각적인 시장 반응을 포착합니다." 
            />
            <FeatureCard 
              icon="🧠" 
              title="AI Deep Insights" 
              description="고도화된 신경망 모델을 통해 비즈니스 패턴과 변곡점을 찾아냅니다." 
            />
            <FeatureCard 
              icon="📊" 
              title="Decision Intelligence" 
              description="데이터 시각화를 넘어 최적의 행동 시나리오를 자동 생성합니다." 
            />
          </div>
        </section>
      </main>

      {/* 4. 푸터 */}
      <footer className="border-t border-slate-800 bg-[#0b1222]">
        <div className="container mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="font-bold text-white opacity-80">© 2026 SageLine.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 재사용 가능한 카드 컴포넌트
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-indigo-600/10 blur-2xl group-hover:bg-indigo-600/20" />
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-light">{description}</p>
    </div>
  );
}