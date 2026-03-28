'use client';

import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleLoginButton';

export default function SignupForm() {
  return (
    <div className="space-y-6">
      <GoogleLoginButton label="Google로 회원가입" />

      <p className="text-center text-xs text-slate-500">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="text-emerald-400 hover:underline">
          로그인
        </Link>
      </p>
    </div>
  );
}
