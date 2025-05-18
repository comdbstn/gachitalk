"use client";

import React from "react";

export default function LanguageSwitcher() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        className="border rounded px-3 py-1 bg-white text-gray-800 shadow"
        onChange={e => {
          if (e.target.value) window.location.href = e.target.value;
        }}
        defaultValue=""
      >
        <option value="" disabled>언어 선택 / 言語選択</option>
        <option value="/ko">🇰🇷 한국어</option>
        <option value="/ja">🇯🇵 日本語</option>
      </select>
    </div>
  );
} 