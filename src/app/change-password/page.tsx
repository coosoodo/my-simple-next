import type { Metadata } from 'next';
import ChangePasswordForm from './ChangePasswordForm';

export const metadata: Metadata = {
  title: '비밀번호 변경 | SAGE LINE',
  description: 'SAGE LINE 비밀번호 변경 페이지입니다.',
};

export default function ChangePasswordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300">
      {/* 배경 효과 */}
      <div className="fixed top-0 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[140px] pointer-events-none" />

      {/* 네비게이션 */}
      <header className="border-b border-white/5 bg-[#050a14]/90 backdrop-blur-xl">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <a href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#050a14]">
                <div className="h-4 w-4 rounded-full bg-emerald-400" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">SAGE LINE</span>
          </a>
        </nav>
      </header>

      {/* 본문 */}
      <main className="flex flex-grow items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* 헤더 */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Security</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">비밀번호 변경</h1>
            <p className="mt-3 text-sm text-slate-500">현재 비밀번호를 확인한 후 새 비밀번호로 변경합니다.</p>
          </div>

          {/* 폼 카드 */}
          <div className="rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-sm">
            <ChangePasswordForm />
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-8 text-center text-[10px] text-slate-600 font-medium tracking-widest border-t border-white/5">
        COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
