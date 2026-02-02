import React from 'react'

function HistorySection() {
    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">📜</span>
                <h2>ประวัติแม่เหล็กไฟฟ้า (History of Electromagnetism)</h2>
            </div>

            <p>
                แม่เหล็กไฟฟ้าเป็นสาขาหนึ่งของฟิสิกส์ที่ศึกษาความสัมพันธ์ระหว่าง
                <span className="highlight">ไฟฟ้า</span> (Electricity) และ
                <span className="highlight">แม่เหล็ก</span> (Magnetism)
                ซึ่งเป็นปรากฏการณ์ที่เชื่อมโยงกันอย่างลึกซึ้ง
            </p>

            <h3 style={{ marginTop: '2rem' }}>กฎของเออร์สเตด (Oersted's Law)</h3>

            <div className="symbol-card" style={{ marginTop: '1rem', background: 'var(--bg-secondary)' }}>
                <p>
                    <strong>กฎของเออร์สเตด</strong> ค้นพบโดย Hans Christian Ørsted ในปี 1820 กล่าวว่า:
                </p>
                <div style={{
                    padding: '1.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-md)',
                    marginTop: '1rem',
                    borderLeft: '4px solid var(--accent-primary)'
                }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        "เมื่อกระแสไฟฟ้าไหลผ่านตัวนำ จะเกิด<span className="highlight">สนามแม่เหล็ก</span>รอบๆ ตัวนำนั้น
                        โดยสนามแม่เหล็กจะมีทิศทางเป็น<span className="highlight">วงกลมรอบสายไฟ</span>
                        และขนาดของสนามแม่เหล็กจะ<span className="highlight">แปรผันตรงกับกระแสไฟฟ้า</span>"
                    </p>
                </div>

                <div className="symbol-grid" style={{ marginTop: '1.5rem' }}>
                    <div className="symbol-card">
                        <div className="symbol-name">📏 ขนาดของสนาม</div>
                        <div className="symbol-description">
                            B ∝ I (สนามแม่เหล็กแปรผันตรงกับกระแสไฟฟ้า)<br />
                            B ∝ 1/r (สนามแม่เหล็กแปรผันผกผันกับระยะห่าง)
                        </div>
                    </div>

                    <div className="symbol-card">
                        <div className="symbol-name">🧭 ทิศทางของสนาม</div>
                        <div className="symbol-description">
                            สนามแม่เหล็กมีทิศทางเป็นวงกลมรอบสายไฟ<br />
                            ใช้<span className="highlight">กฎมือขวา</span>ในการหาทิศทาง
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                    <strong>💡 ความสำคัญ:</strong>
                    <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                        การค้นพบนี้เป็นจุดเริ่มต้นของแม่เหล็กไฟฟ้า และพิสูจน์ว่าไฟฟ้าและแม่เหล็ก
                        ไม่ใช่ปรากฏการณ์ที่แยกจากกัน แต่เป็นส่วนหนึ่งของปรากฏการณ์เดียวกัน
                    </p>
                </div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>กฎมือขวา (Right-Hand Rule)</h3>

            <div className="problem-card" style={{ background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-secondary)' }}>
                <h4>🖐️ กฎมือขวาสำหรับสายไฟตรง</h4>

                <div style={{ marginTop: '1rem' }}>
                    <p><strong>วิธีใช้:</strong></p>
                    <ol style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.8' }}>
                        <li>
                            <strong>ชี้นิ้วหัวแม่มือ</strong>ไปในทิศทางของ<span className="highlight">กระแสไฟฟ้า</span> (I)
                        </li>
                        <li>
                            <strong>งอนิ้วที่เหลือ</strong>รอบสายไฟ
                        </li>
                        <li>
                            ทิศทางที่<strong>นิ้วงอ</strong>คือทิศทางของ<span className="highlight">สนามแม่เหล็ก</span> (B)
                        </li>
                    </ol>
                </div>

                <div style={{
                    marginTop: '1.5rem',
                    padding: '1.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👍</div>
                    <p style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        นิ้วหัวแม่มือ → ทิศทางกระแสไฟฟ้า (I)
                    </p>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 0 }}>
                        นิ้วงอ → ทิศทางสนามแม่เหล็ก (B)
                    </p>
                </div>
            </div>

            <div className="problem-card" style={{ marginTop: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-tertiary)' }}>
                <h4>🖐️ กฎมือขวาสำหรับแรงแม่เหล็ก (Lorentz Force)</h4>

                <div style={{ marginTop: '1rem' }}>
                    <p><strong>สำหรับอนุภาคมีประจุในสนามแม่เหล็ก:</strong></p>
                    <div className="formula-box" style={{ marginTop: '1rem' }}>
                        <div className="formula">F = qvB sin θ</div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        เมื่อ θ คือมุมระหว่างความเร็วและสนามแม่เหล็ก
                    </p>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <p><strong>วิธีใช้:</strong></p>
                    <ol style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.8' }}>
                        <li>
                            <strong>ชี้นิ้วชี้</strong>ไปในทิศทางของ<span className="highlight">ความเร็ว</span> (v) หรือกระแสไฟฟ้า (I)
                        </li>
                        <li>
                            <strong>งอนิ้วกลาง</strong>ไปในทิศทางของ<span className="highlight">สนามแม่เหล็ก</span> (B)
                        </li>
                        <li>
                            <strong>นิ้วหัวแม่มือ</strong>ชี้ไปในทิศทางของ<span className="highlight">แรง</span> (F)
                        </li>
                    </ol>
                </div>

                <div style={{
                    marginTop: '1.5rem',
                    padding: '1.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-sm)'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>☝️</div>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: 'bold', margin: 0, fontSize: '1.05rem' }}>
                                นิ้วชี้<br />ความเร็ว (v)
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🖕</div>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', margin: 0, fontSize: '1.05rem' }}>
                                นิ้วกลาง<br />สนามแม่เหล็ก (B)
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👍</div>
                            <p style={{ color: 'var(--accent-tertiary)', fontWeight: 'bold', margin: 0, fontSize: '1.05rem' }}>
                                นิ้วหัวแม่มือ<br />แรง (F)
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-tertiary)' }}>
                    <strong>⚠️ หมายเหตุสำคัญ:</strong>
                    <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                        สำหรับประจุลบ (เช่น อิเล็กตรอน) ทิศทางของแรงจะ<span className="highlight">ตรงกันข้าม</span>กับที่นิ้วหัวแม่มือชี้!
                    </p>
                </div>
            </div>

            <div className="symbol-card" style={{ marginTop: '2rem', background: 'var(--bg-primary)', border: '2px solid var(--accent-primary)' }}>
                <h3>🎓 การประยุกต์ใช้ในชีวิตประจำวัน</h3>
                <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <li>⚡ <strong>มอเตอร์ไฟฟ้า</strong> - ใช้แรงแม่เหล็กในการหมุน</li>
                    <li>🔌 <strong>เครื่องกำเนิดไฟฟ้า</strong> - แปลงพลังงานกลเป็นไฟฟ้า</li>
                    <li>🧲 <strong>MRI</strong> - เครื่องมือทางการแพทย์</li>
                    <li>📡 <strong>ลำโพงและไมโครโฟน</strong> - ใช้หลักการแม่เหล็กไฟฟ้า</li>
                    <li>🚄 <strong>รถไฟแม่เหล็ก (Maglev)</strong> - ลอยตัวด้วยแรงแม่เหล็ก</li>
                </ul>
            </div>
        </section>
    )
}

export default HistorySection
