'use client';

import { useActionState } from 'react';
import { loginAction, LoginState } from './actions';
import Link from 'next/link';

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

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
          placeholder="example@email.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.email && (
          <p className="mt-2 text-xs text-red-400">{state.errors.email[0]}</p>
        )}
      </div>

      {/* 비밀번호 */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            비밀번호 <span className="text-emerald-400">*</span>
          </label>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호 입력"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        {state.errors?.password && (
          <p className="mt-2 text-xs text-red-400">{state.errors.password[0]}</p>
        )}
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-white py-4 text-sm font-black text-black hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? '로그인 중...' : '로그인'}
      </button>

      <p className="text-center text-xs text-slate-500">
        계정이 없으신가요?{' '}
        <Link href="/signup" className="text-emerald-400 hover:underline">
          회원가입
        </Link>
      </p>
      <p className="text-center text-xs text-slate-500">
        <Link href="/change-password" className="text-slate-400 hover:text-emerald-400 hover:underline transition-colors">
          비밀번호 변경
        </Link>
      </p>
    </form>
  );
}
