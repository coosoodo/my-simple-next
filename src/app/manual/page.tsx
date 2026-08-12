import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ArrowRight, Tag, Clock, Layers } from 'lucide-react';

import ManualHeader from '@/components/ManualHeader';
import { parseManual, getPages, getManualNav } from '@/lib/manual-utils';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: '사용자 설명서 | SAGE LINE' },
  description:
    '부엉이 트레이더 프로와 부엉이 트레이더 라이트의 공식 사용자 설명서입니다. 사용 중인 제품을 선택해 설치부터 자동매매 전략 설정까지 확인하세요.',
};

/** 설명서 파일에서 표지 카드에 필요한 정보만 뽑아낸다. */
function readManualSummary(file: string, basePath: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'src/content', file), 'utf8');
  const { meta } = parseManual(raw);
  const pages = getPages(raw);
  return {
    version: meta.version,
    lastUpdated: meta.lastUpdated,
    chapterCount: getManualNav(raw, basePath).length,
    // 표지를 거치지 않고 곧바로 1장으로 보낸다. 장 목록은 각 장 페이지의 사이드바에 있다.
    href: pages[0] ? `${basePath}/${pages[0].slug}` : basePath,
  };
}

export default async function ManualIndexPage() {
  const pro = readManualSummary('manual.md', '/manual');
  const lite = readManualSummary('manual-lite.md', '/manual-lite');

  const products = [
    {
      key: 'pro',
      emoji: '🦉',
      badge: 'All-in-One',
      name: '부엉이 트레이더 프로',
      englishName: 'Owl Trader Pro',
      description:
        '자동매매부터 차트 · 기술 지표, 조건검색, AI 매수의견 판정까지 갖춘 종합 트레이딩 스위트입니다.',
      accent: 'teal' as const,
      ...pro,
    },
    {
      key: 'lite',
      emoji: '🪶',
      badge: 'Light & Fast',
      name: '부엉이 트레이더 라이트',
      englishName: 'Owl Trader Lite',
      description:
        '조건검색식 자동매매의 핵심만 담은 100% 무료 경량 버전입니다. 복잡한 기능은 덜어냈습니다.',
      accent: 'navy' as const,
      ...lite,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      {/* 제품 선택 페이지는 특정 설명서에 속하지 않으므로 버전 뱃지를 띄우지 않는다. */}
      <ManualHeader />

      <div className="container mx-auto max-w-5xl px-8 py-12 flex-grow">
        {/* 표지 히어로 */}
        <div className="mb-14 p-10 rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50 via-navy-50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={140} className="text-teal-500" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 mb-4 px-3 py-1 rounded-full bg-teal-100 border border-teal-200">
              <BookOpen size={14} /> Official Documentation
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              사용자 설명서
            </h1>
            <p className="text-lg text-slate-600 font-light max-w-2xl">
              사용 중인 제품을 선택하세요. 설치부터 자동매매 전략 설정까지 장별로 안내합니다.
              처음 사용하시는 경우 <span className="text-teal-700 font-medium">1장부터</span> 순서대로 읽어보세요.
            </p>
          </div>
        </div>

        {/* 제품 선택 */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => {
            const isPro = p.accent === 'teal';
            return (
              <Link
                key={p.key}
                href={p.href}
                className={`group flex flex-col rounded-3xl border border-slate-100 bg-slate-50/50 p-10 transition-all duration-300 hover:shadow-xl ${
                  isPro
                    ? 'hover:border-teal-500/30 hover:shadow-teal-500/5'
                    : 'hover:border-navy-500/30 hover:shadow-navy-500/5'
                }`}
              >
                <div
                  className={`self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8 ${
                    isPro ? 'bg-teal-500/10 text-teal-600' : 'bg-navy-500/10 text-navy-600'
                  }`}
                >
                  {p.badge}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`h-14 w-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-3xl ${
                      isPro ? 'bg-teal-500/10' : 'bg-navy-500/10'
                    }`}
                  >
                    {p.emoji}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-2xl font-black text-slate-900">{p.name}</h2>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mt-1 ${
                        isPro ? 'text-teal-600' : 'text-navy-600'
                      }`}
                    >
                      {p.englishName}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">{p.description}</p>

                <dl className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-slate-500 mb-8">
                  <div className="flex items-center gap-1.5">
                    <Tag size={12} className={isPro ? 'text-teal-600' : 'text-navy-600'} />
                    <dt className="sr-only">설명서 버전</dt>
                    <dd>v{p.version}</dd>
                  </div>
                  <span className="h-3 w-px bg-slate-200" />
                  <div className="flex items-center gap-1.5">
                    <Layers size={12} className={isPro ? 'text-teal-600' : 'text-navy-600'} />
                    <dt className="sr-only">장 수</dt>
                    <dd>{p.chapterCount}개 장</dd>
                  </div>
                  {p.lastUpdated && (
                    <>
                      <span className="h-3 w-px bg-slate-200" />
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className={isPro ? 'text-teal-600' : 'text-navy-600'} />
                        <dt className="sr-only">최종 수정일</dt>
                        <dd>{p.lastUpdated}</dd>
                      </div>
                    </>
                  )}
                </dl>

                <span
                  className={`mt-auto inline-flex items-center gap-2 self-start rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all ${
                    isPro
                      ? 'bg-slate-900 group-hover:bg-teal-600'
                      : 'bg-slate-900 group-hover:bg-navy-600'
                  }`}
                >
                  설명서 보기
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400 font-light">
          어느 제품을 쓰고 계신지 모르겠다면, 프로그램 제목 표시줄이나{' '}
          <strong className="font-medium text-slate-500">[도움말 → 프로그램 정보]</strong> 에서 제품명을 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
