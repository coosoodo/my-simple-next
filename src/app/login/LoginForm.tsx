'use client';

import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleLoginButton';

export default function LoginForm() {
  return (
    <div className="space-y-6">
      <GoogleLoginButton label="Google로 로그인" />

      <p className="text-center text-xs text-slate-500">
        계정이 없으신가요?{' '}
        <Link href="/signup" className="text-emerald-400 hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  );
}
