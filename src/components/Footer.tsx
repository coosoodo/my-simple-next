import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-black tracking-[0.08em] text-navy-700">
                SAGE<span className="text-teal-500"> LINE</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
              데이터로 시장을 읽고, 원칙으로 매매합니다. <br />
              개인 투자자를 위한 가장 현명한 자동매매 파트너, 세이지라인입니다.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Products</div>
            <Link href="/#owl-trader" className="text-slate-500 hover:text-teal-600 transition-colors">부엉이 트레이더 프로</Link>
            <Link href="/#owl-trader-lite" className="text-slate-500 hover:text-teal-600 transition-colors">부엉이 트레이더 라이트</Link>
            <Link href="/manual" className="text-slate-500 hover:text-teal-600 transition-colors">사용자 설명서</Link>
            <Link href="/boards/free" className="text-slate-500 hover:text-teal-600 transition-colors">커뮤니티</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Contact</div>
            <a href="mailto:sageline2024@gmail.com" className="text-slate-500 hover:text-teal-600 transition-colors">
              sageline2024@gmail.com
            </a>
            <div className="text-slate-500">010-8067-4532 (고객지원)</div>
            <a href="https://cafe.naver.com/sageline" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#03C75A]/40 bg-[#03C75A]/10 px-5 py-2 text-xs font-bold tracking-wide text-[#03C75A] hover:bg-[#03C75A]/25 transition-all">
              네이버 카페 바로가기
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-[10px] text-slate-400 font-medium tracking-widest">
          <span>COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-slate-900">이용약관</Link>
            <Link href="/privacy" className="hover:text-slate-900">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
