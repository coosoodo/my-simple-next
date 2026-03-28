'use client';

import { createSupabaseBrowserClient } from '@/lib/supabase-browser';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-400 hover:bg-red-500/20 transition-all duration-300"
    >
      로그아웃
    </button>
  );
}
