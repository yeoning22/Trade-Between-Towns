import React, { useState } from 'react';
import { Banknote, Coins, Map, User } from 'lucide-react';
import bg from "./assets/temp_bg_test.png";


export default function MerchantGame() {
  const [screen, setScreen] = useState('start'); // start, newGame, continue, howToPlay
  const [playerName, setPlayerName] = useState('');
  const [selectedFamily, setSelectedFamily] = useState(null);

  const families = [
    { 
      id: 'iron', 
      name: '철혈 상단', 
      bonus: '무기/방어구 거래 +10%',
      startGold: 100,
      description: '대장장이 가문 출신. 금속 제품에 밝습니다.'
    },
    { 
      id: 'silk', 
      name: '비단길 상회', 
      bonus: '의류/보석 거래 +10%',
      startGold: 120,
      description: '귀족과의 연줄이 있는 상인 가문입니다.'
    },
    { 
      id: 'herb', 
      name: '초원 길드', 
      bonus: '약초/식료품 거래 +10%',
      startGold: 80,
      description: '자연과 가까운 약초상 가문입니다.'
    }
  ];

  const StartScreen = () => (
    <div
  className="min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bg})` }}
>
  {/* 어둡게 오버레이 */}
  <div className="absolute inset-0 bg-black/60" />

  {/* 기존 UI 래퍼 */}
  <div className="relative z-10 flex items-center justify-center p-4 min-h-screen">

      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <Banknote className="w-20 h-20 mx-auto text-amber-300 animate-pulse"/>
          <h1 className="text-5xl font-bold text-amber-100 tracking-wide">
            행상인의 길
          </h1>
          <p className="text-amber-300 text-lg italic">
            "부를 쌓고, 명성을 얻으라"
          </p>
        </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => setScreen('newGame')}
              className="w-full max-w-md mx-auto block bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
            >
              <User className="inline mr-2" />
              새로운 여정 시작
            </button>
            
            <button
              className="w-full max-w-md mx-auto block bg-amber-700 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-200 opacity-50 cursor-not-allowed"
              disabled
            >
              <Map className="inline mr-2" />
              여정 이어가기 (준비중)
            </button>

            <button
              onClick={() => setScreen('howToPlay')}
              className="w-full max-w-md mx-auto block bg-amber-800 hover:bg-amber-700 text-amber-200 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
            >
              게임 방법
            </button>
          </div>

          <div className="text-amber-400 text-sm pt-8">
            <p className="flex items-center justify-center gap-2">
              v0.1.0 Alpha | Made by yeoning 
              <img 
                src="https://i.ibb.co/Cs0ppFz1/Idle-Cat.gif" 
                alt="yeoning logo" 
                className="inline-block w-4 h-4"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const HowToPlayScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 p-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-amber-950 bg-opacity-80 rounded-lg shadow-2xl p-8 border-2 border-amber-700">
          <h2 className="text-3xl font-bold text-amber-100 mb-6 text-center">
            📜 게임 방법
          </h2>

          <div className="space-y-6 text-amber-200">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-2">🎯 게임 목표</h3>
              <p>판타지 세계의 행상인이 되어 마을을 돌아다니며 물건을 사고팔아 부를 축적하세요!</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-2">💰 거래 시스템</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>각 마을마다 <span className="text-yellow-400">특산품</span>이 있어 저렴하게 구매 가능</li>
                <li>각 마을 사람들이 <span className="text-green-400">선호하는 물건</span>을 팔면 추가 수익</li>
                <li>모든 물건은 어디서든 팔 수 있지만, 마을 특성을 이용하면 더 큰 이익!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-2">🗺️ 여행</h3>
              <p>마을 사이를 이동하며 각 지역의 특성을 파악하고, 가장 수익성 좋은 무역 루트를 찾아보세요.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-2">👨‍👩‍👧‍👦 가문</h3>
              <p>선택한 가문에 따라 특정 품목 거래에서 보너스를 받습니다. 자신의 플레이 스타일에 맞는 가문을 선택하세요!</p>
            </div>

            <div className="bg-amber-900 p-4 rounded-lg border border-amber-700 mt-6">
              <p className="text-center text-amber-300 italic">
                💡 팁: 싸게 사서 비싸게 파는 것이 상인의 기본!<br/>
                각 마을의 특성을 잘 파악하는 것이 성공의 열쇠입니다.
              </p>
            </div>
          </div>

          <button
            onClick={() => setScreen('start')}
            className="w-full mt-8 bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );

  const NewGameScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-950 bg-opacity-80 rounded-lg shadow-2xl p-8 border-2 border-amber-700">
          <h2 className="text-3xl font-bold text-amber-100 mb-6 text-center">
            새로운 상인의 탄생
          </h2>

          {/* 이름 입력 */}
          <div className="mb-8">
            <label className="block text-amber-300 font-bold mb-2">
              상인의 이름
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full px-4 py-3 bg-amber-900 text-amber-100 border-2 border-amber-700 rounded-lg focus:outline-none focus:border-amber-500"
              maxLength={20}
            />
          </div>

          {/* 가문 선택 */}
          <div className="mb-8">
            <label className="block text-amber-300 font-bold mb-4">
              출신 가문 선택
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {families.map((family) => (
                <div
                  key={family.id}
                  onClick={() => setSelectedFamily(family.id)}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition duration-200 ${
                    selectedFamily === family.id
                      ? 'bg-amber-700 border-amber-400 shadow-lg scale-105'
                      : 'bg-amber-900 border-amber-700 hover:border-amber-600'
                  }`}
                >
                  <h3 className="text-xl font-bold text-amber-100 mb-2">
                    {family.name}
                  </h3>
                  <p className="text-amber-300 text-sm mb-3">
                    {family.description}
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-green-400">✓ {family.bonus}</p>
                    <p className="text-yellow-400 flex items-center">
                      <Coins className="w-4 h-4 mr-1" />
                      시작 자금: {family.startGold} 골드
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-4">
            <button
              onClick={() => setScreen('start')}
              className="flex-1 bg-amber-800 hover:bg-amber-700 text-amber-200 font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              돌아가기
            </button>
            <button
              onClick={() => {
                if (playerName.trim() && selectedFamily) {
                  alert(`${playerName}님, ${families.find(f => f.id === selectedFamily).name}으로 여정을 시작합니다!\n\n(게임 화면은 다음 단계에서 만들어드릴게요)`);
                } else {
                  alert('이름과 가문을 선택해주세요!');
                }
              }}
              disabled={!playerName.trim() || !selectedFamily}
              className={`flex-1 font-bold py-3 px-6 rounded-lg transition duration-200 ${
                playerName.trim() && selectedFamily
                  ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              여정 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {screen === 'start' && <StartScreen />}
      {screen === 'newGame' && <NewGameScreen />}
      {screen === 'howToPlay' && <HowToPlayScreen />}
    </>
  );
}