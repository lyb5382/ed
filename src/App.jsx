import React from 'react';
import Hero from './components/Hero';
import Lore from './components/Lore'; // 주석 풀었다! (웹툰 대신 들어간 생존 수칙)
import CharacterGrid from './components/CharacterGrid'; // 주석 풀었다! (140장 갤러리)

// 이건 다음 턴에 만들 거니까 아직 주석 처리 냅둠 ㅋㅋㅋ
import FooterCTA from './components/FooterCTA'; 

function App() {
  return (
    // 전체 배경 시꺼멓게 칠하고, 드래그할 때 피색(red-600)으로 잡히게 디테일 줬음. 
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">

      {/* 1. 메인 배너 (렌조 쌤 어그로 존) */}
      <Hero />

      {/* 2. 이든 아카데미 생존 수칙 (세계관 브리핑 존) */}
      <Lore />

      {/* 3. 미친 140장 일러스트 글리치 갤러리 (캐릭터 & 애제자 소개) */}
      <CharacterGrid />

      {/* 4. 대망의 '철컥' 입학 버튼 (아직 미완성이라 주석) */}
      <FooterCTA />

    </div>
  );
}

export default App;