'use server';

import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;

  const errors: LoginState['errors'] = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ['유효한 이메일 주소를 입력해주세요.'];
  }

  if (!password) {
    errors.password = ['비밀번호를 입력해주세요.'];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    if (
      error.message.includes('Invalid login credentials') ||
      error.message.includes('invalid_credentials')
    ) {
      return { message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
    }
    if (error.message.includes('Email not confirmed')) {
      return { message: '이메일 인증이 필요합니다. 수신함을 확인해주세요.' };
    }
    return { message: `오류가 발생했습니다: ${error.message}` };
  }

  redirect('/');
}
