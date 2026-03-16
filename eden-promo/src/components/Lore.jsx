import React from 'react';
import { motion } from 'framer-motion';
import './Lore.css';

const loreRules = [
    {
        id: "RULE 01",
        title: "가치 증명, 혹은 폐기",
        desc: "이든에 평범한 졸업은 없다. 최종 암살 임무를 완수하거나, 누군가를 밟고 올라서라. 3회 유급 시 당신은 '폐기물 처리장'으로 향하게 될 것이다."
    },
    {
        id: "RULE 02",
        title: "최상위 자산 보호법",
        desc: "학생은 학교의 가장 비싼 자산이다. 교내 결투는 상시 허용되나, 동급생의 생명을 앗아가는 행위는 최상위 금기다. 숨만 붙어있다면 골절 따위는 일상일 뿐."
    },
    {
        id: "RULE 03",
        title: "애제자 찬탈전",
        desc: "6인의 마스터 곁엔 단 한 명의 '애제자'만이 허락된다. 기존의 고인물 선배들을 짓밟고 그 자리를 찬탈해 100% 졸업 보장권을 쟁취하라."
    }
];

const Lore = () => {
    return (
        <section className="lore-container">
            <div className="lore-inner">

                {/* 섹션 타이틀 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="lore-header"
                >
                    <h2 className="lore-maintitle">SYSTEM OVERVIEW</h2>
                    <p className="lore-subtitle">이든 아카데미 생존 수칙</p>
                </motion.div>

                {/* 세계관 설명 카드 리스트 */}
                <div className="lore-grid">
                    {loreRules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="lore-card"
                        >
                            <span className="lore-card-id">{rule.id}</span>
                            <h3 className="lore-card-title">{rule.title}</h3>
                            <p className="lore-card-desc">{rule.desc}</p>
                            <div className="lore-card-line" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Lore;