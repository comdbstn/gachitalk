import React from "react";

export default function JaPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-center">韓国人と出会ってみませんか？</h1>
      <p className="mb-8 text-gray-700 text-center">韓日マッチングサービスに参加して、素敵な出会いを体験してください。</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMY_JP_FORM/viewform" // 실제 구글폼 링크로 교체
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 px-8 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
      >
        マッチング申し込み
      </a>
      {/* 구글폼 임베드 (선택) */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMY_JP_FORM/viewform?embedded=true" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0}>読み込み中…</iframe> */}
      <section className="w-full max-w-xl mt-12">
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <div className="mb-4">
          <strong>Q. マッチングはどのように行われますか？</strong>
          <p className="text-gray-600">申込内容をもとに、最適な方と1対1でお繋ぎします。</p>
        </div>
        <div className="mb-4">
          <strong>Q. 費用はかかりますか？</strong>
          <p className="text-gray-600">現在は無料でご利用いただけます。</p>
        </div>
        <div className="mb-4">
          <strong>Q. どこで会いますか？</strong>
          <p className="text-gray-600">オンライン（Zoom等）またはご希望によりオフラインも可能です。</p>
        </div>
      </section>
      <div className="flex gap-4 mt-8">
        <a href="https://social-plugins.line.me/lineit/share?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">LINEでシェア</a>
        <a href="https://www.instagram.com/?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Instagramでシェア</a>
        <a href="https://sharer.kakao.com/talk/friends/picker/link?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Kakaoでシェア</a>
      </div>
    </div>
  );
} 