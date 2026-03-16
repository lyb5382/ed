import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            {/* 배경 이미지: assets 폴더에 렌조 1번 짤 넣고 경로 맞추기 */}
            <div className="hero-bg" />
            <div className="hero-overlay" />

            {/* 메인 텍스트 컨테이너 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="hero-content"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="hero-subtitle"
                >
                    [ CLASSIFIED : ASSET EVALUATION IN PROGRESS ]
                </motion.p>

                <h1 className="hero-title">
                    증명해라,<br />
                    <span className="hero-title-sub">아니면 죽든가.</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="hero-description"
                >
                    EDEN ACADEMY
                </motion.p>
            </motion.div>

            {/* 스크롤 유도 화살표 애니메이션 */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="hero-scroll-indicator"
            >
                <span>SCROLL TO SURVIVE</span>
                <div className="hero-scroll-line" />
            </motion.div>
        </section>
    );
};

export default Hero;