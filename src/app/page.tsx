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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        gachitalk<br />
        <span className="text-lg font-normal">일본인과 한국인을 연결하는 매칭 서비스</span>
      </h1>
      <div className="flex gap-6 mb-8">
        <button
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          onClick={() => router.push("/ko")}
        >
          🇰🇷 한국어로 시작하기
        </button>
        <button
          className="px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          onClick={() => router.push("/ja")}
        >
          🇯🇵 日本語で始める
        </button>
      </div>
      <p className="text-gray-500 text-sm text-center">
        언어는 자동 감지되며, 수동으로도 선택할 수 있습니다.
      </p>
    </div>
  );
}
