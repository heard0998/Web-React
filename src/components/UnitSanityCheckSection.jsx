import React from 'react'

function UnitSanityCheckSection() {
    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">🔬</span>
                <h2>การตรวจสอบหน่วย (Unit Sanity Check)</h2>
            </div>

            <p>
                การตรวจสอบหน่วยเป็นวิธีที่สำคัญในการยืนยันว่าสูตรของเราถูกต้อง
                มาดูกันว่าทำไมหน่วยของ F/L จึงเป็น <span className="highlight">N/m</span> (นิวตันต่อเมตร)
            </p>

            <div className="formula-box" style={{ marginTop: '1.5rem' }}>
                <div className="formula">F/L = (μ₀ I₁ I₂) / (2π a)</div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>การวิเคราะห์หน่วยทีละขั้นตอน</h3>

            <div className="unit-breakdown">
                <div className="unit-step">
                    <strong>ขั้นที่ 1:</strong> หน่วยของแต่ละตัวแปร
                    <div style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                        <div>• μ₀ (ค่าคงที่การซึมผ่านแม่เหล็ก) = <span className="highlight">N/A²</span></div>
                        <div>• I₁ (กระแสไฟฟ้า) = <span className="highlight">A</span> (Ampere)</div>
                        <div>• I₂ (กระแสไฟฟ้า) = <span className="highlight">A</span> (Ampere)</div>
                        <div>• a (ระยะห่าง) = <span className="highlight">m</span> (meter)</div>
                        <div>• 2π = <span className="highlight">ไม่มีหน่วย</span> (dimensionless)</div>
                    </div>
                </div>

                <div className="unit-step">
                    <strong>ขั้นที่ 2:</strong> แทนหน่วยในสูตร
                    <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        [F/L] = ([μ₀] × [I₁] × [I₂]) / [a]
                    </div>
                    <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        [F/L] = (N/A² × A × A) / m
                    </div>
                </div>

                <div className="unit-step">
                    <strong>ขั้นที่ 3:</strong> คูณหน่วยในเศษ
                    <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        [F/L] = (N × A × A) / (A² × m)
                    </div>
                    <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                        [F/L] = (N × A²) / (A² × m)
                    </div>
                </div>

                <div className="unit-step" style={{ background: 'var(--bg-primary)', borderLeft: '4px solid var(--accent-primary)' }}>
                    <strong>ขั้นที่ 4:</strong> หักล้าง A² ในเศษและส่วน
                    <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
                        [F/L] = N / m
                    </div>
                    <div style={{ marginTop: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                        ✓ หน่วยถูกต้อง! (นิวตันต่อเมตร)
                    </div>
                </div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>การแสดงภาพการหักล้างหน่วย</h3>

            <div className="symbol-grid">
                <div className="symbol-card">
                    <div className="symbol-name" style={{ fontSize: '1.2rem' }}>เศษ (Numerator)</div>
                    <div style={{ fontFamily: 'var(--font-mono)', marginTop: '1rem', fontSize: '1.1rem' }}>
                        N/A² × A × A
                    </div>
                    <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                        = N × (A²/A²)
                    </div>
                    <div style={{ marginTop: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                        = N × 1 = N
                    </div>
                </div>

                <div className="symbol-card">
                    <div className="symbol-name" style={{ fontSize: '1.2rem' }}>ส่วน (Denominator)</div>
                    <div style={{ fontFamily: 'var(--font-mono)', marginTop: '1rem', fontSize: '1.1rem' }}>
                        m
                    </div>
                    <div style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                        ไม่มีการเปลี่ยนแปลง
                    </div>
                    <div style={{ marginTop: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                        = m
                    </div>
                </div>

                <div className="symbol-card" style={{ gridColumn: 'span 2', background: 'var(--bg-primary)', border: '2px solid var(--accent-primary)' }}>
                    <div className="symbol-name" style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>ผลลัพธ์สุดท้าย</div>
                    <div style={{ fontFamily: 'var(--font-mono)', marginTop: '1rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                        F/L = N/m
                    </div>
                    <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                        หน่วยของแรงต่อหน่วยความยาว = นิวตันต่อเมตร
                    </div>
                </div>
            </div>

            <div className="problem-card" style={{ marginTop: '2rem', background: 'var(--bg-secondary)' }}>
                <h3>🎯 ทำไมต้องตรวจสอบหน่วย?</h3>
                <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    <li>
                        <strong>ยืนยันความถูกต้อง:</strong> ถ้าหน่วยไม่ตรงกับที่คาดหวัง แสดงว่าสูตรผิดพลาด
                    </li>
                    <li>
                        <strong>เข้าใจความหมายทางฟิซิกส์:</strong> หน่วย N/m บอกเราว่านี่คือ "แรงต่อความยาว"
                        ซึ่งสมเหตุสมผลสำหรับสายไฟที่มีความยาว
                    </li>
                    <li>
                        <strong>ป้องกันข้อผิดพลาด:</strong> การตรวจสอบหน่วยช่วยจับข้อผิดพลาดในการคำนวณก่อนที่จะไปไกล
                    </li>
                    <li>
                        <strong>สร้างความมั่นใจ:</strong> เมื่อหน่วยถูกต้อง เราก็มั่นใจได้ว่าสูตรและการคำนวณถูกต้อง
                    </li>
                </ul>
            </div>

            <div className="symbol-card" style={{ marginTop: '1.5rem' }}>
                <h3>💡 ตัวอย่างการใช้งานจริง</h3>
                <p>
                    ถ้าเรามีสายไฟยาว 10 เมตร และคำนวณได้ว่า F/L = 2 × 10⁻⁷ N/m
                </p>
                <div style={{ fontFamily: 'var(--font-mono)', marginTop: '1rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: '0.5rem' }}>
                    แรงรวมทั้งหมด = (F/L) × L<br />
                    F_total = 2 × 10⁻⁷ N/m × 10 m<br />
                    F_total = 2 × 10⁻⁶ N
                </div>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                    สังเกตว่าหน่วย m หักล้างกัน เหลือเพียง N (นิวตัน) ซึ่งเป็นหน่วยของแรง ✓
                </p>
            </div>
        </section>
    )
}

export default UnitSanityCheckSection
