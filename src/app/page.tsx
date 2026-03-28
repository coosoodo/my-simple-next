// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';

// 1. 보안 및 최적화: 메타데이터 설정
export const metadata: Metadata = {
  title: 'SageLine - 지혜로운 데이터, 명확한 비즈니스 라인',
  description: '세이지라인은 데이터를 통해 기업의 혁신적인 의사결정을 돕는 최고의 파트너입니다.',
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-neutral-900">
      
      {/* 2. 네비게이션 헤더 (정적 구조) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="text-2xl font-bold text-emerald-800">SageLine</div>
          <div className="flex space-x-6 text-sm font-medium text-neutral-700">
            {['소개', '서비스', '솔루션', '문의'].map(item => (
              <a key={item} href="#" className="hover:text-emerald-700 transition">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* 3. Hero 섹션 (핵심 가치 전달) */}
      <main className="flex-grow container mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-950">
            지혜로운 데이터 분석,<br />
            명확한 비즈니스 라인.
          </h1>
          <p className="mt-8 text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            SageLine은 복잡한 데이터 속에서 비즈니스의 핵심 통찰력을 발견하고,<br />
            이를 실행 가능한 명확한 전략적 방향성(Line)으로 제시합니다.
          </p>
          <div className="mt-12">
            {/* 4. CTA 버튼 (클라이언트 컴포넌트로 분리 대상) */}
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition transform hover:-translate-y-0.5 shadow-lg">
              상담 신청하기
            </button>
          </div>
        </section>

        {/* 5. 주요 서비스 섹션 (데이터 기반 구조화 가능) */}
        <section className="mt-24 grid md:grid-cols-3 gap-10">
          <ServiceCard title="비즈니스 전략 컨설팅" description="데이터 기반 시장 분석을 통해 명확한 성장 전략을 수립합니다." />
          <ServiceCard title="빅데이터 분석 솔루션" description="복잡한 대용량 데이터를 시각화하고 인사이트를 도출합니다." />
          <ServiceCard title="AI 예측 모델링" description="머신러닝 기술을 활용하여 미래 비즈니스 흐름을 예측합니다." />
        </section>
      </main>

      {/* 6. 푸터 */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto max-w-7xl px-6 py-8 text-sm text-center text-neutral-500">
          &copy; 2026 SageLine. All rights reserved. 지혜로운 데이터 파트너.
        </div>
      </footer>
    </div>
  );
}

// 7. 컴포넌트 분리: 코드 재사용성 및 가독성 향상
function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 border rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-emerald-900">{title}</h3>
      <p className="mt-4 text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}