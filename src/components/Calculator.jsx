import React, { useState } from 'react'

// Permeability of free space constant
const MU_0 = 4 * Math.PI * 1e-7 // N/A²

function Calculator() {
    const [I1, setI1] = useState(1)
    const [I2, setI2] = useState(1)
    const [distance, setDistance] = useState(1)

    // Calculate force per unit length
    const calculateForce = () => {
        if (distance === 0) return 0
        return (MU_0 * I1 * I2) / (2 * Math.PI * distance)
    }

    const forcePerLength = calculateForce()
    const isAttraction = (I1 * I2) > 0
    const isRepulsion = (I1 * I2) < 0

    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">🧮</span>
                <h2>เครื่องคำนวณ (Calculator)</h2>
            </div>

            <p>
                ใช้เครื่องคำนวณด้านล่างเพื่อคำนวณแรงต่อหน่วยความยาวระหว่างสายไฟสองเส้น
                <br />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    💡 ใส่ค่ากระแสไฟฟ้าเป็นลบเพื่อแสดงทิศทางตรงกันข้าม
                </span>
            </p>

            <div className="calculator">
                <div className="calculator-inputs">
                    <div className="input-group">
                        <label htmlFor="i1">กระแสไฟฟ้า I₁ (Amperes)</label>
                        <input
                            id="i1"
                            type="number"
                            step="0.1"
                            value={I1}
                            onChange={(e) => setI1(parseFloat(e.target.value) || 0)}
                            placeholder="เช่น 1"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="i2">กระแสไฟฟ้า I₂ (Amperes)</label>
                        <input
                            id="i2"
                            type="number"
                            step="0.1"
                            value={I2}
                            onChange={(e) => setI2(parseFloat(e.target.value) || 0)}
                            placeholder="เช่น 1"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="distance">ระยะห่าง d (meters)</label>
                        <input
                            id="distance"
                            type="number"
                            step="0.01"
                            min="0.01"
                            value={distance}
                            onChange={(e) => setDistance(parseFloat(e.target.value) || 0.01)}
                            placeholder="เช่น 1"
                        />
                    </div>
                </div>

                <div className="calculator-result">
                    <div className="result-label">แรงต่อหน่วยความยาว (Force per unit length)</div>
                    <div className="result-value">
                        F/L = {forcePerLength.toExponential(4)} N/m
                    </div>
                    <div className="result-label" style={{ marginTop: '0.5rem' }}>
                        = {(forcePerLength * 1e7).toFixed(4)} × 10⁻⁷ N/m
                    </div>

                    {I1 !== 0 && I2 !== 0 && distance > 0 && (
                        <>
                            {isAttraction && (
                                <div className="force-indicator attraction">
                                    ⬅️ ➡️ แรงดึงดูด (Attraction) - สายไฟเคลื่อนเข้าหากัน
                                </div>
                            )}
                            {isRepulsion && (
                                <div className="force-indicator repulsion">
                                    ➡️ ⬅️ แรงผลัก (Repulsion) - สายไฟเคลื่อนออกจากกัน
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="problem-card" style={{ marginTop: '1.5rem', background: 'var(--bg-primary)' }}>
                    <h4>📊 การคำนวณ</h4>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <p>F/L = (μ₀ × I₁ × I₂) / (2π × d)</p>
                        <p>F/L = ({(MU_0).toExponential(2)} × {I1} × {I2}) / (2π × {distance})</p>
                        <p>F/L = {forcePerLength.toExponential(4)} N/m</p>
                    </div>
                </div>
            </div>

            <div className="symbol-card" style={{ marginTop: '2rem' }}>
                <h3>💡 เคล็ดลับการใช้งาน</h3>
                <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    <li>ใส่ค่ากระแสไฟฟ้าเป็น<span className="highlight">บวก</span>ถ้าไหลในทิศทางเดียวกัน → จะได้แรงดึงดูด</li>
                    <li>ใส่ค่ากระแสไฟฟ้าหนึ่งเป็น<span className="highlight">ลบ</span>ถ้าไหลในทิศทางตรงกันข้าม → จะได้แรงผลัก</li>
                    <li>ลองเปลี่ยนค่าระยะห่างและสังเกตว่าแรงเปลี่ยนแปลงอย่างไร</li>
                    <li>แรงจะมากขึ้นเมื่อกระแสไฟฟ้าเพิ่มขึ้นหรือระยะห่างลดลง</li>
                </ul>
            </div>
        </section>
    )
}

export default Calculator
