import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound'; // 철컥 사운드 필수 ㅋㅋㅋ
import './FooterCTA.css'; // CSS 연결 완벽함!
import reloadSound from '../assets/reload.mp3';

const FooterCTA = () => {
    const [play] = useSound(reloadSound, { volume: 0.3 });

    return (
        // 여기에 테일윈드 대신 footer-container 적용!
        <section className="footer-container">

            {/* 타이틀 클래스 적용 */}
            <h2 className="footer-title">
                준비는 끝났다.
            </h2>

            {/* 버튼 클래스 적용 */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={play} // 마우스 올리면 철컥!
                className="footer-btn"
                onClick={() => window.open("https://share.crack.wrtn.ai/y35bon", "_blank")}
            >
                {/* 텍스트용 클래스 */}
                <span className="footer-btn-text">
                    [ 이든 아카데미 진입 ]
                </span>

                {/* 붉은색 배경 차오르는 효과용 클래스 */}
                <div className="footer-btn-bg" />
            </motion.button>

            {/* 경고 문구 클래스 적용 */}
            <p className="footer-warning">
                // WARNING: ENTER AT YOUR OWN RISK
            </p>

        </section>
    );
};

export default FooterCTA;