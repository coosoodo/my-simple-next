'use server';

import { supabase } from '@/lib/supabase';

export type SignupState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirm?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function signupAction(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;
  const confirm = formData.get('confirm') as string;

  const errors: SignupState['errors'] = {};

  if (!name || name.length < 2) {
    errors.name = ['이름은 2자 이상 입력해주세요.'];
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ['유효한 이메일 주소를 입력해주세요.'];
  }

  if (!password || password.length < 8) {
    errors.password = ['비밀번호는 8자 이상이어야 합니다.'];
  }

  if (password !== confirm) {
    errors.confirm = ['비밀번호가 일치하지 않습니다.'];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) {
    if (error.message.includes('already registered') || error.message.includes('already been registered')) {
      return { errors: { email: ['이미 사용 중인 이메일입니다.'] } };
    }
    return { message: `오류가 발생했습니다: ${error.message}` };
  }

  return {
    success: true,
    message: '회원가입이 완료되었습니다! 환영합니다.',
  };
}
