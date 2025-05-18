"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 브라우저 언어 자동 감지 (최초 방문 시)
    const lang = navigator.language || navigator.languages[0];
    if (lang.startsWith("ko")) {
      // router.push("/ko"); // 자동 이동 원할 시 주석 해제
    } else if (lang.startsWith("ja")) {
      // router.push("/ja"); // 자동 이동 원할 시 주석 해제
    }
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-bg-dark via-bg to-black text-white flex flex-col items-center">
      {/* 네비게이션 */}
      <nav className="w-full flex justify-between items-center px-8 py-6">
        <div className="text-lg font-bold tracking-widest">GACHITALK</div>
        <div className="flex gap-6 items-center">
          <button className="px-5 py-2 rounded-full bg-primary hover:bg-primary-dark transition font-semibold text-white shadow-glow" onClick={() => router.push('/ko')}>한국어</button>
          <button className="px-5 py-2 rounded-full bg-primary hover:bg-primary-dark transition font-semibold text-white shadow-glow" onClick={() => router.push('/ja')}>日本語</button>
        </div>
      </nav>
      {/* 메인 헤드라인 */}
      <section className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <div className="mt-16 mb-10 text-center">
          <span className="inline-block mb-2 text-primary-light font-semibold tracking-widest">Gachi Matching</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-[0_2px_24px_#a259ff] text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark animate-pulse">일본인과 한국인을 연결하는<br />가치있는 만남</h1>
          <p className="text-lg text-gray-300 mb-8">온라인에서 새로운 인연을 시작하세요.<br />간단한 신청만으로 매칭이 시작됩니다.</p>
          <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark transition font-bold text-lg shadow-glow" onClick={() => router.push('/ko')}>매칭 신청하기</button>
        </div>
        {/* 카드형 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">300+</div>
            <div className="text-gray-200">누적 매칭 시도</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-200">무료 서비스</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">24시간</div>
            <div className="text-gray-200">빠른 매칭 안내</div>
          </div>
        </div>
      </section>
      {/* CTA 섹션 */}
      <section className="w-full flex flex-col items-center mt-24 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-light">지금 바로 시작하세요</h2>
        <p className="text-gray-300 mb-6">가치있는 만남, 지금 경험해보세요!</p>
        <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark transition font-bold text-lg shadow-glow" onClick={() => router.push('/ko')}>매칭 신청하기</button>
      </section>
      {/* 푸터 */}
      <footer className="w-full py-8 px-4 flex flex-col md:flex-row justify-between items-center bg-bg-dark/80 border-t border-primary/20 text-gray-400 text-sm">
        <div>© 2024 GACHITALK</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/ko" className="hover:text-primary">한국어</a>
          <a href="/ja" className="hover:text-primary">日本語</a>
        </div>
      </footer>
    </div>
  );
}
