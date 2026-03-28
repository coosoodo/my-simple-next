import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | SAGE LINE',
  description: 'SAGE LINE 개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050a14] text-slate-300">
      <header className="border-b border-white/5 bg-[#050a14]/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-8">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
            ← 홈으로
          </Link>
          <span className="text-xs text-slate-500 tracking-widest font-medium">SAGE LINE</span>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">개인정보처리방침</h1>
        <p className="text-sm text-slate-500 mb-12">시행일: 2026년 1월 1일 &nbsp;|&nbsp; 최종 수정일: 2026년 3월 28일</p>

        <div className="space-y-10 text-sm leading-relaxed text-slate-400">

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제1조 (개인정보의 처리 목적)</h2>
            <p>세이지라인(이하 &quot;회사&quot;)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-slate-400">
              <li>회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지</li>
              <li>서비스 제공: 부엉이 ATS 자동매매 서비스, AI 전략 컨설팅 서비스 제공, 맞춤서비스 제공, 본인인증</li>
              <li>고충 처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제2조 (처리하는 개인정보 항목)</h2>
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <div className="mt-3 space-y-2">
              <p><span className="text-slate-300 font-medium">필수항목:</span> 이메일 주소, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</p>
              <p><span className="text-slate-300 font-medium">소셜 로그인(Google):</span> 이메일 주소, 프로필 이름 (Google이 제공하는 범위 내)</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제3조 (개인정보의 처리 및 보유기간)</h2>
            <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>회원 가입 및 관리: 회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지)</li>
              <li>전자상거래 기록: 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
              <li>접속 로그: 3개월 (통신비밀보호법)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제4조 (개인정보의 제3자 제공)</h2>
            <p>회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            <p className="mt-2">현재 회사는 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제5조 (개인정보 처리 위탁)</h2>
            <p>회사는 서비스 운영을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-6 text-slate-300 font-medium">수탁업체</th>
                    <th className="text-left py-2 pr-6 text-slate-300 font-medium">위탁 업무 내용</th>
                    <th className="text-left py-2 text-slate-300 font-medium">보유 및 이용기간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-2 pr-6">Supabase Inc.</td>
                    <td className="py-2 pr-6">회원 인증 및 데이터베이스 운영</td>
                    <td className="py-2">회원 탈퇴 시까지</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6">Vercel Inc.</td>
                    <td className="py-2 pr-6">서비스 인프라(서버) 운영</td>
                    <td className="py-2">서비스 이용기간</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6">Google LLC</td>
                    <td className="py-2 pr-6">소셜 로그인(OAuth 2.0) 인증</td>
                    <td className="py-2">로그인 세션 종료 시까지</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제6조 (개인정보의 파기)</h2>
            <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li><span className="text-slate-300">전자적 파일 형태:</span> 기록을 재생할 수 없는 기술적 방법으로 영구 삭제</li>
              <li><span className="text-slate-300">종이 문서:</span> 분쇄기로 분쇄하거나 소각</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제7조 (정보주체의 권리·의무 및 행사방법)</h2>
            <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="mt-3">위 권리 행사는 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제8조 (개인정보의 안전성 확보조치)</h2>
            <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>개인정보 취급 직원의 최소화 및 교육 실시</li>
              <li>개인정보에 대한 접근 제한 (HTTPS/TLS 암호화 통신)</li>
              <li>개인정보를 처리하는 데이터베이스 시스템에 대한 접근권한 최소화</li>
              <li>비밀번호 암호화: 이용자의 비밀번호는 암호화되어 저장·관리되고 있어 본인만 알 수 있으며, 개인정보 확인 및 변경도 본인만 가능</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제9조 (개인정보 보호책임자)</h2>
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 정보주체의 개인정보 관련 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 space-y-1">
              <p><span className="text-slate-300 font-medium">성명:</span> 최재혁</p>
              <p><span className="text-slate-300 font-medium">직책:</span> 개인정보 보호책임자</p>
              <p><span className="text-slate-300 font-medium">연락처:</span> <a href="mailto:sageline2024@gmail.com" className="text-emerald-400 hover:underline">sageline2024@gmail.com</a></p>
              <p><span className="text-slate-300 font-medium">전화:</span> 010-8067-4532</p>
            </div>
            <p className="mt-3">정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제10조 (개인정보 처리방침 변경)</h2>
            <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제11조 (권익침해 구제방법)</h2>
            <p>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>개인정보 침해신고센터: (국번없이) 118 &nbsp;|&nbsp; <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">privacy.kisa.or.kr</a></li>
              <li>개인정보 분쟁조정위원회: (국번없이) 1833-6972 &nbsp;|&nbsp; <a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">www.kopico.go.kr</a></li>
              <li>대검찰청 사이버수사과: (국번없이) 1301 &nbsp;|&nbsp; <a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">www.spo.go.kr</a></li>
              <li>경찰청 사이버수사국: (국번없이) 182 &nbsp;|&nbsp; <a href="https://ecrm.cyber.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">ecrm.cyber.go.kr</a></li>
            </ul>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-[10px] text-slate-600 tracking-widest font-medium">
        COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
