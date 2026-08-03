import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ChevronRight, ArrowRight } from 'lucide-react';

import ManualHeader from '@/components/ManualHeader';
import { parseManual, getPages, getManualNav } from '@/lib/manual-utils';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: '부엉이 트레이더 프로 사용자 설명서 | SAGE LINE' },
  description: '부엉이 트레이더 프로의 설치부터 자동 매매 전략 설정까지 전체 사용법을 안내합니다.',
};

export default async function ManualIndexPage() {
  const manualPath = path.join(process.cwd(), 'src/content/manual.md');
  const raw = fs.readFileSync(manualPath, 'utf8');
  const { meta } = parseManual(raw);
  const nav = getManualNav(raw);
  const pages = getPages(raw);

  // 절이 없는 장의 h2 미리보기 텍스트
  const previewByChapter = new Map<string, string[]>();
  for (const p of pages) {
    if (!p.isSection) previewByChapter.set(p.chapterSlug, p.sections);
  }

  const firstHref = pages[0] ? `/manual/${pages[0].slug}` : '/manual';

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <ManualHeader version={meta.version} lastUpdated={meta.lastUpdated} />

      <div className="container mx-auto max-w-6xl px-8 py-12 flex-grow">
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
              {meta.title}
            </h1>
            <p className="text-lg text-slate-600 font-light max-w-2xl mb-8">
              부엉이 트레이더 프로의 설치부터 고급 전략 설정까지 모든 과정을 장별로 안내합니다.
              처음 사용하시는 경우 <span className="text-teal-700 font-medium">1장부터</span> 순서대로 읽어보세요.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={firstHref}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all"
              >
                설명서 시작하기
                <ArrowRight size={16} />
              </Link>
              <Link href="/manual-lite" className="text-sm font-bold text-navy-600 hover:text-navy-700 transition-colors">
                라이트 버전 설명서 보기 →
              </Link>
            </div>
          </div>
        </div>

        {/* 장 카드 그리드 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {nav.map((ch) => {
            const shortTitle = ch.title.replace(/^\s*\d+[.\s]*/, '').trim() || ch.title;
            const hasSections = ch.sections.length > 0;
            const preview = previewByChapter.get(ch.slug) ?? [];

            return (
              <div
                key={ch.slug}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-slate-50/50 p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-lg font-black text-teal-600">
                    {ch.slug}
                  </div>
                  <Link href={ch.href} className="pt-1.5">
                    <h2 className="text-xl font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                      {shortTitle}
                    </h2>
                  </Link>
                </div>

                {hasSections ? (
                  <ul className="flex-grow space-y-1 mb-5">
                    {ch.sections.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/manual/${s.slug}`}
                          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-600 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          <ChevronRight size={13} className="flex-shrink-0 text-teal-400" />
                          <span className="truncate">{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  preview.length > 0 && (
                    <ul className="flex-grow space-y-1.5 mb-5 pl-1">
                      {preview.slice(0, 4).map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-slate-500 font-light">
                          <span className="h-1 w-1 flex-shrink-0 rounded-full bg-teal-400" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                      {preview.length > 4 && (
                        <li className="text-xs text-slate-400 pl-3">외 {preview.length - 4}개 항목</li>
                      )}
                    </ul>
                  )
                )}

                <Link
                  href={ch.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-teal-600 hover:gap-2.5 transition-all"
                >
                  읽기 <ChevronRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
