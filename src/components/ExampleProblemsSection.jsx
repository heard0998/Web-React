import React from 'react'

function ExampleProblemsSection() {
    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">📝</span>
                <h2>ตัวอย่างโจทย์ (Example Problems)</h2>
            </div>

            {/* Problem 1 - Using F/L formula */}
            <div className="problem-card">
                <div className="problem-title">โจทย์ที่ 1: แรงระหว่างสายไฟขนาน</div>

                <div className="problem-given">
                    <strong>โจทย์:</strong> สายไฟสองเส้นวางขนานกันห่างกัน 1 เมตร มีกระแสไฟฟ้าไหลผ่านเส้นละ 1 แอมแปร์
                    ในทิศทางเดียวกัน จงหาแรงต่อหน่วยความยาวระหว่างสายไฟทั้งสอง
                    <br /><br />
                    <strong>Given:</strong>
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                        <li>I₁ = 1 A</li>
                        <li>I₂ = 1 A</li>
                        <li>d = 1 m</li>
                    </ul>
                </div>

                <div className="solution-steps">
                    <h4>วิธีทำ (Solution):</h4>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 1:</span>
                        ใช้สูตรแรงต่อหน่วยความยาวระหว่างสายไฟขนาน
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem', color: 'var(--accent-primary)' }}>
                            F/L = 2 × 10⁻⁷ N/m
                        </div>
                        <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            เมื่อ I₁ = I₂ = 1 A และ d = 1 m
                        </div>
                    </div>

                    <div className="step" style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                        <span className="step-number">คำตอบ:</span>
                        <div style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', fontWeight: 'bold', marginTop: '0.5rem' }}>
                            F/L = 2 × 10⁻⁷ N/m
                        </div>
                        <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            เนื่องจากกระแสไฟฟ้าไหลในทิศทางเดียวกัน สายไฟจะ<span className="highlight">ดึงดูดกัน</span>
                        </div>
                    </div>
                </div>

                <div className="symbol-card" style={{ marginTop: '1rem', background: 'var(--bg-primary)' }}>
                    <strong>💡 หมายเหตุ:</strong> ค่านี้เป็นพื้นฐานของการกำหนดหน่วย Ampere ในอดีต!
                </div>
            </div>

            {/* Problem 2 - Using F = qvB sin θ */}
            <div className="problem-card">
                <div className="problem-title">โจทย์ที่ 2: แรงแม่เหล็กต่ออนุภาคมีประจุ</div>

                <div className="problem-given">
                    <strong>โจทย์:</strong> โปรตอนเคลื่อนที่ด้วยความเร็ว 2.0 × 10⁶ m/s เข้าสู่สนามแม่เหล็กขนาด 0.50 T
                    โดยทำมุม 30° กับสนามแม่เหล็ก จงหาแรงแม่เหล็กที่กระทำต่อโปรตอน
                    <br /><br />
                    <strong>Given:</strong>
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                        <li>v = 2.0 × 10⁶ m/s</li>
                        <li>B = 0.50 T</li>
                        <li>θ = 30°</li>
                        <li>q = 1.6 × 10⁻¹⁹ C (ประจุโปรตอน)</li>
                    </ul>
                </div>

                <div className="solution-steps">
                    <h4>วิธีทำ (Solution):</h4>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 1:</span>
                        เขียนสูตร
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem', color: 'var(--accent-primary)' }}>
                            F = qvB sin θ
                        </div>
                    </div>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 2:</span>
                        แทนค่าที่โจทย์กำหนด
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            F = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50)(sin 30°)<br />
                            F = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50)(0.5)
                        </div>
                    </div>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 3:</span>
                        คำนวณ
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            F = 1.6 × 2.0 × 0.50 × 0.5 × 10⁻¹³<br />
                            F = 0.8 × 10⁻¹³ N<br />
                            F = 8.0 × 10⁻¹⁴ N
                        </div>
                    </div>

                    <div className="step" style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                        <span className="step-number">คำตอบ:</span>
                        <div style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', fontWeight: 'bold', marginTop: '0.5rem' }}>
                            F = 8.0 × 10⁻¹⁴ N
                        </div>
                    </div>
                </div>

                <div className="symbol-card" style={{ marginTop: '1rem', background: 'var(--bg-primary)' }}>
                    <strong>🎯 สังเกต:</strong>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                        <li>เมื่อ θ = 0° (ขนานกับ B) → F = 0 (ไม่มีแรง)</li>
                        <li>เมื่อ θ = 90° (ตั้งฉากกับ B) → F = qvB (แรงสูงสุด)</li>
                        <li>ทิศทางของแรงหาได้จาก<span className="highlight">กฎมือขวา</span></li>
                    </ul>
                </div>
            </div>

            {/* Problem 3 - Velocity Selector */}
            <div className="problem-card">
                <div className="problem-title">โจทย์ที่ 3: Velocity Selector</div>

                <div className="problem-given">
                    <strong>โจทย์:</strong> อิเล็กตรอนเคลื่อนที่ผ่านบริเวณที่มีทั้งสนามไฟฟ้าและสนามแม่เหล็ก โดย
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                        <li>สนามไฟฟ้า E = 1.5 × 10⁴ N/C</li>
                        <li>สนามแม่เหล็ก B = 0.30 T</li>
                    </ul>
                    อิเล็กตรอนเคลื่อนที่เป็นเส้นตรงโดยไม่เบี่ยงเบน จงหาความเร็วของอิเล็กตรอน
                    <br /><br />
                    <strong>Given:</strong>
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                        <li>E = 1.5 × 10⁴ N/C</li>
                        <li>B = 0.30 T</li>
                    </ul>
                </div>

                <div className="solution-steps">
                    <h4>วิธีทำ (Solution):</h4>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 1:</span>
                        วิเคราะห์เงื่อนไข
                        <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            เพื่อให้เคลื่อนที่เป็นเส้นตรง แรงไฟฟ้าและแรงแม่เหล็กต้อง<span className="highlight">หักล้างกัน</span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            F<sub>E</sub> = F<sub>B</sub><br />
                            qE = qvB sin θ
                        </div>
                        <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            เมื่อ v ⊥ B → θ = 90° → sin θ = 1
                        </div>
                    </div>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 2:</span>
                        หาความเร็ว
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            qE = qvB<br />
                            v = E / B
                        </div>
                    </div>

                    <div className="step">
                        <span className="step-number">ขั้นที่ 3:</span>
                        แทนค่าและคำนวณ
                        <div style={{ fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            v = (1.5 × 10⁴) / (0.30)<br />
                            v = 5.0 × 10⁴ m/s
                        </div>
                    </div>

                    <div className="step" style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                        <span className="step-number">คำตอบ:</span>
                        <div style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', fontWeight: 'bold', marginTop: '0.5rem' }}>
                            v = 5.0 × 10⁴ m/s = 50 km/s
                        </div>
                    </div>
                </div>

                <div className="symbol-card" style={{ marginTop: '1rem', background: 'var(--bg-primary)' }}>
                    <strong>💡 การประยุกต์:</strong> Velocity Selector ใช้ในเครื่อง Mass Spectrometer
                    เพื่อคัดเลือกอนุภาคที่มีความเร็วเท่ากันก่อนนำไปวิเคราะห์มวล
                </div>
            </div>

            <div className="problem-card" style={{ background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-tertiary)' }}>
                <h3>🧠 แบบฝึกหัดเพิ่มเติม</h3>
                <p>ลองคิดดูว่าจะเกิดอะไรขึ้นในกรณีต่อไปนี้:</p>
                <ol style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    <li>ถ้าอนุภาคเคลื่อนที่ขนานกับสนามแม่เหล็ก (θ = 0°) แรงจะเป็นเท่าไร?</li>
                    <li>ถ้าอนุภาคเคลื่อนที่ตั้งฉากกับสนามแม่เหล็ก (θ = 90°) แรงจะเป็นเท่าไร?</li>
                    <li>ถ้าเพิ่มความเร็วเป็น 2 เท่า แรงจะเปลี่ยนแปลงอย่างไร?</li>
                </ol>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--accent-primary)' }}>
                    💡 ลองใช้สูตร F = qvB sin θ เพื่อทดสอบคำตอบของคุณ!
                </p>
            </div>
        </section>
    )
}

export default ExampleProblemsSection
