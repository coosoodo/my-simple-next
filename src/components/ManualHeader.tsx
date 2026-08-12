import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag } from 'lucide-react';

import logoMark from '@/images/SageLine_Mark.png';

export default function ManualHeader({
  version,
  lastUpdated,
  basePath = '/manual',
  subtitle = 'User Manual',
}: {
  /** 특정 설명서에 속하지 않는 화면(제품 선택 페이지)에서는 넘기지 않는다. */
  version?: string;
  lastUpdated?: string;
  basePath?: string;
  subtitle?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="group flex items-center space-x-3 cursor-pointer">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image src={logoMark} alt="SAGE LINE 로고" fill sizes="40px" className="object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[18px] font-black tracking-[0.08em] text-navy-700 group-hover:text-navy-500 transition-colors duration-300">
              SAGE<span className="text-teal-500"> LINE</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">{subtitle}</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          {version && (
            <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <span className="flex items-center gap-1.5"><Tag size={12} className="text-teal-600" /> v{version}</span>
              {lastUpdated && (
                <>
                  <span className="h-3 w-px bg-slate-200"></span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-navy-600" /> {lastUpdated}</span>
                </>
              )}
            </div>
          )}
          <Link href={basePath} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-teal-600 transition-colors">
            설명서 홈
          </Link>
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 hover:text-teal-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}
