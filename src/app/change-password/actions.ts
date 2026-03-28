'use server';

import { supabase } from '@/lib/supabase';

export type ChangePasswordState = {
  errors?: {
    email?: string[];
    currentPassword?: string[];
    newPassword?: string[];
    confirm?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function changePasswordAction(
  prevState: ChangePasswordState,
  formData: FormData
): Promise<ChangePasswordState> {
  const email = (formData.get('email') as string)?.trim();
  const currentPassword = formData.get('currentPassword') as string;
  const newPassword = formData.get('newPassword') as string;
  const confirm = formData.get('confirm') as string;

  const errors: ChangePasswordState['errors'] = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ['유효한 이메일 주소를 입력해주세요.'];
  }

  if (!currentPassword) {
    errors.currentPassword = ['현재 비밀번호를 입력해주세요.'];
  }

  if (!newPassword || newPassword.length < 8) {
    errors.newPassword = ['새 비밀번호는 8자 이상이어야 합니다.'];
  }

  if (newPassword && confirm && newPassword !== confirm) {
    errors.confirm = ['새 비밀번호가 일치하지 않습니다.'];
  }

  if (currentPassword && newPassword && currentPassword === newPassword) {
    errors.newPassword = ['새 비밀번호는 현재 비밀번호와 달라야 합니다.'];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // 현재 비밀번호로 본인 인증
  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password: currentPassword,
  });

  if (signInError || !data.session) {
    return { errors: { currentPassword: ['현재 비밀번호가 올바르지 않습니다.'] } };
  }

  // 새 비밀번호로 업데이트
  const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

  if (updateError) {
    return { message: `비밀번호 변경 실패: ${updateError.message}` };
  }

  return { success: true, message: '비밀번호가 성공적으로 변경되었습니다.' };
}
