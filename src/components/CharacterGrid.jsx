import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // 닫기 버튼용 아이콘
import './CharacterGrid.css';

// 파트너가 짠 미친 디테일 추가! (스포는 빼고 프로필 폼나게)
const roster = {
    masters: [
        { id: "M1", name: "렌조 바레세", alias: "Master NOAH", spec: "영거리 사격 및 전술(CQC)", nation: "Italy", age: 38, height: "187cm", mbti: "ISTJ", desc: "무뚝뚝하고 자비 없는 A반 담임. 그의 수업에서 사정이란 없다. 항상 안전장치를 풀고 약실에 탄환이 장전된 상태를 유지한다." },
        { id: "M2", name: "콜트 라레도", alias: "DEADLOCK", spec: "원거리 저격", nation: "USA", age: 36, height: "194cm", mbti: "ENFJ", desc: "쾌활한 미소 뒤에 숨겨진 치밀함. 타겟을 절대 놓치지 않는 델타포스 출신의 사신. 목숨이 달린 만큼 수업에 대한 강박이 심하다." },
        { id: "M3", name: "웨이하이 리웨이", alias: "노사(老師)", spec: "살상 무예 및 신체 제어", nation: "China", age: 34, height: "182cm", mbti: "INFJ", desc: "부드러운 카리스마로 이든을 관망하는 무투의 정점. 눈에 보이지 않는 속도로 혈자리와 급소를 노려 제압한다." },
        { id: "M4", name: "브레누 나탈", alias: "JACKAL", spec: "비정규 생존술 및 탈출", nation: "Brazil", age: 29, height: "175cm", mbti: "ESTP", desc: "허세와 블러핑의 달인. 약해 보이지만 생존에 있어서만큼은 바퀴벌레급의 끈질긴 생명력을 자랑한다." },
        { id: "M5", name: "펠릭스 엑서터", alias: "Dr. F", spec: "전투 의학 및 해부학", nation: "UK", age: 32, height: "179cm", mbti: "INTJ", desc: "지하 의무실의 서늘한 의사. 차라리 총을 한 대 더 맞는 게 낫다는 소문이 돌 정도로 고통스러운 실습을 진행한다." },
        { id: "M6", name: "카미유 아미앵", alias: "PHANTOM", spec: "첩보 기만 및 심리 전술", nation: "France", age: 27, height: "172cm", mbti: "ISTP", desc: "성별조차 모호한 유령 같은 존재. 완벽한 연기와 가스라이팅으로 타겟의 이성을 붕괴시킨다." }
    ],
    disciples: [
        { id: "S1", name: "강태오", master: "Master NOAH's Disciple", spec: "사격", nation: "Korea", age: 21, height: "174cm", mbti: "INFP", desc: "평소엔 늘 주눅 들어 있지만, 방아쇠를 당기는 순간 전투력이 급상승하는 2학년 핏덩이." },
        { id: "S2", name: "잭슨 하퍼", master: "DEADLOCK's Disciple", spec: "근접전 (복싱)", nation: "Canada", age: 24, height: "188cm", mbti: "ESTP", desc: "힘과 주먹이 법이라 믿는 오만한 3학년. 앞길을 막으면 일단 패고 본다." },
        { id: "S3", name: "아룬 사라신", master: "노사(老師)'s Disciple", spec: "무술 (무에타이)", nation: "Thailand", age: 26, height: "178cm", mbti: "ISTP", desc: "감정이 거세된 듯한 4학년 인간 병기. 스승의 명령이 곧 세계의 유일한 법이다." },
        { id: "S4", name: "세묜 볼로딘", master: "JACKAL's Disciple", spec: "근·중거리 전투", nation: "Russia", age: 22, height: "191cm", mbti: "ESFP", desc: "단순 무식하지만 의리와 충성도는 맥스인 러시아 짭맘 2학년. 전투 시의 집중력은 압도적이다." },
        { id: "S5", name: "엘리아스 리히터", master: "Dr. F's Disciple", spec: "해킹 및 정보 수집", nation: "Germany", age: 26, height: "176cm", mbti: "INTP", desc: "삶의 의욕이라곤 없는 다크서클 5학년. 키보드 하나로 이든의 뒷공작을 지배하는 귀찮은 천재." },
        { id: "S6", name: "시노자키 린", master: "PHANTOM's Disciple", spec: "정보 수집", nation: "Japan", age: 25, height: "163cm", mbti: "ENFJ", desc: "학생회장이자 모두에게 상냥한 4학년. 하지만 생글생글한 미소 뒤엔 서늘한 본성이 숨어있다." }
    ]
};

const CharacterGrid = () => {
    const [activeTab, setActiveTab] = useState('masters');
    const [selectedChar, setSelectedChar] = useState(null); // 모달에 띄울 캐릭터 상태

    return (
        <section className="roster-container">
            <div className="roster-inner">
                <div className="roster-header">
                    <h2 className="roster-title">CLASSIFIED PERSONNEL</h2>
                    <p className="roster-subtitle">이든 아카데미 주요 자산 명부</p>
                </div>

                <div className="roster-tabs">
                    <button className={`tab-btn ${activeTab === 'masters' ? 'active' : ''}`} onClick={() => setActiveTab('masters')}>MASTERS</button>
                    <button className={`tab-btn ${activeTab === 'disciples' ? 'active' : ''}`} onClick={() => setActiveTab('disciples')}>DISCIPLES</button>
                </div>

                <motion.div layout className="roster-grid">
                    <AnimatePresence mode="popLayout">
                        {roster[activeTab].map((char) => (
                            <motion.div
                                key={char.id}
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                                className="roster-card group"
                                onClick={() => setSelectedChar(char)} // 카드 클릭 시 모달 열림!
                            >
                                <div className="roster-img-wrapper">
                                    <img src={`/assets/${char.id}_base.webp`} alt={char.name} className="roster-img base-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/111/333?text=NO+IMAGE' }} />
                                    <img src={`/assets/${char.id}_combat.webp`} alt={`${char.name} combat`} className="roster-img combat-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/300/600?text=CLASSIFIED' }} />
                                    <div className="roster-overlay">
                                        <span className="roster-spec">{char.spec}</span>
                                    </div>
                                </div>
                                <div className="roster-info">
                                    <p className="roster-alias">{char.alias}</p>
                                    <h3 className="roster-name">{char.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* 대망의 기밀문서 모달 (Modal) */}
            <AnimatePresence>
                {selectedChar && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={() => setSelectedChar(null)} // 배경 클릭 시 닫힘
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히는 거 방지
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedChar(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-layout">
                                {/* 왼쪽 짤 영역 */}
                                <div className="modal-image-part">
                                    <img src={`/src/assets/${selectedChar.id}_combat.webp`} alt={selectedChar.name} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/300/600?text=CLASSIFIED' }} />
                                </div>

                                {/* 오른쪽 기밀 프로필 영역 */}
                                <div className="modal-info-part">
                                    <span className="modal-label">CLASSIFIED DOSSIER</span>
                                    <h2 className="modal-name">{selectedChar.name}</h2>
                                    <h3 className="modal-alias">"{selectedChar.alias}"</h3>

                                    <div className="modal-stats">
                                        <div className="stat-box"><span>NATION</span><p>{selectedChar.nation}</p></div>
                                        <div className="stat-box"><span>AGE</span><p>{selectedChar.age}</p></div>
                                        <div className="stat-box"><span>HEIGHT</span><p>{selectedChar.height}</p></div>
                                        <div className="stat-box"><span>TYPE</span><p>{selectedChar.mbti}</p></div>
                                    </div>

                                    <div className="modal-divider" />

                                    <div className="modal-desc-box">
                                        <span>EVALUATION REPORT</span>
                                        <p>{selectedChar.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CharacterGrid;