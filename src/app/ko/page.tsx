import React from "react";

export default function KoPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-center">일본인과의 특별한 인연, 여기서 시작하세요.</h1>
      <p className="mb-8 text-gray-700 text-center">한일 매칭 서비스에 참여해 보세요. 간단한 신청서만 작성하면 매칭이 시작됩니다.</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMY_KR_FORM/viewform" // 실제 구글폼 링크로 교체
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        매칭 신청하기
      </a>
      {/* 구글폼 임베드 (선택) */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMY_KR_FORM/viewform?embedded=true" width="100%" height="600" frameBorder="0" marginHeight={0} marginWidth={0}>로드 중…</iframe> */}
      <section className="w-full max-w-xl mt-12">
        <h2 className="text-xl font-bold mb-4">자주 묻는 질문</h2>
        <div className="mb-4">
          <strong>Q. 매칭은 어떻게 되나요?</strong>
          <p className="text-gray-600">신청서를 바탕으로 적합한 분과 1:1로 연결해드립니다.</p>
        </div>
        <div className="mb-4">
          <strong>Q. 비용이 있나요?</strong>
          <p className="text-gray-600">현재는 무료로 제공됩니다.</p>
        </div>
        <div className="mb-4">
          <strong>Q. 어디에서 만나나요?</strong>
          <p className="text-gray-600">온라인(Zoom 등) 또는 희망 시 오프라인도 가능합니다.</p>
        </div>
      </section>
      <div className="flex gap-4 mt-8">
        <a href="https://social-plugins.line.me/lineit/share?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">LINE 공유</a>
        <a href="https://www.instagram.com/?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Instagram 공유</a>
        <a href="https://sharer.kakao.com/talk/friends/picker/link?url=https://jkmatch.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Kakao 공유</a>
      </div>
    </div>
  );
} 