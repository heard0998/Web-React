import React from 'react'

function FormulaSection() {
    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">📐</span>
                <h2>สูตรคำนวณ (Formula)</h2>
            </div>

            <p>
                แรงต่อหน่วยความยาวระหว่างสายไฟสองเส้นที่ขนานกันสามารถคำนวณได้จากสูตร:
            </p>

            <div className="formula-box">
                <div className="formula">F/L = (μ₀ I₁ I₂) / (2π a)</div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>คำอธิบายสัญลักษณ์ (Symbol Explanation)</h3>

            <div className="symbol-grid">
                <div className="symbol-card">
                    <div className="symbol-name">F/L</div>
                    <div className="symbol-description">
                        <strong>แรงต่อหน่วยความยาว</strong> (Force per unit length)<br />
                        หน่วย: นิวตันต่อเมตร (N/m)<br />
                        แรงที่กระทำต่อสายไฟยาว 1 เมตร
                    </div>
                </div>

                <div className="symbol-card">
                    <div className="symbol-name">μ₀</div>
                    <div className="symbol-description">
                        <strong>ค่าคงที่พื้นฐานของแม่เหล็กผ่านของสุญญากาศ</strong> (Permeability of free space)<br />
                        μ₀ = 4π × 10⁻⁷ N/A²<br />
                        ค่าคงที่พื้นฐานของแม่เหล็กไฟฟ้า
                    </div>
                </div>

                <div className="symbol-card">
                    <div className="symbol-name">I₁, I₂</div>
                    <div className="symbol-description">
                        <strong>กระแสไฟฟ้า</strong> (Electric Current)<br />
                        หน่วย: แอมแปร์ (A)<br />
                        กระแสไฟฟ้าที่ไหลผ่านสายไฟแต่ละเส้น
                    </div>
                </div>

                <div className="symbol-card">
                    <div className="symbol-name">a</div>
                    <div className="symbol-description">
                        <strong>ระยะห่าง</strong> (Distance)<br />
                        หน่วย: เมตร (m)<br />
                        ระยะห่างระหว่างสายไฟทั้งสองเส้น
                    </div>
                </div>
            </div>

            <h3 style={{ marginTop: '2rem' }}>ทิศทางของแรง (Direction of Force)</h3>

            <div className="symbol-grid">
                <div className="symbol-card" style={{ borderLeft: '4px solid #4ade80' }}>
                    <div className="symbol-name" style={{ color: '#4ade80' }}>⬅️ ➡️ แรงดึงดูด</div>
                    <div className="symbol-description">
                        <strong>กระแสไฟฟ้าไหลในทิศทางเดียวกัน</strong><br />
                        (Currents in the same direction)<br />
                        สายไฟจะดึงดูดกัน → แรงเป็นบวก
                    </div>
                </div>

                <div className="symbol-card" style={{ borderLeft: '4px solid #f87171' }}>
                    <div className="symbol-name" style={{ color: '#f87171' }}>➡️ ⬅️ แรงผลัก</div>
                    <div className="symbol-description">
                        <strong>กระแสไฟฟ้าไหลในทิศทางตรงกันข้าม</strong><br />
                        (Currents in opposite directions)<br />
                        สายไฟจะผลักกัน → แรงเป็นลบ
                    </div>
                </div>
            </div>

            <div className="problem-card" style={{ marginTop: '2rem', background: 'var(--bg-secondary)' }}>
                <h3>💡 ความหมายทางฟิซิกส์</h3>
                <p>
                    สูตรนี้บอกเราว่า:
                </p>
                <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    <li>แรงจะ<span className="highlight">เพิ่มขึ้น</span>เมื่อกระแสไฟฟ้าในสายไฟใดสายไฟหนึ่งเพิ่มขึ้น (สัมพันธ์กับ I₁ และ I₂)</li>
                    <li>แรงจะ<span className="highlight">ลดลง</span>เมื่อระยะห่างระหว่างสายไฟเพิ่มขึ้น (สัมพันธ์ผกผันกับ d)</li>
                    <li>แรงจะกระจายอย่างสม่ำเสมอตลอดความยาวของสายไฟ</li>
                    <li>ค่าคงที่ μ₀ เป็นตัวกำหนดความแข็งแรงของปฏิสัมพันธ์แม่เหล็ก</li>
                </ul>
            </div>
        </section>
    )
}

export default FormulaSection
