'use client';

import { useActionState } from 'react';
import { changePasswordAction, ChangePasswordState } from './actions';
import Link from 'next/link';

const initialState: ChangePasswordState = {};

export default function ChangePasswordForm() {
  const [state, formAction, isPending] = useActionState(changePasswordAction, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
          <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-white mb-3">변경 완료!</h2>
        <p className="text-slate-400 mb-8">{state.message}</p>
        <Link
          href="/login"
          className="rounded-full bg-white px-8 py-3 text-sm font-black text-black hover:bg-emerald-400 transition-colors"
        >
          로그인하기
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* 서버 오류 메시지 */}
      {state.message && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {state.message}
        </div>
      )}

      {/* 이메일 */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          이메일 <span className="text-emerald-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="가입한 이메일 주소"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.email && (
          <p className="mt-2 text-xs text-red-400">{state.errors.email[0]}</p>
        )}
      </div>

      {/* 현재 비밀번호 */}
      <div>
        <label htmlFor="currentPassword" className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          현재 비밀번호 <span className="text-emerald-400">*</span>
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          autoComplete="current-password"
          placeholder="현재 비밀번호 입력"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.currentPassword && (
          <p className="mt-2 text-xs text-red-400">{state.errors.currentPassword[0]}</p>
        )}
      </div>

      {/* 구분선 */}
      <div className="border-t border-white/5" />

      {/* 새 비밀번호 */}
      <div>
        <label htmlFor="newPassword" className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          새 비밀번호 <span className="text-emerald-400">*</span>
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          autoComplete="new-password"
          placeholder="8자 이상 입력"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.newPassword && (
          <p className="mt-2 text-xs text-red-400">{state.errors.newPassword[0]}</p>
        )}
      </div>

      {/* 새 비밀번호 확인 */}
      <div>
        <label htmlFor="confirm" className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          새 비밀번호 확인 <span className="text-emerald-400">*</span>
        </label>
        <input
          id="confirm"
          name="confirm"
          type="password"
          autoComplete="new-password"
          placeholder="새 비밀번호 재입력"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.confirm && (
          <p className="mt-2 text-xs text-red-400">{state.errors.confirm[0]}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-white py-4 text-sm font-black text-black hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? '변경 중...' : '비밀번호 변경'}
      </button>

      <p className="text-center text-xs text-slate-500">
        <Link href="/login" className="text-emerald-400 hover:underline">
          로그인 페이지로 돌아가기
        </Link>
      </p>
    </form>
  );
}
