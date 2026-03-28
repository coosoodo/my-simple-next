import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '서비스 이용약관 | SAGE LINE',
  description: 'SAGE LINE 서비스 이용약관',
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-white mb-2">서비스 이용약관</h1>
        <p className="text-sm text-slate-500 mb-12">시행일: 2026년 1월 1일 &nbsp;|&nbsp; 최종 수정일: 2026년 3월 28일</p>

        <div className="space-y-10 text-sm leading-relaxed text-slate-400">

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제1조 (목적)</h2>
            <p>이 약관은 세이지라인(이하 &quot;회사&quot;)이 제공하는 부엉이 ATS 자동매매 서비스 및 AI 전략 컨설팅 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제2조 (정의)</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><span className="text-slate-300">&quot;서비스&quot;</span>란 회사가 제공하는 부엉이 ATS 자동매매 플랫폼, AI 전략 컨설팅, 웹사이트 및 관련 제반 서비스를 의미합니다.</li>
              <li><span className="text-slate-300">&quot;이용자&quot;</span>란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              <li><span className="text-slate-300">&quot;회원&quot;</span>이란 회사에 개인정보를 제공하여 회원 등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              <li><span className="text-slate-300">&quot;아이디(ID)&quot;</span>란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제3조 (약관의 게시와 개정)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
              <li>회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
              <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리한 약관의 개정의 경우에는 30일 이전부터 공지하며, 이메일 등을 통해 별도로 고지합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사는 다음과 같은 서비스를 제공합니다.
                <ul className="mt-2 ml-5 space-y-1 list-disc list-inside">
                  <li>부엉이 ATS: 국내 주식 자동매매 서비스 (실시간 시세 분석, AI 전략 추천, 자동 주문 실행)</li>
                  <li>AI 전략 컨설팅: Google Gemini AI 기반 투자 전략 분석 및 맞춤 컨설팅</li>
                  <li>기타 회사가 추가 개발하거나 제휴를 통해 이용자에게 제공하는 일체의 서비스</li>
                </ul>
              </li>
              <li>회사는 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용, 제공일자 등을 사전에 공지합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제5조 (서비스 이용의 중단)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사는 컴퓨터 등 정보통신설비의 보수 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
              <li>제1항에 의한 서비스 중단의 경우에는 회사는 사전에 공지하며, 사전에 공지할 수 없는 부득이한 사유가 있는 경우에는 사후에 공지할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제6조 (회원가입)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</li>
              <li>회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                <ul className="mt-2 ml-5 space-y-1 list-disc list-inside">
                  <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제7조 (회원 탈퇴 및 자격 상실)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</li>
              <li>회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                <ul className="mt-2 ml-5 space-y-1 list-disc list-inside">
                  <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                  <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                  <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제8조 (이용자의 의무)</h2>
            <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>신청 또는 변경 시 허위내용의 등록</li>
              <li>회사에 게시된 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>회사 또는 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
              <li>서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 유통하거나 상업적으로 이용하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제9조 (투자 위험 고지)</h2>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-amber-400 font-medium mb-2">⚠ 중요 투자 위험 고지</p>
              <ul className="space-y-2 text-slate-400">
                <li>본 서비스는 투자 참고 자료를 제공하는 것이며, 투자 원금의 손실이 발생할 수 있습니다.</li>
                <li>회사가 제공하는 AI 분석, 자동매매 전략, 컨설팅 내용은 투자 권유가 아니며, 투자 결과에 대한 책임은 전적으로 이용자 본인에게 있습니다.</li>
                <li>과거의 수익률이 미래의 수익률을 보장하지 않습니다.</li>
                <li>서비스 이용 전 충분한 학습과 리스크 관리가 반드시 필요합니다.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제10조 (저작권의 귀속 및 이용제한)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
              <li>이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제11조 (분쟁해결)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
              <li>회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 한국 법령에 따르며, 관할 법원은 서울중앙지방법원으로 합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">제12조 (면책조항)</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 손실이 발생하더라도 이에 대해 책임을 지지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-200 mb-4">부칙</h2>
            <p>이 약관은 2026년 1월 1일부터 시행합니다.</p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 space-y-1">
              <p><span className="text-slate-300 font-medium">회사명:</span> 세이지라인</p>
              <p><span className="text-slate-300 font-medium">담당자:</span> 최재혁</p>
              <p><span className="text-slate-300 font-medium">이메일:</span> <a href="mailto:sageline2024@gmail.com" className="text-emerald-400 hover:underline">sageline2024@gmail.com</a></p>
              <p><span className="text-slate-300 font-medium">전화:</span> 010-8067-4532</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-[10px] text-slate-600 tracking-widest font-medium">
        COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
